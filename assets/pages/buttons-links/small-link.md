---
title: Buttons & Links
template: child-2col-coded
active_page: 'small-link'
snippet_title: Small Link
notes: 'Small links are used in footers or instances when the link is downplayed in the hierarchy.'
example: '<a href="" title="" rel="" class="policy-link">Small Link</a>'
---

* [HTML](0)
* [SCSS](1)

```html
<a href="" title="" rel="" class="policy-link">Small Link</a>
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
.policy-link {
  margin-top: 5px;
  font-size: 12px;
  line-height: 17px;
}
```
