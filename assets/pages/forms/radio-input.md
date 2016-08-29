---
title: Forms
template: child-2col-coded
active_page: 'radio-input'
snippet_title: List of Radio Inputs
notes: ''
example: '
<div class="line">
<label>Username normalization</label>
<div class="field add-padding">
<div class="subline">
<input type="radio" id="radio_None" name="username_normalization_policy" value="None">&nbsp;
<label for="radio_None">
Radio Label 1
</label>
</div>
<div class="subline">
<input type="radio" id="radio_Simple" name="username_normalization_policy" value="Simple" checked="">&nbsp;
<label for="radio_Simple">
Radio Lable 2
<span class="subline checkbox-indent">Additional informative text goes here.</span>
</label>
</div>
<span class="help-block no-margin-bottom">
Paragraph text giving description to cluster of UI controls
</span>
</div>
</div>
'
---

* [HTML](0)
* [SCSS](1)

```html
<div class="line">
  <label>Username normalization</label>
  <div class="field add-padding">
    <div class="subline">
      <input type="radio" id="radio_None" name="username_normalization_policy" value="None">&nbsp;
      <label for="radio_None">
        Radio Label 1
      </label>
    </div>
    <div class="subline">
      <input type="radio" id="radio_Simple" name="username_normalization_policy" value="Simple" checked="">&nbsp;
        <label for="radio_Simple">
          Radio Lable 2
          <span class="subline checkbox-indent">Additional informative text goes here.</span>
        </label>
    </div>
    <span class="help-block no-margin-bottom">
      Paragraph text giving description to cluster of UI controls
    </span>
  </div>
</div>
```
```sass
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
