---
title: Forms
template: child-2col-coded
active_page: 'checkbox-input'
snippet_title: Checkbox Input List
notes: ''
example: '
<div class="line">
<label>Radio and Textarea input list</label>
<div class="field add-padding">
<div class="subline">
<input type="checkbox" name="checkbox_1" id="" value="1">&nbsp;
<label for="checkbox_1">Only allow authentication from users in certain groups</label>
</div>
<div class="subline">
<input type="checkbox" name="checkbox_2" id="" value="1">&nbsp;
<label for="checkbox_2">Only allow authentication from users in certain groups</label>
</div>
<div class="subline">
<input type="checkbox" name="checkbox_3" id="" value="1">&nbsp;
<label for="checkbox_3">Only allow authentication from users in certain groups</label>
</div>
</div>
</div>
'
---

* [HTML](0)
* [SCSS](1)

```html
<div class="line">
  <label>Radio and Textarea input list</label>
  <div class="field add-padding">
    <div class="subline">
      <input type="radio" id="radio_None" name="radio_1" value="">&nbsp;
      <label for="radio_1">
        Radio Label 1
      </label>
    </div>
  <textarea class="text" name="" id="">
    Textarea instructional text would go here.
  </textarea>
  <span class="help-block">
    Additional informative text goes here.
  </span>
  <div class="subline">
    <input type="radio" id="radio_Simple" name="radio_2" value="">&nbsp;
    <label for="radio_2">
      Radio Label 2
    </label>
  </div>
  <div class="subline">
    <input type="radio" id="radio_Simple" name="radio_3" value="">&nbsp;
    <label for="radio_3">
      Radio Label 3
    </label>
    </div>
  </div>
</div>
```
```sass
textarea {
  font-size: 100%;
  margin: 0;
  vertical-align: baseline;
}
textarea {
  border-color: $base-border-color;

  @include low-res {
    border-color: $base-border-color-low-res;
  }
}

.line {
  @include clearfix;

  clear: both;
  margin-bottom: 1rem;

  &:not(.vertical) > label:first-of-type {
    min-width: 12rem;
    padding-top: 6px;
    float: left;
    text-align: right;
    line-height: 18px;
  }

  .field {
    float: left;
    width: calc(100% - 13rem);
  }

  &:last-child {
    margin-bottom: 0;
  }

  .flexbox &:not(.vertical) {
    display: flex;
    align-items: baseline;

    &.hidden {
      display: none;
    }

    .field {
      flex: 1;
      margin-left: 1rem;
    }
  }
}
.subline {
  display: block;
  margin-bottom: 0.5rem;
}

```
