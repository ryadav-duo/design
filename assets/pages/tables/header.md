---
title: Tables
template: child-1col-coded
active_page: ['Tables', 'Table Header']
snippet_title: Narrow Table
notes: 'Organizes and displays a large amount of related information.
Sort arrows, checkboxes, search bar, and the Add to Group dropdown provide tools to work with the data more easily.'
example: '  <div id="user-table_wrapper" class="dataTables_wrapper">
    <table id="user-table" class="dataTable" data-permission-read="true" data-csv-link="/users/export/csv" data-json-link="/users/export/json" role="grid" aria-describedby="user-table_info" style="width: 100%">
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
      </table>
  </div>
'
---

* [HTML](0)
* [SCSS](1)

```html
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
```
```sass
thead {
  background-color: #fff;
  color: $grey;
  font-size: 12px;

  @include low-res {
    color: $grey-dark-low-res;
  }
}

thead tr {
  border-bottom: 1px solid $grey-light;
  text-align: left;
}

th {
  font-weight: normal;
  padding: 10px;

  i {
    font-size: 16px;
  }
}
@mixin sort-arrow($icon) {
  content: $icon;
  font-family: 'Duo Admin Icons';
  margin-left: 8px;
  position: absolute;
}

.sorting, .sorting_desc, .sorting_asc {
  cursor: pointer;
  outline: none;

  &.checkbox:after {
    display: none;
  }
}

.sorting:after {
  @include sort-arrow('\e04b');
  font-size: 13px;
}

.sorting_desc:after {
  @include sort-arrow('\e014');
  font-size: 10px;
}

.sorting_asc:after {
  @include sort-arrow('\e012');
  font-size: 10px;
}
.loading {
  @include animation(spin .8s linear infinite);
  @include keyframes("spin") {
    100% {
      transform: rotate(360deg);
    }
  }

  background-image: url('../images/loading.svg');
  background-repeat: no-repeat;
  background-size: 100%;
  display: none;
  float: left;
  height: 30px;
  margin: -8px 16px 0 0;
  width: 30px;
  vertical-align: middle;
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

th.checkbox > label {
  padding: 8px 16px;
}

&:after {
  content: ".";
  display: block;
  visibility: hidden;
  line-height: 0;
  height: 0;
}
```
