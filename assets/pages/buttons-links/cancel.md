---
title: Buttons & Links
template: child-2col-coded
active_page: 'cancel'
snippet_title: Cancel Button
notes: 'This is a secondary action which allows the user to leave their current workflow.'
example: '<button class="button">Cancel Button</button>'
---

* [HTML](0)
* [SCSS](1)

```html
<button class="button">Cancel Button</button>
```
```sass
button, .button, input[type="submit"]:not(.link), input[type="reset"], input[type="button"] {
  @include button;
  @include button-style($grey);
  &.secondary {
      @include button-style($grey-light, $info-blue);
  }
}
```
