---
title: Buttons & Links
template: child-2col-coded.html
active_page: buttons-links
snippet_title: Inline Buttons
notes: 'These buttons appear on each row of certain tables. They are much smaller than the normal buttons.'
example: '<button class="tiny danger remove">Inline Destructive Button</button><button class="tiny positive">Inline Positive Button</button>'
---

* [HTML](0)
* [SCSS](1)

```html
  <button class="tiny danger remove">Inline Destructive Button</button>
  <button class="tiny positive">Inline Positive Button</button>
```
```scss
  button, .button, input[type="submit"]:not(.link), input[type="reset"], input[type="button"] {
      @include button;
      @include button-style($grey);

      &.positive {
          @include button-style($duo-green);
      }

      &.danger {
          @include button-style($error-red);
      }
    }
  @mixin button {
      @include transition(background-color, border-color, box-shadow);

      border: none;
      border-radius: $border-radius;
      box-shadow: none;
      cursor: pointer;
      display: inline-block;
      font-size: $base-font-size;
      font-weight: normal;
      line-height: 1em;
      padding: 12px 16px;
      text-decoration: none;
    &.tiny {
        font-size: $base-font-size * 0.8;
        padding: 6px 8px;

        i {
            vertical-align: middle;
            margin-right: 0;
        }
    }
  }
```
