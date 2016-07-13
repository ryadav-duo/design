---
title: Navigation
template: child-2col-coded.html
active_page: navigation
snippet_title: Navigation
notes: 'A green background denotes the current page users are on. Green links below page titles also tell what page the user is currently on. Pages with a numberical amount of things get a number floated to the right (ie: 100 users = Users 100) For new pages we use the "new" tag floated to the right.'
example: '<nav class="navigation">
  <a class="current">
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
  <a class="">
    <i class="icon-users"></i>
    <span class="label">Users</span>
    <span class="count">534</span>
  </a>
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

* [html](0)

```html
  <nav class="navigation">
    <a href="/" class="current">
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
    <a href="/users" class="">
      <i class="icon-users"></i>
      <span class="label">Users</span>
      <span class="count">534</span>
    </a>
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
