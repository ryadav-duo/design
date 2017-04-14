---
title: Pagination
template: child-1col-coded
active_page: 'pagination'
snippet_title: Pagination
notes: 'Allows the user to navigate through large sets of data.'
example: '  <table class="dataTable fixedHeader-floating" data-permission-read="true" data-csv-link="/users/export/csv" data-json-link="/users/export/json" role="grid" aria-describedby="user-table_info" style="width: 100%;">
    <tfoot class="bottom-control-wrapper">
      <tr>
        <td class="footer-controls checkbox primary_column" colspan="8" rowspan="1">
          <div class="dataTables_length" id="user-table_length">
            <label>Show
              <select name="user-table_length" aria-controls="user-table" class="">
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            users</label>
          </div>
          <div class="dataTables_info" id="user-table_info" role="status" aria-live="polite">1&ndash;25 of 545 total</div>
          <div class="dataTables_paginate paging_full_numbers" id="DataTables_Table_0_paginate">
            <a class="paginate_button first disabled" aria-controls="DataTables_Table_0" data-dt-idx="0" tabindex="0" id="DataTables_Table_0_first">First</a>
            <a class="paginate_button previous disabled" aria-controls="DataTables_Table_0" data-dt-idx="1" tabindex="0" id="DataTables_Table_0_previous">Previous</a>
            <span>
                    <a class="paginate_button current" aria-controls="DataTables_Table_0" data-dt-idx="2" tabindex="0">1</a>
                    <a class="paginate_button " aria-controls="DataTables_Table_0" data-dt-idx="3" tabindex="0">2</a>
                    <a class="paginate_button " aria-controls="DataTables_Table_0" data-dt-idx="4" tabindex="0">3</a>
                    <a class="paginate_button " aria-controls="DataTables_Table_0" data-dt-idx="5" tabindex="0">4</a>
                    <a class="paginate_button " aria-controls="DataTables_Table_0" data-dt-idx="6" tabindex="0">5</a>
                    <span class="ellipsis">&hellip;</span>
                    <a class="paginate_button " aria-controls="DataTables_Table_0" data-dt-idx="7" tabindex="0">21</a>
            </span>
            <a class="paginate_button next" aria-controls="DataTables_Table_0" data-dt-idx="8" tabindex="0" id="DataTables_Table_0_next">Next</a>
            <a class="paginate_button last" aria-controls="DataTables_Table_0" data-dt-idx="9" tabindex="0" id="DataTables_Table_0_last">Last</a>
          </div>
        </td>
      </tr>
    </tfoot>
  </table>
'
---

* [HTML](0)
* [SCSS](1)

```html
<table class="dataTable fixedHeader-floating" data-permission-read="true" data-csv-link="/users/export/csv" data-json-link="/users/export/json" role="grid" aria-describedby="user-table_info" style="">
  <tfoot class="bottom-control-wrapper">
    <tr>
      <td class="footer-controls checkbox primary_column" colspan="8" rowspan="1">
        <div class="dataTables_length" id="user-table_length">
          <label>Show
            <select name="user-table_length" aria-controls="user-table" class="">
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          users</label>
        </div>
        <div class="dataTables_info" id="user-table_info" role="status" aria-live="polite">1&ndash;25 of 545 total</div>
        <div class="dataTables_paginate paging_full_numbers" id="DataTables_Table_0_paginate">
          <a class="paginate_button first disabled" aria-controls="DataTables_Table_0" data-dt-idx="0" tabindex="0" id="DataTables_Table_0_first">First</a>
          <a class="paginate_button previous disabled" aria-controls="DataTables_Table_0" data-dt-idx="1" tabindex="0" id="DataTables_Table_0_previous">Previous</a>
          <span>
                  <a class="paginate_button current" aria-controls="DataTables_Table_0" data-dt-idx="2" tabindex="0">1</a>
                  <a class="paginate_button " aria-controls="DataTables_Table_0" data-dt-idx="3" tabindex="0">2</a>
                  <a class="paginate_button " aria-controls="DataTables_Table_0" data-dt-idx="4" tabindex="0">3</a>
                  <a class="paginate_button " aria-controls="DataTables_Table_0" data-dt-idx="5" tabindex="0">4</a>
                  <a class="paginate_button " aria-controls="DataTables_Table_0" data-dt-idx="6" tabindex="0">5</a>
                  <span class="ellipsis">&hellip;</span>
                  <a class="paginate_button " aria-controls="DataTables_Table_0" data-dt-idx="7" tabindex="0">21</a>
          </span>
          <a class="paginate_button next" aria-controls="DataTables_Table_0" data-dt-idx="8" tabindex="0" id="DataTables_Table_0_next">Next</a>
          <a class="paginate_button last" aria-controls="DataTables_Table_0" data-dt-idx="9" tabindex="0" id="DataTables_Table_0_last">Last</a>
        </div>
      </td>
    </tr>
  </tfoot>
</table>
```
```scss
// Show <10> users
.dataTables_length {
  float: left;
  font-weight: normal;

  select {
    width: auto;
  }
}

// Showing 1-10 of 20 ...
.dataTables_info {
  float: left;
  font-weight: normal;
  margin: 0 0 0 30px;
  color: $grey;
}

.footer-controls {
    line-height: 3rem;
    padding: 10px !important;
}


.paginate_button {
    @include no-box-shadow;
    @include border-radius;
    @include transitions;
    color: $pagination-text-color;
    padding: 0.125em 0.5em;
    line-height: 1em;
    text-align: center;
    border: none;
    margin: 0 5px;

    &:hover {
        @include box-shadow(0 0 0 2px $primary-button-color);
        background-color: $white;
        color: $default-text-color;
    }

    &:active,
    &:focus {
        @include box-shadow;
        padding: 0.125em 0.5em;
    }

    &.current {
        font-size: 1.45em;
        vertical-align: sub;
        line-height: 1em;
        color: $default-link-color;
        font-weight: 700;

        &:hover {
            @include no-box-shadow;
            border: none;
            color: $default-link-color;
            cursor: default;
        }
    }
    &.next,
    &.previous {
        font-family: "SSStandard";
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        color: $default-link-color;
        text-rendering: optimizeLegibility;
        white-space: nowrap;
        // -webkit-font-feature-settings: "liga"; Currently broken in Chrome >= v22. Falls back to text-rendering. Safari is unaffected.
        font-feature-settings: "liga";
        -webkit-font-smoothing: antialiased;
        vertical-align: text-bottom;
        text-align: center;
        &:hover {
            @include no-box-shadow;
            background-color: transparent;
            color: $primary-button-color;
            border-radius: 0;
        }
    }

    &.disabled {
        color: $disabled-pagination-color;

        &:active,
        &:focus,
        &:hover {
            @include no-box-shadow;
            color: $disabled-pagination-color;
            background-color: transparent;
            cursor: not-allowed;
        }
    }

}

.dataTables_paginate {
    float: right;
    a {
        @include no-box-shadow;
    }

    .first,
    .last {
        letter-spacing: -3px;
        display: none;
    }
}

#user-table_wrapper {
    min-width: 745px;
}

```
