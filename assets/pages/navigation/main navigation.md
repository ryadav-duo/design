---
title: Navigation
template: child-2col-coded
active_page: Main Navigation
snippet_title: Main Navigation
notes: 'A green background denotes the current page users are on. Green links below page titles also tell what page the user is currently on. Pages with a numberical amount of things get a number floated to the right (ie: 100 users = Users 100) For new pages we use the "new" tag floated to the right.'
example: '<nav class="navigation">
  <a class="">
    <i class="icon-monitor"></i>
    <span class="label">Dashboard</span>
  </a>
  <a class="">
    <i class="icon-pie-chart"></i>
    <span class="label">Device Insight</span>
    <span class="new expired" data-expire-name="new-tab-device-insight" data-expire-count="3">NEW</span>
  </a>
  <a class="">
    <i class="icon-globe"></i>
    <span class="label">Policies</span>
    <span class="new visible" data-expire-name="new-tab-policy" data-expire-count="3">NEW</span>
    <span class="count">34</span>
  </a>
  <a class="">
    <i class="icon-padlock-round-locked"></i>
    <span class="label">Applications</span>
    <span class="count">316</span>
  </a>
  <a class="current">
    <i class="icon-users"></i>
    <span class="label">Users</span>
    <span class="count">534</span>
  </a>
  <div class="subnav open">
    <a class="">
    <span class="label">New User</span>
    </a>
    <a class="">
    <span class="label">Pending Enrollments</span>
    </a>
    <a class="">
    <span class="label">Bulk Enroll Users</span>
    </a>
    <a class="">
    <span class="label">Import Users</span>
    </a>
    <a class="">
    <span class="label">Directory Sync</span>
    </a>
    <a class="">
    <span class="label">Bypass Codes</span>
    </a>
  </div>
  <a class="">
    <i class="icon-endpoints"></i>
    <span class="label">Endpoints</span>
    <span class="new visible" data-expire-name="new-tab-endpoints" data-expire-count="3">NEW</span>
    <span class="count">19</span>
  </a>
  <a class="">
    <i class="icon-smartphone"></i>
    <span class="label">2FA Devices</span>
    <span class="count">478</span>
  </a>
  <a class="">
    <i class="icon-users"></i>
    <span class="label">Groups</span>
    <span class="count">48</span>
  </a>
  <a class="">
    <i class="icon-file-line-graph"></i>
    <span class="label">Reports</span>
  </a>
  <a class="">
    <i class="icon-users"></i>
    <span class="label">Accounts</span>
  </a>
  <a class="">
    <i class="icon-gear"></i>
    <span class="label">Settings</span>
  </a>
  <div class="support">
    <h2>Support</h2>
    <p>
      Get help via <a href="mailto:support@duosecurity.com">email</a>
      or phone (1-855-386-2884).
    </p>
    <h3>Account ID</h3>
    <p>#[real-account-id-goes-here]#</p>
    <h3>Deployment ID</h3>
    <p><a>DUOALPHA</a></p>
    <h3>Helpful Links</h3>
    <ul class="helpful-links">
      <a>Documentation</a>
      <a>User Guide</a>
      <a>Knowledge Base</a>
    </ul>
  </div>
</nav>'
---

* [HTML](0)
* [SCSS](1)

```html
<nav class="navigation">
  <a href="/" class="">
    <i class="icon-monitor"></i>
    <span class="label">Dashboard</span>
  </a>
  <a href="/insight-overview" class="">
    <i class="icon-pie-chart"></i>
    <span class="label">Device Insight</span>
    <span class="new expired" data-expire-name="new-tab-device-insight" data-expire-count="3">NEW</span>
  </a>
  <a href="/policies" class="">
    <i class="icon-globe"></i>
    <span class="label">Policies</span>
    <span class="new visible" data-expire-name="new-tab-policy" data-expire-count="3">NEW</span>
    <span class="count">34</span>
  </a>
  <a href="/applications" class="">
    <i class="icon-padlock-round-locked"></i>
    <span class="label">Applications</span>
    <span class="count">316</span>
  </a>
  <a href="/users" class="current">
    <i class="icon-users"></i>
    <span class="label">Users</span>
    <span class="count">534</span>
  </a>
  <div class="subnav">
    <a href="/users/add" class="">
    <span class="label">New User</span>
    </a>
    <a href="/users/enroll-codes" class="">
    <span class="label">Pending Enrollments</span>
    </a>
    <a href="/users/bulkenroll" class="">
    <span class="label">Bulk Enroll Users</span>
    </a>
    <a href="/users/import" class="">
    <span class="label">Import Users</span>
    </a>
    <a href="/users/directorysync" class="">
    <span class="label">Directory Sync</span>
    </a>
    <a href="/users/bypasscodes" class="">
    <span class="label">Bypass Codes</span>
    </a>
  </div>
  <a href="/endpoints" class="">
    <i class="icon-endpoints"></i>
    <span class="label">Endpoints</span>
    <span class="new visible" data-expire-name="new-tab-endpoints" data-expire-count="3">NEW</span>
    <span class="count">19</span>
  </a>
  <a href="/phones" class="">
    <i class="icon-smartphone"></i>
    <span class="label">2FA Devices</span>
    <span class="count">478</span>
  </a>
  <a href="/groups" class="">
    <i class="icon-users"></i>
    <span class="label">Groups</span>
    <span class="count">48</span>
  </a>
  <a href="/logs" class="">
    <i class="icon-file-line-graph"></i>
    <span class="label">Reports</span>
  </a>
  <a href="/accounts" class="">
    <i class="icon-users"></i>
    <span class="label">Accounts</span>
  </a>
  <a href="/settings" class="">
    <i class="icon-gear"></i>
    <span class="label">Settings</span>
  </a>
  <div class="support">
    <h2>Support</h2>
    <p>
      Get help via <a href="mailto:support@duosecurity.com">email</a>
      or phone (1-855-386-2884).
    </p>
    <h3>Account ID</h3>
    <p>#[real-account-id-goes-here]#</p>
    <h3>Deployment ID</h3>
    <p><a href="https://status.duo.com" target="_blank">DUOALPHA</a></p>
    <h3>Helpful Links</h3>
    <ul class="helpful-links">
      <a href="https://duo.com/docs">Documentation</a>
      <a href="https://guide.duo.com" target="_blank">User Guide</a>
      <a href="https://kb.duo.com" target="_blank">Knowledge Base</a>
    </ul>
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

.support {
  $support-font-size: 12px;

  font-size: $support-font-size;
  padding: 0.75rem;
  border-top: solid 1px $grey-lighter;

  h2, h3 {
      color: $grey;
      font-family: $base-font-family;
      font-size: $support-font-size;
      font-weight: $base-font-weight;
      line-height: 1;
      margin-bottom: 0.25rem;
  }

  .helpful-links {
      list-style: none;
      margin: 0;
      padding: 0;

      dd, dt {
        margin-left: 0;
        display: block;
        font-weight: normal;
        i[class*="icon-"] {
          color: $info-blue;
        }
      }
      dt {
        margin-top: 0.875rem;
      }
  }
}
```
