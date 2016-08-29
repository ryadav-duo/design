---
title: Search
template: child-2col-coded
active_page: 'search-field'
snippet_title: Search Field
notes: ''
example: '
<form class="inline wonka-bar">
  <span class="twitter-typeahead" style="position: relative; display: inline-block; direction: ltr;">
    <input type="search" placeholder="Search for users, groups, applications, or devices" class="tt-input" autocomplete="off" spellcheck="false" dir="auto" style="position: relative; vertical-align: top;">
    <span class="tt-dropdown-menu" style="position: absolute; top: 100%; left: 0px; z-index: 100; display: none; right: auto;">
      <div class="tt-dataset-users">
        <span class="tt-suggestions" style="display: block;">
          <div class="tt-suggestion">
            <span class="ss-icon" style="white-space: normal;">&#x1f464;</span>
            <p style="white-space: normal;">
              ffffsadaf
              <small>
                (<strong class="tt-highlight">asdf</strong>)
              </small>
            </p>
            <p style="white-space: normal;">User</p>
          </div>
          <div class="tt-suggestion"><span class="ss-icon" style="white-space: normal;">&#x1f464;</span>
            <p style="white-space: normal;"><strong class="tt-highlight">asdf</strong><strong class="tt-highlight">asdf</strong><strong class="tt-highlight">asdf</strong></p>
            <p style="white-space: normal;">User</p>
          </div>
    <div class="tt-suggestion"><span class="ss-icon" style="white-space: normal;">&#x1f464;</span>
      <p style="white-space: normal;">chester123456<strong class="tt-highlight">asdf</strong></p>
      <p style="white-space: normal;">User</p>
    </div>
    <div class="tt-suggestion"><span class="ss-icon" style="white-space: normal;">&#x1f464;</span>
      <p style="white-space: normal;">f<strong class="tt-highlight">asdf</strong><strong class="tt-highlight">asdf</strong></p>
      <p style="white-space: normal;">User</p>
    </div>
    <div class="tt-suggestion"><span class="ss-icon" style="white-space: normal;">&#x1f464;</span>
      <p style="white-space: normal;">sdf<strong class="tt-highlight">asdf</strong>sdfsdfsdf</p>
      <p style="white-space: normal;">User</p>
    </div>
    </span>
    </div>
    <div class="tt-dataset-applications"><span class="tt-suggestions" style="display: block;"><div class="tt-suggestion"><span class="ss-icon" style="white-space: normal;">&#x1f512;</span>
      <p style="white-space: normal;"><strong class="tt-highlight">asdf</strong></p>
      <p style="white-space: normal;">Drupal</p>
    </div>
    <div class="tt-suggestion"><span class="ss-icon" style="white-space: normal;">&#x1f512;</span>
      <p style="white-space: normal;"><strong class="tt-highlight">asdf</strong><strong class="tt-highlight">asdf</strong></p>
      <p style="white-space: normal;">Drupal</p>
    </div>
    </span>
    </div>
    <div class="tt-dataset-phones"></div>
    <div class="tt-dataset-hardtokens"></div>
    <div class="tt-dataset-groups"></div>
    </span>
    </span>
    <i class="icon-magnifier"></i>
</form>
'
---

* [HTML](0)
* [SCSS](1)

```html
<form class="inline wonka-bar">
  <span class="twitter-typeahead" style="position: relative; display: inline-block; direction: ltr;">
    <input type="search" placeholder="Search for users, groups, applications, or devices" class="tt-input" autocomplete="off" spellcheck="false" dir="auto" style="position: relative; vertical-align: top;">
    <pre aria-hidden="true" style="position: absolute; visibility: hidden; white-space: pre; font-family: &quot;Open Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; word-spacing: 0px; letter-spacing: 0px; text-indent: 0px; text-rendering: auto; text-transform: none;"></pre>
    </span>
    <i class="icon-magnifier"></i>
</form>
```
```sass
button, input, select, textarea {
  font-size: 100%;
  margin: 0;
  vertical-align: baseline;

  &.error {
    border-color: $error-red-light;
  }
}
input, textarea, select {
  border-color: $base-border-color;

  @include low-res {
    border-color: $base-border-color-low-res;
  }
}

select {
  margin-top: 1px;
  font-family: inherit;
  font-size: inherit;
  font-weight: normal;
  display: inline-block;
  border-width: 1px;
  border-style: solid;
  color: #333;
  border-radius: $border-radius;
  border-color: $base-border-color;
}

```
