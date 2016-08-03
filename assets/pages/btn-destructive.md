---
title: Buttons & Links
template: child-2col-coded.html
active_page: ['Buttons & Links', 'Destructive Button']
snippet_title: Destructive Action Button
notes: 'Clicking on a Red button will do something dangerous. The first time you click it, it will give you a confirmation modal. Within a modal, it will be the final action.'
example: '<button class="danger">Destructive Button</button>'
---

* [HTML](0)
* [SCSS](1)

```html
<button class="negative">Destructive Button</button>
```
```sass
button, .button, input[type="submit"]:not(.link), input[type="reset"], input[type="button"] {
  @include button;
  @include button-style($grey);
  &.danger {
      @include button-style($error-red);
  }
}
```
