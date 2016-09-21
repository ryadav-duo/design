---
title: Logo Code Example
template: child-2col-coded
active_page: 'logo'
snippet_title:
notes: The Duo logo is used to orient users to each channel. When they see the logo they have a good clue that they've made it to the right place. It also provides a quick link back to the home page.
example: '<div class="base-header">
<svg class="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 320">
  <g>
  <path class="logo-path logo-path-d" d="M0,0 L0,150 L320,150 C320,75 235,0 160,0 L0,0 Z"></path>
  <path class="logo-path logo-path-d logo-path-translucent" d="M0,320 L0,170 L320,170 C320,245 245,320 160,320 L0,320 Z"></path>
  </g>
  <g transform="translate(340, 0)">
  <path class="logo-path logo-path-u" d="M0,160 C0,250 75,320 150,320 L150,0 L0,0 L0,160 Z"></path>
  <path class="logo-path logo-path-u logo-path-translucent" d="M170,320 L170,0 L320,0 L320,320 L170,320 Z"></path>
  </g>
  <g transform="translate(680, 0)">
  <path class="logo-path logo-path-o" d="M0,150 L320,150 C320,75 250,0 160,0 C70,0 0,75 0,150 Z"></path>
  <path class="logo-path logo-path-o logo-path-translucent" d="M0,170 L320,170 C320,245 250,320 160,320 C70,320 0,245 0,170 Z"></path>
  </g>
</svg>
</div>'
---

* [html](0)
* [css](1)

```html
<svg class="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 320">
 <g>
   <path class="logo-path logo-path-d" d="M0,0 L0,150 L320,150 C320,75 235,0 160,0 L0,0 Z"></path>
   <path class="logo-path logo-path-d logo-path-translucent" d="M0,320 L0,170 L320,170 C320,245 245,320 160,320 L0,320 Z"></path>
   </g>
   <g transform="translate(340, 0)">
   <path class="logo-path logo-path-u" d="M0,160 C0,250 75,320 150,320 L150,0 L0,0 L0,160 Z"></path>
   <path class="logo-path logo-path-u logo-path-translucent" d="M170,320 L170,0 L320,0 L320,320 L170,320 Z"></path>
   </g>
   <g transform="translate(680, 0)">
   <path class="logo-path logo-path-o" d="M0,150 L320,150 C320,75 250,0 160,0 C70,0 0,75 0,150 Z"></path>
  <path class="logo-path logo-path-o logo-path-translucent" d="M0,170 L320,170 C320,245 250,320 160,320 C70,320 0,245 0,170 Z"></path>
 </g>
</svg>
```
```sass
.logo-path {
  display: block;
  margin: 0 auto;
  height: 40px;
  max-width: 100px;
}
```
