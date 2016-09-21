---
title: Buttons & Links
template: child-2col-coded
active_page: 'new-window'
snippet_title: New Window Link
notes: 'Use this link type when sending the user anywhere outside of the current website or application &mdash; typically when navigation away from the current domain.'
example: '<a href="" title="" rel="" target="_blank">Open in a new window <i class="icon-new-window "></i></a>'
---

* [HTML](0)
* [SCSS](1)

```html
<a href="" title="" rel="" target="_blank">Open in a new window <i class="icon-new-window "></i></a>
```
```sass
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
a[target="_blank"] i.icon-new-window {
  display: inline-block;
  text-decoration: none;
  padding-left: 6px;
  font-size: 75%;
}
```
