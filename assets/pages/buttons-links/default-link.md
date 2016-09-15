---
title: Buttons & Links
template: child-2col-coded
active_page: 'default-link'
snippet_title: Default Link
notes: 'This is a standard and most commonly used link. It can be used in body copy, lists, or stand alone to link to internal pages.'
example: '<a href="" title="" rel="">Default Link</a>'
---

* [HTML](0)
* [SCSS](1)

```html
<a href="" title="" rel="">Default Link</a>
```
```sass
a {
  @include transition(color);
  color: $info-blue;

  &:hover {
      color: darken($info-blue, 15%);
  }

  &:focus {
      outline: 2px solid $duo-green;
  }
}
```
