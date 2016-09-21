---
title: Forms
template: child-2col-coded
active_page: 'configuration-input'
snippet_title: Configuration Input Field
notes: 'Configuration input field for text, is used rarely. Generally seen in settings pannel or to display obscured user data.'
example: '
<span class="key key_holder">
  <input type="text" readonly="readonly" class="key click_to_select_all" value="#KEYVALUEHERE#">
</span>
'
---

* [HTML](0)
* [SCSS](1)

```html
<td class="key key_holder">
  <input type="text" readonly="readonly" class="key click_to_select_all" value="#KEYVALUEHERE#">
</td>
```
```sass
.key {
    font-family: Monaco, "Courier New", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", monospace;

    &.placeholder {
        color: #999;
    }
}
.key_holder input {
    padding: 4px 4px 2px 4px;
    width: 300px;
    font-size: 12px;
    background-color: #f7f7f7;
    color: #555;
    border: 1px dotted #ccc;
    outline: none;
}
```
