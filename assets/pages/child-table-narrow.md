---
title: Tables
template: child-1col-coded.html
active_page: tables
snippet_title: Narrow Table
notes: 'Organizes and displays a large amount of related information.
Sort arrows, checkboxes, search bar, and the Add to Group dropdown provide tools to work with the data more easily.'
example: '  <div id="user-table_wrapper" class="dataTables_wrapper">
    <div class="top-control-wrapper" style="">
      <div class="loading" style="display: none;">
      </div>
      <div class="selected-count">0 users selected:</div>
      <div class="dropdown groups-dropdown">
        <div class="dropdown-toggle disabled">
          <span>Add to Group</span>
          <i class="icon-chevron-thick-down"></i>
        </div>
        <ul class="dropdown-content">
          <li data-gkey="">Group 1</li>
          <li data-gkey="">Group 2</li>
        </ul>
      </div>
      <div class="button-row">
        <div class="download-buttons">
          <div class="dropdown">
            <div class="dropdown-toggle button">
              <span>Reports</span>
              <i class="icon-chevron-thick-down"></i>
            </div>
            <div class="dropdown-content">
              <a href="/users/export/csv" class="dropdown-csv">CSV</a>
              <a href="/users/export/json" class="dropdown-json">JSON</a>
              <a href="#" class="dropdown-url">URL</a>
            </div>
          </div>
        </div>
        <div id="user-table_filter" class="dataTables_filter">
          <label>
            <input type="search" class="" placeholder="" aria-controls="user-table">
          </label>
        </div>
      </div>
    </div>
    <table id="user-table" class="dataTable" data-permission-read="true" data-csv-link="/users/export/csv" data-json-link="/users/export/json" role="grid" aria-describedby="user-table_info" style="width: 887px;">
      <thead>
        <tr role="row">
          <th class="checkbox sorting_disabled" rowspan="1" colspan="1" style="width: 52px;" aria-label="">
            <input type="checkbox" name="select-all">
          </th>
          <th class="username primary_column sorting_asc" tabindex="0" aria-controls="user-table" rowspan="1" colspan="1" style="width: 72px;" aria-label="Username: activate to sort column ascending">Username</th>
          <th class="name sorting" tabindex="0" aria-controls="user-table" rowspan="1" colspan="1" style="width: 43px;" aria-label="Name: activate to sort column ascending">Name</th>
          <th class="email sorting" tabindex="0" aria-controls="user-table" rowspan="1" colspan="1" style="width: 248px;" aria-label="Email: activate to sort column ascending">Email</th>
          <th class="phone_count number sorting" tabindex="0" aria-controls="user-table" rowspan="1" colspan="1" style="width: 40px;" aria-label=": activate to sort column descending">
            <i class="icon-smartphone column-heading" title="Number of phones attached to this user."></i>
          </th>
          <th class="token_count number sorting" tabindex="0" aria-controls="user-table" rowspan="1" colspan="1" style="width: 40px;" aria-label=": activate to sort column descending">
            <i class="icon-usb-alt column-heading" title="Number of hardware tokens attached to this user."></i>
          </th>
          <th class="status sorting" tabindex="0" aria-controls="user-table" rowspan="1" colspan="1" style="width: 60px;" aria-label="Status: activate to sort column ascending">Status</th>
          <th class="last_login sorting" tabindex="0" aria-controls="user-table" rowspan="1" colspan="1" style="width: 192px;" aria-label="Last Login: activate to sort column descending">Last Login</th>
        </tr>
      </thead>
      <tbody>
        <tr role="row" class="odd">
          <td class=" checkbox">
            <label class="">
              <input type="checkbox" name="ukey" value="">
            </label>
          </td>
          <td class="primary_column sorting_1">
            <a href="">User Name 1</a>
          </td>Name 1<td>
          </td>
          <td>user1@gmail.com</td>
          <td>1</td>
          <td>1</td>
          <td>
            <span class="user-status-active">Active</span>
          </td>
          <td>Mar 28, 2016 10:34 AM</td>
        </tr>
        <tr role="row" class="even">
          <td class=" checkbox">
            <label class="">
              <input type="checkbox" name="ukey" value="">
            </label>
          </td>
          <td class="primary_column sorting_1">
            <a href="">User Name 2</a>
          </td>
          <td>Name 2</td>
          <td>user2@gmail.com</td>
          <td>2</td>
          <td>2</td>
          <td>
            <span class="user-status-bypass">Bypass</span>
          </td>
          <td>Never authenticated</td>
        </tr>
        <tr role="row" class="odd">
          <td class=" checkbox">
            <label class="">
              <input type="checkbox" name="ukey" value="">
            </label>
          </td>
          <td class="primary_column sorting_1">
            <a href="">User Name 3</a>
          </td>
          <td>Name 3</td>
          <td>user3@gmail.com</td>
          <td>3</td>
          <td>3</td>
          <td>
            <span class="user-status-active">Active</span>
          </td>
          <td>Never authenticated</td>
        </tr>
      </tbody>
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
              <div class="dataTables_info" id="user-table_info" role="status" aria-live="polite">
                1&ndash;25 of 543 total
              </div>
              <div class="dataTables_paginate paging_full_numbers" id="user-table_paginate">
                <a class="paginate_button first disabled ss-icon" aria-controls="user-table" data-dt-idx="0" tabindex="0" id="user-table_first">
                  &#9669;&#9669;
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
                  <span class="ellipsis">
                    &#8230;
                  </span>
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
  </div>

'
---

* [HTML](0)
* [SCSS](1)

```html
  <div id="user-table_wrapper" class="dataTables_wrapper">
    <div class="top-control-wrapper" style="">
      <div class="loading" style="display: none;">
      </div>
      <div class="selected-count">0 users selected:</div>
      <div class="dropdown groups-dropdown">
        <div class="dropdown-toggle disabled">
          <span>Add to Group</span>
          <i class="icon-chevron-thick-down"></i>
        </div>
        <ul class="dropdown-content">
          <li data-gkey="">Group 1</li>
          <li data-gkey="">Group 2</li>
        </ul>
      </div>
      <div class="button-row">
        <div class="download-buttons">
          <div class="dropdown">
            <div class="dropdown-toggle button">
              <span>Reports</span>
              <i class="icon-chevron-thick-down"></i>
            </div>
            <div class="dropdown-content">
              <a href="/users/export/csv" class="dropdown-csv">CSV</a>
              <a href="/users/export/json" class="dropdown-json">JSON</a>
              <a href="#" class="dropdown-url">URL</a>
            </div>
          </div>
        </div>
        <div id="user-table_filter" class="dataTables_filter">
          <label>
            <input type="search" class="" placeholder="" aria-controls="user-table">
          </label>
        </div>
      </div>
    </div>
    <table id="user-table" class="dataTable" data-permission-read="true" data-csv-link="/users/export/csv" data-json-link="/users/export/json" role="grid" aria-describedby="user-table_info" style="">
      <thead>
        <tr role="row">
          <th class="checkbox sorting_disabled" rowspan="1" colspan="1" style="width: 52px;" aria-label="">
            <input type="checkbox" name="select-all">
          </th>
          <th class="username primary_column sorting_asc" tabindex="0" aria-controls="user-table" rowspan="1" colspan="1" style="width: 72px;" aria-label="Username: activate to sort column ascending">Username</th>
          <th class="name sorting" tabindex="0" aria-controls="user-table" rowspan="1" colspan="1" style="width: 43px;" aria-label="Name: activate to sort column ascending">Name</th>
          <th class="email sorting" tabindex="0" aria-controls="user-table" rowspan="1" colspan="1" style="width: 248px;" aria-label="Email: activate to sort column ascending">Email</th>
          <th class="phone_count number sorting" tabindex="0" aria-controls="user-table" rowspan="1" colspan="1" style="width: 40px;" aria-label=": activate to sort column descending">
            <i class="icon-smartphone column-heading" title="Number of phones attached to this user."></i>
          </th>
          <th class="token_count number sorting" tabindex="0" aria-controls="user-table" rowspan="1" colspan="1" style="width: 40px;" aria-label=": activate to sort column descending">
            <i class="icon-usb-alt column-heading" title="Number of hardware tokens attached to this user."></i>
          </th>
          <th class="status sorting" tabindex="0" aria-controls="user-table" rowspan="1" colspan="1" style="width: 60px;" aria-label="Status: activate to sort column ascending">Status</th>
          <th class="last_login sorting" tabindex="0" aria-controls="user-table" rowspan="1" colspan="1" style="width: 192px;" aria-label="Last Login: activate to sort column descending">Last Login</th>
        </tr>
      </thead>
      <tbody>
        <tr role="row" class="odd">
          <td class=" checkbox">
            <label class="">
              <input type="checkbox" name="ukey" value="">
            </label>
          </td>
          <td class="primary_column sorting_1">
            <a href="">User Name 1</a>
          </td>Name 1<td>
          </td>
          <td>user1@gmail.com</td>
          <td>1</td>
          <td>1</td>
          <td>
            <span class="user-status-active">Active</span>
          </td>
          <td>Mar 28, 2016 10:34 AM</td>
        </tr>
        <tr role="row" class="even">
          <td class=" checkbox">
            <label class="">
              <input type="checkbox" name="ukey" value="">
            </label>
          </td>
          <td class="primary_column sorting_1">
            <a href="">User Name 2</a>
          </td>
          <td>Name 2</td>
          <td>user2@gmail.com</td>
          <td>2</td>
          <td>2</td>
          <td>
            <span class="user-status-bypass">Bypass</span>
          </td>
          <td>Never authenticated</td>
        </tr>
        <tr role="row" class="odd">
          <td class=" checkbox">
            <label class="">
              <input type="checkbox" name="ukey" value="">
            </label>
          </td>
          <td class="primary_column sorting_1">
            <a href="">User Name 3</a>
          </td>
          <td>Name 3</td>
          <td>user3@gmail.com</td>
          <td>3</td>
          <td>3</td>
          <td>
            <span class="user-status-active">Active</span>
          </td>
          <td>Never authenticated</td>
        </tr>
      </tbody>
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
              <div class="dataTables_info" id="user-table_info" role="status" aria-live="polite">
                1&ndash;25 of 543 total
              </div>
              <div class="dataTables_paginate paging_full_numbers" id="user-table_paginate">
                <a class="paginate_button first disabled ss-icon" aria-controls="user-table" data-dt-idx="0" tabindex="0" id="user-table_first">
                  &#9669;&#9669;
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
                  <span class="ellipsis">
                    &#8230;
                  </span>
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
  </div>
```
```scss
  @import 'datatables';
  #user-table_wrapper {
      min-width: 745px;
  }

  .phone_count, .token_count {
    min-width: 60px;
  }

  .groups-dropdown {
    color: $grey-darker;
    display: inline-block;
    margin: -10px 0 0 10px;
    text-align: center;

    .dropdown-content li:only-child{
      width: 140px;
    }
  }

  .tipsy-inner {
    text-align: center;
  }

  .activation-email-custom-image {
    max-height: 90px;
    max-width: 90px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
```
