---
title: Navigation
template: child-2col-coded
active_page: 'subpage'
snippet_title: Subpage Links
notes: "Subpages and actions are listed below the 'current page' nav-item. If you're on the page of the sub-page it will appear green."
example: '<nav class="navigation">
  <a class="current">
    Users
    <span class="count">534</span>
  </a>
  <div class="subnav open">
    <a class="">
    Sub-Link 1
    </a>
    <a class="">
    Sub-Link 2
    </a>
  </div>
</nav>'
---

* [HTML](0)
* [SCSS](1)

```html
<nav class="navigation">
  <a class="current">
    Users
    <span class="count">534</span>
  </a>
  <div class="subnav">
    <a class="">
      Sub-Link 1
    </a>
    <a class="">
      Sub-Link 2
    </a>
  </div>
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

```
