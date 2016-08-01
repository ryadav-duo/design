---
title: Buttons & Links
template: child-2col-coded.html
active_page: ['Buttons & Links', 'Dark Link']
snippet_title: Dark Link
notes: 'These buttons appear on each row of certain tables. They are much smaller than the normal buttons.'
example: '<div class="page-message">
<p>See the <a href="" class="" rel="">Dark Link</a> as a continuation of body copy inside of modal.</p>
</div>'
---

* [HTML](0)
* [SCSS](1)

```html
  <div class="page-message">
    <p>See the <a href="" class="" rel="">Dark Link</a> as a continuation of body copy inside of modal.</p>
  </div>
```
```scss
  @mixin message($color, $color-light) {
    background-color: $color-light;
    border-radius: $border-radius;
    color: $color;
    padding: 1rem;
    position: relative;
    margin-top: 0;
    margin-bottom: 1rem;

    a {
        color: darken($color, 10%);

        &:hover { color: darken($color, 20%); }
    }
  }
  .page-message {
      @include clearfix;
      @include message($grey-dark, $info-blue-light);
    }

```
