---
title: Tables
template: child-1col-coded.html
active_page: tables
snippet_title: Narrow Table
notes: 'Allows for control of how many rows to display and for navigation to different pages of the data.'
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
          <div class="dataTables_paginate paging_full_numbers" id="user-table_paginate">
            <a class="paginate_button first disabled ss-icon" aria-controls="user-table" data-dt-idx="0" tabindex="0" id="user-table_first">
              &#9669;
            </a>
            <a class="paginate_button previous disabled ss-icon" aria-controls="user-table" data-dt-idx="1" tabindex="0" id="user-table_previous">
              &#9669;
            </a>
            <span>
              <a class="paginate_button current" aria-controls="user-table" data-dt-idx="2" tabindex="0">
                1
              </a>
              <a class="paginate_button " aria-controls="user-table" data-dt-idx="3" tabindex="0">
                2
              </a>
              <a class="paginate_button " aria-controls="user-table" data-dt-idx="4" tabindex="0">
                3
              </a>
              <a class="paginate_button " aria-controls="user-table" data-dt-idx="5" tabindex="0">
                4
              </a>
              <a class="paginate_button " aria-controls="user-table" data-dt-idx="6" tabindex="0">
                5
              </a>
              <span class="ellipsis">&#8230;</span>
              <a class="paginate_button " aria-controls="user-table" data-dt-idx="7" tabindex="0">
                22
              </a>
            </span>
            <a class="paginate_button next ss-icon" aria-controls="user-table" data-dt-idx="8" tabindex="0" id="user-table_next">
              &#9659;
            </a>
            <a class="paginate_button last ss-icon" aria-controls="user-table" data-dt-idx="9" tabindex="0" id="user-table_last">
              &#9659;&#9659;
            </a>
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
          <div class="dataTables_paginate paging_full_numbers" id="user-table_paginate">
            <a class="paginate_button first disabled ss-icon" aria-controls="user-table" data-dt-idx="0" tabindex="0" id="user-table_first">
              &#9669;
            </a>
            <a class="paginate_button previous disabled ss-icon" aria-controls="user-table" data-dt-idx="1" tabindex="0" id="user-table_previous">
              &#9669;
            </a>
            <span>
              <a class="paginate_button current" aria-controls="user-table" data-dt-idx="2" tabindex="0">
                1
              </a>
              <a class="paginate_button " aria-controls="user-table" data-dt-idx="3" tabindex="0">
                2
              </a>
              <a class="paginate_button " aria-controls="user-table" data-dt-idx="4" tabindex="0">
                3
              </a>
              <a class="paginate_button " aria-controls="user-table" data-dt-idx="5" tabindex="0">
                4
              </a>
              <a class="paginate_button " aria-controls="user-table" data-dt-idx="6" tabindex="0">
                5
              </a>
              <span class="ellipsis">&#8230;</span>
              <a class="paginate_button " aria-controls="user-table" data-dt-idx="7" tabindex="0">
                22
              </a>
            </span>
            <a class="paginate_button next ss-icon" aria-controls="user-table" data-dt-idx="8" tabindex="0" id="user-table_next">
              &#9659;
            </a>
            <a class="paginate_button last ss-icon" aria-controls="user-table" data-dt-idx="9" tabindex="0" id="user-table_last">
              &#9659;&#9659;
            </a>
          </div>
        </td>
      </tr>
    </tfoot>
  </table>
```
```scss
  @import 'datatables';
  #user-table_wrapper {
      min-width: 745px;
  }

```
