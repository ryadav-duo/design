---
title: Buttons & Links
template: child-2col-coded.html
active_page: ['Buttons & Links', 'Small Link']
snippet_title: Default Link
notes: 'These buttons appear on each row of certain tables. They are much smaller than the normal buttons.'
example: '<a href="" title="" rel="" class="policy-link">Small Link</a>'
---

* [HTML](0)
* [SCSS](1)

```html
  <a href="" title="" rel="" class="policy-link">Small Link</a>
```
```scss
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
