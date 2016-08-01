---
title: Navigation
template: child-2col-coded.html
active_page: ['Navigation', 'Unselected Nav Link']
snippet_title: Unselected Sidebar Page
notes: 'This is a normal unactive navigation link. The numbers to the right indicate the amount of those that the user has (ie: 1,155 Applications, or 35 Devices, etc)'
example: '<nav class="navigation">
  <a class="">
    <i class="icon-users"></i>
    <span class="label">Users</span>
  </a>
</nav>'
---

* [HTML](0)
* [SCSS](1)

```html
  <nav class="navigation">
    <a class="">
      <i class="icon-users"></i>
      <span class="label">Users</span>
    </a>
  </nav>
```
```scss
.navigation {
    margin-bottom: 0;

    > a {
        @include transition(background, color);

        color: inherit;
        display: block;
        font-size: 14px;
        line-height: 26px;
        padding: 8px 12px;
        position: relative;
        text-decoration: none;

        &:focus {
            transition-duration: 0s;
        }

        &:hover, &:focus {
            color: $duo-green;
        }

        &.current {
            background: $duo-green;
            color: white;

            .new {
              border-color: white;
              color: white;
            }

            &:hover {
                background: $duo-green-dark;
            }
        }

        .flexbox & {
            display: flex;
            align-items: baseline;

            .label {
                flex: 1;
            }
        }
    }

    [class^="icon"] {
        display: inline-block;
        font-size: 16px;
        margin-right: 12px;
        opacity: 0.8;
        text-align: center;
        width: 18px;

        .flexbox & {
            align-self: center;
        }
    }

    .count, .new {
        font-size: small;
        opacity: 0.5;
        position: absolute;
        top: 10px;
        right: 16px;

        .flexbox & {
            position: absolute;
        }
    }

    .new {
        border: 2px solid $duo-green;
        border-radius: $border-radius;
        color: $duo-green;
        font-size: 11px;
        height: 20px;
        line-height: 11px;
        padding: 2px;

        & + .count {
            display: none;
        }

        &.expired + .count {
            display: block;
        }
    }
}
```
