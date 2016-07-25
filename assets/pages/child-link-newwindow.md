---
title: Buttons & Links
template: child-2col-coded.html
active_page: buttons-links
snippet_title: New Window Link
notes: 'Use this icon on a link that links outside of the duo site.'
example: '<a href="" title="" rel="" class="help-url"><span>Open in a new window</span> <i class="icon-new-window "></i></a>'
---

* [HTML](0)
* [SCSS](1)

```html
  <a href="" title="" rel="" class="help-url"><span>Open in a new window</span> <i class="icon-new-window "></i></a>
```
```scss
  $font-family-name: "Duo Admin Icons";
  $font-name: "duo-admin";
  $font-path: "../../fonts/duo-admin";

  @font-face {
    font-family: $font-family-name;
    src: url("#{$font-path}/#{$font-name}.eot"); /* IE */
    src:url("#{$font-path}/#{$font-name}.eot?#iefix") format("embedded-opentype"),
        url("#{$font-path}/#{$font-name}.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }
  [data-icon]:before {
    font-family: $font-family-name !important;
    content: attr(data-icon);
    font-style: normal !important;
    font-weight: normal !important;
    font-variant: normal !important;
    text-transform: none !important;
    speak: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  [class^="icon-"]:before,
  [class*=" icon-"]:before {
    font-family: $font-family-name !important;
    font-style: normal !important;
    font-weight: normal !important;
    font-variant: normal !important;
    text-transform: none !important;
    speak: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .icon-new-window:before {
    content: "\e01f";
  }
```
