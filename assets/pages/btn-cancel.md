---
title: Buttons & Links
template: child-2col-coded.html
active_page: ['Buttons & Links', 'Cancel Button']
snippet_title: Cancel Button
notes: 'This is a harmless secondary action button that counteracts a destructive action.'
example: '<button class="button">Cancel Button</button>'
---

* [HTML](0)
* [SCSS](1)

```html
  <button class="button">Cancel Button</button>
```
```scss
  button, .button, input[type="submit"]:not(.link), input[type="reset"], input[type="button"] {
    @include button;
    @include button-style($grey);
    &.secondary {
        @include button-style($grey-light, $info-blue);
    }
  }
```
