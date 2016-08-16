// TODO: ES6ify all of this

/* global he:true */
/* global Bloodhound:true */
/* global $:true */


(function() {
    var ESCAPE = 27;
    var FORWARD_SLASH = 191;

    function safeDecode(str) {
        try {
            return he.decode(str);
        } catch(e) {
            return '';
        }
    }

    /*
    XXX - We do not log u2f tokens as of now because there is no page
    for viewing a single u2f token in the admin panel as of now.
    */
    function createDataset(name, displayKey, template) {
        var bh = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace(displayKey),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            limit: 6,
            remote: {
                url: '/search/' + name + '?q=%QUERY',
                filter: function(res) {
                    return res.response;
                }
            }
        });

        bh.initialize();

        return {
            name: name,
            displayKey: function(o) {
                if (o.more) {
                    return '...';
                } else {
                    if (o[displayKey]) {
                        return he.decode(o[displayKey]);
                    }
                    return '';
                }
            },
            source: bh.ttAdapter(),
            templates: {
                suggestion: function(o) {
                    if (o.more) {
                        var tmpl = '<span class="more-link">View more %s →</span>';
                        return DuoApp.format(tmpl, name);
                    } else {
                        return template(o);
                    }
                }
            }
        };
    }

    var sets = [
        createDataset('users', 'uname', function(u) {
            var str = ['<span class="ss-icon">👤</span><p>'];

            if (u.realname) {
                str.push(u.realname);
                str.push(' <small>(');
                str.push(u.uname);
                str.push(')</small>');
            } else {
                str.push(u.uname);
            }

            str.push('</p><p>');
            str.push(u.email || 'User');
            str.push('</p>');

            return str.join('');
        }),
        createDataset('applications', 'iname', function(i) {
            var str = ['<span class="ss-icon">🔒</span><p>'];

            str.push(i.iname);
            str.push('</p><p>');
            str.push(i.type);
            str.push('</p>');

            return str.join('');
        }),
        createDataset('phones', 'number', function(p) {
            var str = ['<span class="ss-icon">📞</span><p>'];

            if (p.pname) {
                str.push(p.pname);

                if (p.number) {
                    str.push(' <small>(');
                    str.push(safeDecode(p.number));
                    str.push(')</small>');
                }
            } else if (p.number) {
                str.push(safeDecode(p.number));
            } else {
                str.push('<i>Unnamed phone</i>');
            }

            str.push('</p><p>');
            str.push('Phone');
            str.push('</p>');

            return str.join('');
        }),
        createDataset('hardtokens', 'serialnumber', function(t) {
            var str = ['<span class="ss-icon">🔑</span><p>'];

            str.push(t.serialnumber);
            str.push('</p><p>');
            str.push('Hardware Token');
            str.push('</p>');

            return str.join('');
        }),
        createDataset('groups', 'group_name', function(g) {
            var str = ['<span class="ss-icon">👥</span><p>'];

            str.push(g.group_name);
            if (g.group_desc) {
                str.push(' <small>(');
                str.push(g.group_desc);
                str.push(')</small>');
            }
            str.push('</p><p>');
            str.push('Group');
            str.push('</p>');

            return str.join('');
        })
    ];

    function handleTypeaheadEvent(e, o, ds) {
        var key;

        if (o.more) {
            return redirect(ds, o.more, true);
        }

        switch(ds) {
            case 'applications':
                key = o.ikey;
                break;
            case 'users':
                key = o.ukey;
                break;
            case 'phones':
                key = o.pkey;
                break;
            case 'hardtokens':
                key = o.hkey;
                break;
            case 'groups':
                key = o.gkey;
                break;
            default:
                return;
        }

        return redirect(ds, key);
    }

    function redirect(oType, key, search) {
        if (search) {
            return window.location.replace(DuoApp.format('/%s?q=%s', oType, key));
        } else {
            return window.location.replace(DuoApp.format('/%s/%s', oType, key));
        }
    }

    var opts = {
        highlight: true,
        hint: false
    };

    $(function() {
        $('.wonka-bar input').typeahead(opts, sets)
            .on('typeahead:selected', handleTypeaheadEvent)
            .on('typeahead:autocompleted', handleTypeaheadEvent);

        // listen on keydown because some browsers (*cough FF*) use forward slash to activate find
        // http://stackoverflow.com/questions/7797937/how-to-bypass-quick-search-firefox-feature-and-capture-forward-slash-keypress
        $(document).keydown(function(e) {
            var focused = $(document.activeElement);
            var typeable = 'textarea,input:not([type=button],[type=submit],[type=checkbox],[type=radio])';

            // if escaping in the wonka bar, unfocus
            if (focused.is('.wonka-bar input') && e.keyCode === ESCAPE) {
                $('.wonka-bar input').blur();
            }

            // focus the wonka bar on forward slash, unless currently focused
            // on a typeable field
            if (!focused.is(typeable) && e.keyCode === FORWARD_SLASH) {
                e.preventDefault();
                $('.wonka-bar input').focus();
            }
        });
    });
}());
