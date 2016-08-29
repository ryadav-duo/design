---
title: Dropdown
template: child-2col-coded
active_page: 'dropdown-field'
snippet_title: Dropdown Field
notes: ''
example: '
<div class="field">
<select id="type" name="type"> <option value="Option 1" selected=""> Option 1 </option> <option value="Option 2"> Option 2 </option> <option value="Option 3"> Option 3 </option> </select>
</div>
'
---

* [HTML](0)
* [SCSS](1)

```html
<div class="field">
  <select id="type" name="type">
    <option value="Option 1" selected=""> Option 1 </option>
    <option value="Option 2"> Option 2 </option>
    <option value="Option 3"> Option 3 </option>
  </select>
</div>
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
