---
title: Navigation
template: child-2col-coded
active_page: 'main-navigation'
snippet_title: Main Navigation
notes: 'A blue background denotes the current page users are on. Grey links below page titles also tell what page the user is currently on. Pages with an associated quantity of items get a number floated to the right (ie: 100 users = Users 100).'
example: '<nav class="navigation">
  <a class="">
    Dashboard
  </a>
  <a class="">
    Device Insight
  </a>
  <a class="">
    Policies
    <span class="count">34</span>
  </a>
  <a class="">
    Applications
    <span class="count">316</span>
  </a>
  <a class="current">
    Users
    <span class="count">534</span>
  </a>
  <div class="subnav open">
    <a class="">
    New User
    </a>
    <a class="">
    Pending Enrollments
    </a>
    <a class="">
    Bulk Enroll Users
    </a>
    <a class="">
    Import Users
    </a>
    <a class="">
    Directory Sync
    </a>
    <a class="">
    Bypass Codes
    </a>
  </div>
  <a class="">
    Endpoints
    <span class="count">19</span>
  </a>
  <a class="">
    2FA Devices
    <span class="count">478</span>
  </a>
  <a class="">
    Groups
    <span class="count">48</span>
  </a>
  <a class="">
    Reports
  </a>
  <a class="">
    Accounts
  </a>
  <a class="">
    Settings
  </a>
  <div class="support">
  <dl class="helpful-links">
    <dt><h2>Support</h2></dt>
    <dd>
      Need help? <a href="mailto:support@duosecurity.com" title="launch email addressed to duo">Email Support</a><br> or call 1-855-386-2884.
    </dd>
    <dt><h3>Account ID</h3></dt>
    <dd>[account id goes here]</dd>
    <dt><h3>Deployment ID</h3></dt>
    <dd><a href="https://status.duo.com" target="_blank">DUOALPHA<i class="icon-new-window"></i></a></dd>
    <dt><h3>Helpful Links</h3></dt>
    <dd><a href="https://duo.com/docs" target="_blank">Documentation<i class="icon-new-window"></i></a></dd>
    <dd><a href="https://guide.duo.com" target="_blank">User Guide<i class="icon-new-window"></i></a></dd>
    <dd><a href="https://kb.duo.com" target="_blank">Knowledge Base<i class="icon-new-window"></i></a></dd>
    <dd>
    </dd>
  </dl></div>
</nav>'
---

* [HTML](0)
* [SCSS](1)

```html
<nav class="navigation">
  <a class="">
    Dashboard
  </a>
  <a class="">
    Device Insight
  </a>
  <a class="">
    Policies
    <span class="count">34</span>
  </a>
  <a class="">
    Applications
    <span class="count">316</span>
  </a>
  <a class="current">
    Users
    <span class="count">534</span>
  </a>
  <div class="subnav open">
    <a class="">
    New User
    </a>
    <a class="">
    Pending Enrollments
    </a>
    <a class="">
    Bulk Enroll Users
    </a>
    <a class="">
    Import Users
    </a>
    <a class="">
    Directory Sync
    </a>
    <a class="">
    Bypass Codes
    </a>
  </div>
  <a class="">
    Endpoints
    <span class="count">19</span>
  </a>
  <a class="">
    2FA Devices
    <span class="count">478</span>
  </a>
  <a class="">
    Groups
    <span class="count">48</span>
  </a>
  <a class="">
    Reports
  </a>
  <a class="">
    Accounts
  </a>
  <a class="">
    Settings
  </a>
  <div class="support">
  <dl class="helpful-links">
    <dt><h2>Support</h2></dt>
    <dd>
      Need help? <a href="mailto:support@duosecurity.com" title="launch email addressed to duo">Email Support</a><br> or call 1-855-386-2884.
    </dd>
    <dt><h3>Account ID</h3></dt>
    <dd>[account id goes here]</dd>
    <dt><h3>Deployment ID</h3></dt>
    <dd><a href="https://status.duo.com" target="_blank">DUOALPHA<i class="icon-new-window"></i></a></dd>
    <dt><h3>Helpful Links</h3></dt>
    <dd><a href="https://duo.com/docs" target="_blank">Documentation<i class="icon-new-window"></i></a></dd>
    <dd><a href="https://guide.duo.com" target="_blank">User Guide<i class="icon-new-window"></i></a></dd>
    <dd><a href="https://kb.duo.com" target="_blank">Knowledge Base<i class="icon-new-window"></i></a></dd>
    <dd>
    </dd>
  </dl></div>
</nav>
```
```sass
.navigation {
    margin-bottom: .688rem; // 11/16

    > a {
        @include transition(background, color);
        @include no-box-shadow;
        color: $default-link-color;
        display: block;
        font-size: .875rem;
        line-height: 1.25em;
        padding: .687rem 1.5rem;
        position: relative;
        text-decoration: none;

        &:focus {
            @include no-box-shadow;
            transition-duration: 0s;
            border-radius: 0;
            z-index: 3000;
        }

        &:hover {
            @include no-box-shadow;
            background-color: $nav-state-color;
            .count {
                color: $default-link-color;
            }
        }

        &:active {
            background-color: $white;
        }

        &.current {
            background: $nav-state-color;

            .count {
                color: $default-link-color;
            }
        }

        .flexbox & {
            display: flex;
            align-items: baseline;

        }
    }

    .count {
        position: absolute;
        top: .688rem; // 11/16
        right: 1.5rem; // 24/16
        color: $count-color;
        transition: color $fast-ease;

        .flexbox & {
            position: absolute;
        }
    }
}

.subnav {
    padding: 0 0 4px 0;

    .count {
        top: .5rem; // 8/16
    }

    > a {
        @include transition(color);
        @include no-box-shadow;
        color: $default-link-color;
        display: block;
        font-size: .75rem; // 12/16
        line-height: 1.25em;
        padding: .5rem .375rem .5rem 2.25rem; // 8/16, 8/16
        position: relative;
        text-decoration: none;

        &:hover {
            @include no-box-shadow;
            background-color: $nav-state-color;
            border-radius: 0;
            .count {
                color: $default-link-color;
            }
        }

        &:focus {
            @include no-box-shadow;
            border-radius: 0;
            z-index: 3000;
        }

        &:active {
            background-color: $white;
        }

        &.current {
            background-color: $nav-state-color;
            .count {
                color: $default-link-color;
            }
        }

        .flexbox & {
            display: flex;
            align-items: baseline;
        }
    }
}

.support {
    font-size: $small-font-size;
    padding: 1.5rem .75rem 2rem 1.5rem; // 24/16
    border-top: solid 1px $grey-lighter;

    h2,
    h3 {
        color: $grey;
        font-family: $base-font-family;
        font-size: .7rem;
        font-weight: $base-font-weight;
        line-height: 1;
        margin-bottom: 0.25rem;
    }

    h2 {
        margin-top: 0;
    }

    .helpful-links {
        list-style: none;
        margin: 0;
        padding: 0;

        dd,
        dt {
            margin-left: 0;
            display: block;
            font-weight: normal;
        }

        dt {
            margin-top: 0.875rem;
            &:first-child {
                margin-top: 0;
            }
        }

        dd {
            margin-bottom: .25rem; // 4/16 set to 4px to add some breathing room
        }
    }
}
```
