---
title: Tables
template: child-1col-coded.html
active_page: ['Tables', 'Table Row']
snippet_title: Narrow Table
notes: 'Organizes and displays a large amount of related information.
Sort arrows, checkboxes, search bar, and the Add to Group dropdown provide tools to work with the data more easily.'
example: '  <div id="user-table_wrapper" class="dataTables_wrapper">
    <table id="user-table" class="dataTable" data-permission-read="true" data-csv-link="/users/export/csv" data-json-link="/users/export/json" role="grid" aria-describedby="user-table_info" style="width: 887px;">
      <tbody>
        <tr role="row" class="odd ? even">
          <td class=" checkbox">
            <label class="">
              <input type="checkbox" name="ukey" value="">
            </label>
          </td>
          <td class="primary_column sorting_1">
            <a href="">User Name 1</a>
          </td>
          <td>
            Name 1
          </td>
          <td>user1@gmail.com</td>
          <td>1</td>
          <td>1</td>
          <td>
            <span class="user-status-active">Active</span>
          </td>
          <td>Mar 28, 2016 10:34 AM</td>
        </tr>
      </tbody>
    </table>
  </div>
'
---

* [HTML](0)
* [SCSS](1)

```html
<tr role="row" class="odd ? even">
  <td class=" checkbox">
    <label class="">
      <input type="checkbox" name="ukey" value="">
    </label>
  </td>
  <td class="primary_column sorting_1">
    <a href="">User Name 1</a>
  </td>
  <td>
    Name 1
  </td>
  <td>user1@gmail.com</td>
  <td>1</td>
  <td>1</td>
  <td>
    <span class="user-status-active">Active</span>
  </td>
  <td>Mar 28, 2016 10:34 AM</td>
</tr>
```
```sass
.dataTables_wrapper {
  td {
    background-color: white;
    border-bottom: 1px solid $grey-light;
    border-top: 1px solid $grey-light;
    padding: 10px 20px 10px 10px;

    .indented {
        margin: 0 0 0 24px;
    }

    a:not(.button) {
        color: $info-blue;
    }
  }
  .checkbox {
    padding: 0;
    width: 12px;
    text-align: center;

    > input[disabled] {
      opacity: 0.7;
    }

    > label {
        display: block;
        padding: 16px;
    }
  }

  &:after {
    content: ".";
    display: block;
    visibility: hidden;
    line-height: 0;
    height: 0;
  }
}
```
