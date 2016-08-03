---
title: Tables
template: child-2col-coded
active_page: ['Tables', 'Table Card']
snippet_title: Table Card
notes: 'The intent of table in cards is to break down the data from a pie chart visualization or more visual chart. This way users can both data visualization and chart side by side.'
example: '
<div class="box insight-section">
  <h2 class="insight-security-header">iOS Security</h2>
  <p class="insight-help minor">Data may be unknown for devices running versions of Duo Mobile prior to 3.5 or iOS 8.</p>
  <table class="insight-versions">
    <thead>
      <tr>
        <th>Version</th>
        <th>Devices</th>
      </tr>
    </thead>
    <tbody>
      <tr data-href="/phones?platform=2&amp;ios_version=9.3">
        <td>iOS 9.3</td>
        <td>18</td>
        <td>View devices</td>
      </tr>
      <tr data-href="/phones?platform=2&amp;ios_version=9.2">
        <td>iOS 9.2</td>
        <td>6</td>
        <td>View devices</td>
      </tr>
      <tr data-href="/phones?platform=2&amp;ios_version=9.1">
        <td>iOS 9.1</td>
        <td>1</td>
        <td>View devices</td>
      </tr>
      <tr data-href="/phones?platform=2&amp;ios_version=9.0">
        <td>iOS 9.0</td>
        <td>4</td>
        <td>View devices</td>
      </tr>
      <tr data-href="/phones?platform=2&amp;ios_version=8.4">
        <td>iOS 8.4</td>
        <td>1</td>
        <td>View devices</td>
      </tr>
      <tr data-href="/phones?platform=2&amp;ios_version=8.3">
        <td>iOS 8.3</td>
        <td>1</td>
        <td>View devices</td>
      </tr>
      <tr data-href="/phones?platform=2&amp;ios_version=8.1">
        <td>iOS 8.1</td>
        <td>8</td>
        <td>View devices</td>
      </tr>
      <tr data-href="/phones?platform=2&amp;ios_version=8.0">
        <td>iOS 8.0</td>
        <td>4</td>
        <td>View devices</td>
      </tr>
      <tr data-href="/phones?platform=2&amp;ios_version=7.1">
        <td>iOS 7.1</td>
        <td>9</td>
        <td>View devices</td>
      </tr>
      <tr data-href="/phones?platform=2&amp;ios_version=7.0">
        <td>iOS 7.0</td>
        <td>5</td>
        <td>View devices</td>
      </tr>
      <tr data-href="/phones?platform=2&amp;ios_version=6.1">
        <td>iOS 6.1</td>
        <td>8</td>
        <td>View devices</td>
      </tr>
      <tr data-href="/phones?platform=2&amp;ios_version=10.0">
        <td>iOS 10.0</td>
        <td>2</td>
        <td>View devices</td>
      </tr>
      <tr data-href="/phones?platform=2&amp;ios_version=Unknown">
        <td>Unknown</td>
        <td>13</td>
        <td>View devices</td>
      </tr>
    </tbody>
  </table>
</div>
'
---

* [HTML](0)
* [SCSS](1)

```html
<div class="col-1-2">
  <div class="box insight-section">
    <h2 class="insight-security-header">iOS Security</h2>
    <p class="insight-help minor">Data may be unknown for devices running versions of Duo Mobile prior to 3.5 or iOS 8.</p>
    <table class="insight-versions">
      <thead>
        <tr>
          <th>Version</th>
          <th>Devices</th>
        </tr>
      </thead>
      <tbody>
        <tr data-href="/phones?platform=2&amp;ios_version=9.3">
          <td>iOS 9.3</td>
          <td>18</td>
          <td>View devices</td>
        </tr>
        <tr data-href="/phones?platform=2&amp;ios_version=9.2">
          <td>iOS 9.2</td>
          <td>6</td>
          <td>View devices</td>
        </tr>
        <tr data-href="/phones?platform=2&amp;ios_version=9.1">
          <td>iOS 9.1</td>
          <td>1</td>
          <td>View devices</td>
        </tr>
        <tr data-href="/phones?platform=2&amp;ios_version=9.0">
          <td>iOS 9.0</td>
          <td>4</td>
          <td>View devices</td>
        </tr>
        <tr data-href="/phones?platform=2&amp;ios_version=8.4">
          <td>iOS 8.4</td>
          <td>1</td>
          <td>View devices</td>
        </tr>
        <tr data-href="/phones?platform=2&amp;ios_version=8.3">
          <td>iOS 8.3</td>
          <td>1</td>
          <td>View devices</td>
        </tr>
        <tr data-href="/phones?platform=2&amp;ios_version=8.1">
          <td>iOS 8.1</td>
          <td>8</td>
          <td>View devices</td>
        </tr>
        <tr data-href="/phones?platform=2&amp;ios_version=8.0">
          <td>iOS 8.0</td>
          <td>4</td>
          <td>View devices</td>
        </tr>
        <tr data-href="/phones?platform=2&amp;ios_version=7.1">
          <td>iOS 7.1</td>
          <td>9</td>
          <td>View devices</td>
        </tr>
        <tr data-href="/phones?platform=2&amp;ios_version=7.0">
          <td>iOS 7.0</td>
          <td>5</td>
          <td>View devices</td>
        </tr>
        <tr data-href="/phones?platform=2&amp;ios_version=6.1">
          <td>iOS 6.1</td>
          <td>8</td>
          <td>View devices</td>
        </tr>
        <tr data-href="/phones?platform=2&amp;ios_version=10.0">
          <td>iOS 10.0</td>
          <td>2</td>
          <td>View devices</td>
        </tr>
        <tr data-href="/phones?platform=2&amp;ios_version=Unknown">
          <td>Unknown</td>
          <td>13</td>
          <td>View devices</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
```
```sass
.insight-section {
  & + &.box:not(.insight-breakdown) {
      margin-top: -2em;
  }

  & + .page-message {
      margin-top: -2em;
      margin-bottom: 4em;
  }

  &.no-margin {
      margin-top: -2em;
  }

  h3, h4 {
      margin-top: .5em;
      display: block;
  }

  .star-explanation {
      font-size: .9em;
      margin-top: -1rem;
      span {
          font-weight: bold;
      }
  }
}
.insight-help {
    min-height: 48px;
}

```
