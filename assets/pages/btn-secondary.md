---
title: Buttons & Links
template: child-2col-coded.html
active_page: ['buttons-links', 'child-btn-secondary']
snippet_title: Secondary Button
notes: "This button isn't the main CTA on the page. Multiple may appear at a time on the same page."
example: '<button class="secondary">Secondary Action Button</button>'
---

* [HTML](0)
* [SCSS](1)

```html
  <button class="secondary">Secondary Action Button</button>
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
