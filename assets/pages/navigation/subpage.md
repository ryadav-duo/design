---
title: Navigation
template: child-2col-coded
active_page: 'subpage'
snippet_title: Subpage Links
notes: "Subpages and actions are listed below the 'current page' nav-item. If you're on the page of the sub-page it will appear green."
example: '<nav class="navigation">
  <a class="current">
    <i class="icon-users"></i>
    <span class="label">Users</span>
    <span class="count">534</span>
  </a>
  <div class="subnav open">
    <a class="">
    <span class="label current">Sub-Link 1</span>
    </a>
    <a class="">
    <span class="label">Sub-Link 2</span>
    </a>
  </div>
</nav>'
---

* [HTML](0)
* [SCSS](1)

```html
<nav class="navigation">
  <a class="current">
    <i class="icon-users"></i>
    <span class="label">Users</span>
    <span class="count">534</span>
  </a>
  <div class="subnav">
    <a class="">
      <span class="label current">Sub-Link 1</span>
    </a>
    <a class="">
      <span class="label">Sub-Link 2</span>
    </a>
  </div>
</nav>
```
```sass
.navigation {
  margin-bottom: 0;

  > a {
      @include transition(background, color);

      color: inherit;
      display: block;
      font-size: 14px;
      line-height: 26px;
      padding: 8px 12px;
      position: relative;
      text-decoration: none;

      &:focus {
          transition-duration: 0s;
      }

      &:hover, &:focus {
          color: $duo-green;
      }

      &.current {
          background: $duo-green;
          color: white;

          .new {
            border-color: white;
            color: white;
          }

          &:hover {
              background: $duo-green-dark;
          }
      }

      .flexbox & {
          display: flex;
          align-items: baseline;

          .label {
              flex: 1;
          }
      }
  }

  [class^="icon"] {
      display: inline-block;
      font-size: 16px;
      margin-right: 12px;
      opacity: 0.8;
      text-align: center;
      width: 18px;

      .flexbox & {
          align-self: center;
      }
  }

  .count, .new {
      font-size: small;
      opacity: 0.5;
      position: absolute;
      top: 10px;
      right: 16px;

      .flexbox & {
          position: absolute;
      }
  }

  .new {
      border: 2px solid $duo-green;
      border-radius: $border-radius;
      color: $duo-green;
      font-size: 11px;
      height: 20px;
      line-height: 11px;
      padding: 2px;

      & + .count {
          display: none;
      }

      &.expired + .count {
          display: block;
      }
  }
}

.subnav {
  background-color: $grey-lighter;
  padding: 8px 0;

  .count, .new {
      top: 3px;
  }

  > a {
      @include transition(color);

      color: $grey-darker;
      display: block;
      font-size: 12px;
      line-height: 22px;
      padding: 4px 16px;
      position: relative;
      text-decoration: none;

      &:hover, &:focus {
          color: $duo-green-dark;
      }

      &.current {
          color: $duo-green;
      }

      .flexbox & {
          display: flex;
          align-items: baseline;

          .label {
              flex: 1;
          }
      }
  }
}
```
