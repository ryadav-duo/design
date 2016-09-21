---
title: Buttons & Links
template: child-2col-coded
active_page: 'secondary'
snippet_title: Secondary Button
notes: "This button isn't the main call-to-action (CTA) on the page. Multiple instances may appear on the same page."
example: '<button class="secondary">Secondary Action Button</button>'
---

* [HTML](0)
* [SCSS](1)

```html
<button class="secondary">Secondary Action Button</button>
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
