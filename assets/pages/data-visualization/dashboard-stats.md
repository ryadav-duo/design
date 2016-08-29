---
title: Dashboard Statistics
template: child-2col-coded
active_page: 'dasboard-stats'
snippet_title: Dashboard Stats
notes: ''
example: '
<div class="at-a-glance">
  <div class="number-link">
    <a href="/users">
      <span class="number">12</span>
      <span class="what">Users</span>
    </a>
  </div>
  <div class="number-link">
    <a href="/phones">
      <span class="number">51</span>
      <span class="what">2FA Devices</span>
    </a>
  </div>
  <div class="number-link">
    <a href="/applications">
      <span class="number">15</span>
      <span class="what">Applications</span>
    </a>
  </div>

  <div class="number-link">
    <a href="/admins">
      <span class="number">3</span>
      <span class="what">Administrators</span>
    </a>
  </div>

</div>'
---

* [HTML](0)
* [SCSS](1)

```html
<div class="at-a-glance">
  <div class="number-link">
    <a href="/users">
      <span class="number">12</span>
      <span class="what">Users</span>
    </a>
  </div>
  <div class="number-link">
    <a href="/phones">
      <span class="number">51</span>
      <span class="what">2FA Devices</span>
    </a>
  </div>
  <div class="number-link">
    <a href="/applications">
      <span class="number">15</span>
      <span class="what">Applications</span>
    </a>
  </div>

  <div class="number-link">
    <a href="/admins">
      <span class="number">3</span>
      <span class="what">Administrators</span>
    </a>
  </div>

</div>
```
```sass
.at-a-glance {
    margin-bottom: 20px;

    .flexbox & {
        display: flex;
    }
}

.number-link {
    display: inline-block;
    margin-right: 10px;
    min-width: 120px;

    .flexbox & {
        flex: 1;
    }

    a {
        background: white;
        display: block;
        text-decoration: none;
        padding: 1rem;
        text-align: center;

        &[href]:hover {
            background: darken(white, 1%);
        }

        .number {
            display: block;
            font-size: 2.5vw;
            line-height: 48px;
            margin-bottom: 8px;
            color: $duo-blue;
            font-weight: 300;
        }

        .what {
            text-transform: uppercase;
            font-size: 12px;
            color: $grey;

            @include low-res {
                color: $grey-dark-low-res;
            }
        }

        @media screen and (max-width: 1060px) {
            .number {
                font-size: 24px;
                line-height: 36px;
            }

            .what {
                font-size: 10px;
            }
        }
    }

    &:last-child {
        margin-right: 0;
    }
}
```
