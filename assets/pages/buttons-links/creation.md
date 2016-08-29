---
title: Buttons & Links
template: child-2col-coded
active_page: creation
snippet_title: Creation Action Button
notes: 'Clicking on a Green button will either create a new thing or take you to the beginning of the process of creating a new thing.'
example: '<button type="submit" label="Creation Button" class="positive">Creation Button</button>'
---

* [HTML](0)
* [SCSS](1)

```html
<button type="submit" class="positive">Creation Button</button>
```
```sass
button, .button, input[type="submit"]:not(.link), input[type="reset"], input[type="button"] {
  @include button;
  @include button-style($grey);
  &.positive {
      @include button-style($duo-green);
  }
}
```
