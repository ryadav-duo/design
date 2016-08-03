---
title: Buttons & Links
template: child-2col-coded.html
active_page: ['Buttons & Links', 'Breadcrumb Links']
snippet_title: New Window Link
notes: 'Breadcrumb links navigate users to pages higher in the page hierarchy.'
example: '<p class="breadcrumbs">
  <a href="#">Base Directory</a>
  <i class="icon-chevron-thick-right"></i>
  <a href="#">Previous Directory</a>
  <i class="icon-chevron-thick-right"></i>
  Current Directory
</p>'
---

* [HTML](0)
* [SCSS](1)

```html
<p class="breadcrumbs">
  <a href="#">Base Directory</a>
  <i class="icon-chevron-thick-right"></i>
  <a href="#">Previous Directory</a>
  <i class="icon-chevron-thick-right"></i>
  Current Directory
</p>
```
```sass
.breadcrumbs {
  font-size: small;

  a {
      color: $grey;

      &:hover {
          color: $grey-dark;
      }
  }

  i {
      margin: 0 8px;
  }

  @include low-res {
      a:hover {
          color: $grey-dark-low-res;
      }
  }
}
```
