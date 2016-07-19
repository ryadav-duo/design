---
title: Buttons & Links
template: child-2col-coded.html
active_page: buttons-links
snippet_title: Dropdown Button
notes: 'Clicking on this will cause a small dropdown menu to appear with options related to the dropdown button title.'
example: '<div class="dropdown">
  <div class="dropdown-toggle button">
    <span>Dropdown Button</span><i class="icon-chevron-thick-down"></i>
  </div>
  <div class="dropdown-content">
    <a href="#" class="dropdown-print">Sub Item 1</a>
    <a href="#" class="dropdown-print">Sub Item 2</a>
    <a href="#" class="dropdown-print">Sub Item 3</a>
    <a href="#" class="dropdown-print">Sub Item 4</a>
  </div>
</div>'
---

* [HTML](0)
* [SCSS](1)

```html
  <div class="dropdown">
    <div class="dropdown-toggle button">
      <span>Dropdown Button</span><i class="icon-chevron-thick-down"></i>
    </div>
    <div class="dropdown-content">
      <a href="#" class="dropdown-print">Sub Item 1</a>
      <a href="#" class="dropdown-print">Sub Item 2</a>
      <a href="#" class="dropdown-print">Sub Item 3</a>
      <a href="#" class="dropdown-print">Sub Item 4</a>
    </div>
  </div>
```
```scss
  .dropdown {
      display: inline-block;
      position: relative;
  }

  .dropdown-toggle {
      @include transition(background-color);

      border-radius: $border-radius;
      height: 40px;
      padding: 0 8px;

      &:not(.disabled):not(.button) {
          cursor: pointer;
          &:hover {
              background-color: $grey-light;

              @include low-res {
                  background-color: $grey-light-low-res;
              }
          }
      }

      &.dropdown-toggle-green {
          background-color: $duo-green;
          color: white;

          &:hover {
              background-color: $duo-green-dark;
          }
      }

      img, span {
          height: calc(100% - 8px);
          line-height: calc(100% - 8px);
          vertical-align: middle;
          margin: 4px;
      }

      img {
          border-radius: $border-radius;
      }

      span:first-child {
          line-height: 40px;
      }
      i[class^="icon"] {
          position: relative;
      }
      .icon-chevron-thick-down {
          top: 2px;
          left: -2px;
      }
  }

  .dropdown-content {
      background: $grey-darker;
      border-radius: $border-radius;
      display: none;
      padding: 16px;
      position: absolute;
      top: calc(100% + 8px);
      right: 0;
      z-index: 10;

      &::before {
          position: absolute;
          content: ' ';
          width: 8px;
          height: 8px;
          border: 8px solid transparent;
          border-bottom-color: $grey-darker;
          bottom: 100%;
          right: 8px;
      }

      a {
          @include transition(color);

          display: block;
          padding: 4px 8px;
          color: $grey-light;
          text-decoration: none;

          &:hover {
              color: white;
          }
      }
  }
```
