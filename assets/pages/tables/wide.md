---
title: Tables
template: child-1col-coded
active_page: 'wide'
snippet_title: Wide Table
notes: 'Organizes and displays a large amount of related information.
Sort arrows, checkboxes, search bar, and the Add to Group dropdown provide tools to work with the data more easily.'
example: '
<div class="filter-table">
  <div id="endpoints-table_wrapper" class="dataTables_wrapper">
    <div class="top-control-wrapper" style="width: 100%">
      <div class="button-row">
        <div class="download-buttons">
          <div class="dropdown">
            <div class="dropdown-toggle button">
              <span>Reports</span>
              <i class="icon-chevron-thick-down"></i>
            </div>
            <div class="dropdown-content">
              <a href="/endpoints/export/csv" class="dropdown-csv">CSV</a>
              <a href="/endpoints/export/json" class="dropdown-json">JSON</a>
              <a href="#" class="dropdown-url">URL</a>
            </div>
          </div>
        </div>
        <div id="endpoints-table_filter" class="dataTables_filter">
          <label>
            <input type="search" class="" placeholder="" aria-controls="endpoints-table">
          </label>
        </div>
      </div>
    </div>
    <table id="endpoints-table" class="dataTable" data-permission-read="true" data-csv-link="/endpoints/export/csv" data-json-link="/endpoints/export/json" role="grid" aria-describedby="endpoints-table_info">
      <thead>
        <tr role="row">
          <th class="os sorting_asc" tabindex="0" aria-controls="endpoints-table" rowspan="1" colspan="1" style="width: 10%;" aria-label="OS: activate to sort column descending" aria-sort="ascending">
            OS
          </th>
          <th class="browsers sorting_disabled" rowspan="1" colspan="1" style="width: 10%;" aria-label="Browsers">
            Browsers
          </th>
          <th class="securityWarnings sorting_disabled" rowspan="1" colspan="1" style="width: 15%;" aria-label="Security Warnings">
            Security Warnings
          </th>
          <th class="user sorting" tabindex="0" aria-controls="endpoints-table" rowspan="1" colspan="1" style="width: 1%;" aria-label="User: activate to sort column ascending">
            User
          </th>
          <th class="lastUpdated sorting" tabindex="0" aria-controls="endpoints-table" rowspan="1" colspan="1" style="width: 12%;" aria-label="Last Used: activate to sort column ascending">
            Last Used
          </th>
        </tr>
      </thead>
      <tbody>
        <tr role="row" class="odd">
          <td class="sorting_1">
            <span class="icon-column">
              <i class="access-icon icon-linux"></i>
            </span>
            <a class="os-text-column" href="/endpoints/EPSMV4QF2EZEG5UM739F">Linux </a>
          </td>
          <td>
            <div class="subcell">
              <span class="icon-column">
                <i class="access-icon browser-icon browser-icon-chrome"></i>
              </span>
              <span class="browser-text-column">Chrome 51.0.2704.106</span>
            </div>
          </td>
          <td>
            <div class="grey-text">
              <span class="validation valid ss-standard"></span>
              <span>No warnings</span>
            </div>
          </td>
          <td>
            <a href="/users/DUXLNMB87IX8SIYCG2A7">ben</a>
          </td>
          <td>Jul 1, 2016 7:56&nbsp;PM</td>
        </tr>
        <tr role="row" class="even">
          <td class="sorting_1">
            <span class="icon-column">
              <i class="access-icon icon-linux"></i>
            </span>
            <a class="os-text-column" href="/endpoints/EPCHVDQRJ7IR10P59FWQ">Linux </a>
          </td>
          <td>
            <div class="subcell">
              <span class="icon-column">
                <i class="access-icon browser-icon browser-icon-chrome"></i>
              </span>
              <span class="browser-text-column">Chrome 51.0.2704.106</span>
            </div>
          </td>
          <td>
            <div class="grey-text">
              <span class="validation valid ss-standard"></span>
              <span>No warnings</span>
            </div>
          </td>
          <td>
            <a href="/users/DU8T5TK5ZB46R79Q6YA0">test</a>
          </td>
          <td>Jul 2, 2016 12:35&nbsp;AM</td>
        </tr>
        <tr role="row" class="odd">
          <td class="sorting_1">
            <span class="icon-column">
              <i class="access-icon icon-apple-filled"></i>
            </span>
            <a class="os-text-column" href="/endpoints/EP08AVFLNQY99DPHE09Z">Mac OS X 10.11</a>
          </td>
          <td>
            <div class="subcell">
              <span class="icon-column">
                <i class="access-icon browser-icon browser-icon-firefox"></i>
              </span>
              <span class="browser-text-column">Firefox 47.0</span>
            </div>
          </td>
          <td>
            <div class="grey-text">
              <span class="validation valid ss-standard"></span>
              <span>No warnings</span>
            </div>
          </td>
          <td>
            <a href="/users/DU518F3PCG36BQVP4I14">user_active</a>
          </td>
          <td>Jul 11, 2016 11:13&nbsp;AM</td>
        </tr>
        <tr role="row" class="odd">
          <td class="sorting_1">
            <span class="icon-column">
              <i class="access-icon icon-apple-filled"></i>
            </span>
            <a class="os-text-column" href="/endpoints/EPMSW95F4P4RBOD9IDCI">Mac OS X 10.11.5</a>
          </td>
          <td>
            <div class="subcell">
              <span class="icon-column">
                <i class="access-icon browser-icon browser-icon-chrome"></i>
              </span>
              <span class="browser-text-column">Chrome 51.0.2704.106</span>
            </div>
            <p class="indented plugin-version">Flash 22.0.0.192</p>
            <div class="subcell">
              <span class="icon-column">
                <i class="access-icon browser-icon browser-icon-firefox"></i>
              </span>
              <span class="browser-text-column">Firefox 47.0</span>
            </div>
            <p class="indented plugin-version">Flash 22.0.0.209</p>
            <p class="indented plugin-version">Java 1.8.0.91</p>
          </td>
          <td>
            <div class="darker-red-text">
              <div class="subcell">
                <span class="icon-column">
                  <i class="icon-java security-icon"></i>
                </span>
                <span class="warning-text-column">Java out of date</span>
              </div>
            </div>
          </td>
          <td>
            <a href="/users/DU6QQJK900COJCL0T73K">juniperuser</a>
          </td>
          <td>Jul 25, 2016 9:57&nbsp;AM</td>
        </tr>
      </tbody>
      <tfoot class="bottom-control-wrapper">
        <tr>
          <td class="footer-controls" colspan="5" rowspan="1">
            <div class="dataTables_length" id="endpoints-table_length">
              <label>Show
                <select name="endpoints-table_length" aria-controls="endpoints-table" class="">
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
              items</label>
            </div>
            <div class="dataTables_info" id="endpoints-table_info" role="status" aria-live="polite">
              1&ndash;25 of 36 total
            </div>
            <div class="dataTables_paginate paging_full_numbers" id="endpoints-table_paginate">
              <a class="paginate_button first disabled ss-icon" aria-controls="endpoints-table" data-dt-idx="0" tabindex="0" id="endpoints-table_first">
                &#9669;&#9669;
              </a>
              <a class="paginate_button previous disabled ss-icon" aria-controls="endpoints-table" data-dt-idx="1" tabindex="0" id="endpoints-table_previous">
                &#9669;
              </a>
              <span>
                <a class="paginate_button current" aria-controls="endpoints-table" data-dt-idx="2" tabindex="0">
                  1
                </a>
              </span>
              <a class="paginate_button next disabled ss-icon" aria-controls="endpoints-table" data-dt-idx="4" tabindex="0" id="endpoints-table_next">
                &#9659;
              </a>
              <a class="paginate_button last ss-icon" aria-controls="endpoints-table" data-dt-idx="5" tabindex="0" id="endpoints-table_last">
                &#9659;&#9659;
              </a>
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</div>
'
---

* [HTML](0)
* [SCSS](1)

```html
<div class="filter-table">
  <div id="endpoints-table_wrapper" class="dataTables_wrapper">
    <div class="top-control-wrapper" style="width: 100%">
      <div class="button-row">
        <div class="download-buttons">
          <div class="dropdown">
            <div class="dropdown-toggle button">
              <span>Reports</span>
              <i class="icon-chevron-thick-down"></i>
            </div>
            <div class="dropdown-content">
              <a href="/endpoints/export/csv" class="dropdown-csv">CSV</a>
              <a href="/endpoints/export/json" class="dropdown-json">JSON</a>
              <a href="#" class="dropdown-url">URL</a>
            </div>
          </div>
        </div>
        <div id="endpoints-table_filter" class="dataTables_filter">
          <label>
            <input type="search" class="" placeholder="" aria-controls="endpoints-table">
          </label>
        </div>
      </div>
    </div>
    <table id="endpoints-table" class="dataTable" data-permission-read="true" data-csv-link="/endpoints/export/csv" data-json-link="/endpoints/export/json" role="grid" aria-describedby="endpoints-table_info">
      <thead>
        <tr role="row">
          <th class="os sorting_asc" tabindex="0" aria-controls="endpoints-table" rowspan="1" colspan="1" style="width: 10%;" aria-label="OS: activate to sort column descending" aria-sort="ascending">
            OS
          </th>
          <th class="browsers sorting_disabled" rowspan="1" colspan="1" style="width: 10%;" aria-label="Browsers">
            Browsers
          </th>
          <th class="securityWarnings sorting_disabled" rowspan="1" colspan="1" style="width: 15%;" aria-label="Security Warnings">
            Security Warnings
          </th>
          <th class="user sorting" tabindex="0" aria-controls="endpoints-table" rowspan="1" colspan="1" style="width: 1%;" aria-label="User: activate to sort column ascending">
            User
          </th>
          <th class="lastUpdated sorting" tabindex="0" aria-controls="endpoints-table" rowspan="1" colspan="1" style="width: 12%;" aria-label="Last Used: activate to sort column ascending">
            Last Used
          </th>
        </tr>
      </thead>
      <tbody>
        <tr role="row" class="odd">
          <td class="sorting_1">
            <span class="icon-column">
              <i class="access-icon icon-linux"></i>
            </span>
            <a class="os-text-column" href="/endpoints/EPSMV4QF2EZEG5UM739F">Linux </a>
          </td>
          <td>
            <div class="subcell">
              <span class="icon-column">
                <i class="access-icon browser-icon browser-icon-chrome"></i>
              </span>
              <span class="browser-text-column">Chrome 51.0.2704.106</span>
            </div>
          </td>
          <td>
            <div class="grey-text">
              <span class="validation valid ss-standard"></span>
              <span>No warnings</span>
            </div>
          </td>
          <td>
            <a href="/users/DUXLNMB87IX8SIYCG2A7">ben</a>
          </td>
          <td>Jul 1, 2016 7:56&nbsp;PM</td>
        </tr>
        <tr role="row" class="even">
          <td class="sorting_1">
            <span class="icon-column">
              <i class="access-icon icon-linux"></i>
            </span>
            <a class="os-text-column" href="/endpoints/EPCHVDQRJ7IR10P59FWQ">Linux </a>
          </td>
          <td>
            <div class="subcell">
              <span class="icon-column">
                <i class="access-icon browser-icon browser-icon-chrome"></i>
              </span>
              <span class="browser-text-column">Chrome 51.0.2704.106</span>
            </div>
          </td>
          <td>
            <div class="grey-text">
              <span class="validation valid ss-standard"></span>
              <span>No warnings</span>
            </div>
          </td>
          <td>
            <a href="/users/DU8T5TK5ZB46R79Q6YA0">test</a>
          </td>
          <td>Jul 2, 2016 12:35&nbsp;AM</td>
        </tr>
        <tr role="row" class="odd">
          <td class="sorting_1">
            <span class="icon-column">
              <i class="access-icon icon-apple-filled"></i>
            </span>
            <a class="os-text-column" href="/endpoints/EP08AVFLNQY99DPHE09Z">Mac OS X 10.11</a>
          </td>
          <td>
            <div class="subcell">
              <span class="icon-column">
                <i class="access-icon browser-icon browser-icon-firefox"></i>
              </span>
              <span class="browser-text-column">Firefox 47.0</span>
            </div>
          </td>
          <td>
            <div class="grey-text">
              <span class="validation valid ss-standard"></span>
              <span>No warnings</span>
            </div>
          </td>
          <td>
            <a href="/users/DU518F3PCG36BQVP4I14">user_active</a>
          </td>
          <td>Jul 11, 2016 11:13&nbsp;AM</td>
        </tr>
        <tr role="row" class="odd">
          <td class="sorting_1">
            <span class="icon-column">
              <i class="access-icon icon-apple-filled"></i>
            </span>
            <a class="os-text-column" href="/endpoints/EPMSW95F4P4RBOD9IDCI">Mac OS X 10.11.5</a>
          </td>
          <td>
            <div class="subcell">
              <span class="icon-column">
                <i class="access-icon browser-icon browser-icon-chrome"></i>
              </span>
              <span class="browser-text-column">Chrome 51.0.2704.106</span>
            </div>
            <p class="indented plugin-version">Flash 22.0.0.192</p>
            <div class="subcell">
              <span class="icon-column">
                <i class="access-icon browser-icon browser-icon-firefox"></i>
              </span>
              <span class="browser-text-column">Firefox 47.0</span>
            </div>
            <p class="indented plugin-version">Flash 22.0.0.209</p>
            <p class="indented plugin-version">Java 1.8.0.91</p>
          </td>
          <td>
            <div class="darker-red-text">
              <div class="subcell">
                <span class="icon-column">
                  <i class="icon-java security-icon"></i>
                </span>
                <span class="warning-text-column">Java out of date</span>
              </div>
            </div>
          </td>
          <td>
            <a href="/users/DU6QQJK900COJCL0T73K">juniperuser</a>
          </td>
          <td>Jul 25, 2016 9:57&nbsp;AM</td>
        </tr>
      </tbody>
      <tfoot class="bottom-control-wrapper">
        <tr>
          <td class="footer-controls" colspan="5" rowspan="1">
            <div class="dataTables_length" id="endpoints-table_length">
              <label>Show
                <select name="endpoints-table_length" aria-controls="endpoints-table" class="">
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
              items</label>
            </div>
            <div class="dataTables_info" id="endpoints-table_info" role="status" aria-live="polite">
              1&ndash;25 of 36 total
            </div>
            <div class="dataTables_paginate paging_full_numbers" id="endpoints-table_paginate">
              <a class="paginate_button first disabled ss-icon" aria-controls="endpoints-table" data-dt-idx="0" tabindex="0" id="endpoints-table_first">
                &#9669;&#9669;
              </a>
              <a class="paginate_button previous disabled ss-icon" aria-controls="endpoints-table" data-dt-idx="1" tabindex="0" id="endpoints-table_previous">
                &#9669;
              </a>
              <span>
                <a class="paginate_button current" aria-controls="endpoints-table" data-dt-idx="2" tabindex="0">
                  1
                </a>
              </span>
              <a class="paginate_button next disabled ss-icon" aria-controls="endpoints-table" data-dt-idx="4" tabindex="0" id="endpoints-table_next">
                &#9659;
              </a>
              <a class="paginate_button last ss-icon" aria-controls="endpoints-table" data-dt-idx="5" tabindex="0" id="endpoints-table_last">
                &#9659;&#9659;
              </a>
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</div>
```
```sass
@import 'datatables';
.dataTables_wrapper {
    tr {
        vertical-align: top;
    }

    .plugin-version {
        color: $grey;
        font-size: $base-font-size - 1px;
    }
}


#endpoints-filter {
    .main-section {
        & > label {
        font-weight: normal;
        }
        .out-of-date-header {
            font-size: .95em;
            & + label {
                margin-top: 0;
            }
        }
    }
}
$browsers: unknown, safari, firefox, chrome, ie, opera, edge;

.access-icon {
  background-size: 16px;
  display: inline-block;
  overflow: hidden;
  font-size: 16px;
  width: 16px;
  height: 16px;
  margin-right: 4px;
  vertical-align: -3px;
}

.browser-icon {
  background-image: url('../images/browsers.png');
  display: none;
}

@for $i from 1 through length($browsers) {
  $offset: -16px * ($i - 1);
  .browser-icon-#{nth($browsers, $i)} {
    display: inline-block;
    background-position: 0px $offset;
  }
}

@include retina {
  .browser-icon {
    background-image: url('../images/browsers@2x.png');
  }
}

.plugin-icon {
  background-image: url('../images/plugins.png');

  &.plugin-icon-flash {
    background-position: 0px 0px;
  }
  &.plugin-icon-java {
    background-position: 0px -16px;
  }
}

.os-icon-unknown {
  display: none;
}
```
