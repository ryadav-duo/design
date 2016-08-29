---
title: Data Set Details List
template: child-2col-coded
active_page: 'data-details-list'
snippet_title: Data Set Details List
notes: 'The intent of table in cards is to break down the data from a pie chart visualization or more visual chart. This way users can both data visualization and chart side by side.'
example: '
<div class="box insight-section">
  <h2 class="insight-security-header">List Title</h2>
  <p class="insight-help minor">Description for the data that appears in the data list below.</p>
  <table class="insight-versions">
    <thead>
      <tr>
        <th>Table Header 1</th>
        <th>Table Header 1</th>
      </tr>
    </thead>

    <tbody>
      <tr data-href="">
        <td>

          Data Set Name
        </td>
        <td>1</td>
        <td>Link to addtional data</td>
      </tr>

      <tr data-href="">
        <td>

          Data Set Name
        </td>
        <td>1</td>
        <td>Link to addtional data</td>
      </tr>

      <tr data-href="">
        <td>

          Data Set Name
        </td>
        <td>1</td>
        <td>Link to addtional data</td>
      </tr>

      <tr data-href="">
        <td>

          Data Set Name
        </td>
        <td>1</td>
        <td>Link to addtional data</td>
      </tr>

      <tr data-href="">
        <td>

          Data Set Name
        </td>
        <td>1</td>
        <td>Link to addtional data</td>
      </tr>

    </tbody>
  </table>
</div>
'
---

* [HTML](0)
* [SCSS](1)

```html
<div class="box insight-section">
  <h2 class="insight-security-header">List Title</h2>
  <p class="insight-help minor">Description for the data that appears in the data list below.</p>
  <table class="insight-versions">
    <thead>
      <tr>
        <th>Table Header 1</th>
        <th>Table Header 1</th>
      </tr>
    </thead>

    <tbody>
      <tr data-href="">
        <td>

          Data Set Name
        </td>
        <td>1</td>
        <td>Link to addtional data</td>
      </tr>

      <tr data-href="">
        <td>

          Data Set Name
        </td>
        <td>1</td>
        <td>Link to addtional data</td>
      </tr>

      <tr data-href="">
        <td>

          Data Set Name
        </td>
        <td>1</td>
        <td>Link to addtional data</td>
      </tr>

      <tr data-href="">
        <td>

          Data Set Name
        </td>
        <td>1</td>
        <td>Link to addtional data</td>
      </tr>

      <tr data-href="">
        <td>

          Data Set Name
        </td>
        <td>1</td>
        <td>Link to addtional data</td>
      </tr>

    </tbody>
  </table>
</div>
```
```sass
.box {
  @include box;
}
.insight-versions {
    margin-bottom: 2em;
    text-align: left;
    width: 100%;

    td {
        border-bottom: 1px solid $grey-light;
        padding: 1em 1em 1em 1em;

        &:last-child {
            text-decoration: underline;
        }
    }
    th {
        padding: .5em .5em .5em 1em;
    }
    tr:not(.no-hover-stage):hover td {
        background-color: $duo-green-lightest;
        cursor: pointer;
    }
    thead {
        border-bottom: 1px solid $grey-light;
    }
}

.insight-help {
    min-height: 48px;
}

```
