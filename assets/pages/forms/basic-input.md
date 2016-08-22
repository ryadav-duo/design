---
title: Forms
template: child-2col-coded
active_page: ['basic-input']
snippet_title: Basic Input Field
notes: 'Basic input field for text. The green outline indicates focus. The gray outline lacks focus. User-entered text is black.'
example: '
<label for="pname">Field Label</label>
<input class="" type="text" name="pname" id="pname" value="" placeholder="text describing what to do">
<span class="help-block no-margin-bottom">Additional instructional text goes here.</span>
'
---

* [HTML](0)
* [SCSS](1)

```html
<input class="" type="text" name="pname" id="pname" value="" placeholder="text describing what to do">
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

button, input {
  line-height: normal;
}

input, textarea, select {
  border-color: $base-border-color;

  @include low-res {
    border-color: $base-border-color-low-res;
  }
}
input, textarea {
  @include transition(color, border-color, box-shadow);

  font-family: $base-font-family;
  border-width: 2px;
  border-style: solid;
  border-radius: $border-radius;
  color: $grey-dark;
  padding: 0.5rem;
  width: 100%;
  outline: none;

  &:hover {
    border-color: darken($grey-light, 5%);
  }

  &:focus {
    color: $grey-darker;
    border-color: $duo-green;
    box-shadow: 0 0 5px 0 transparentize($duo-green, 0.5);
  }

  &.half-width {
    width: 50%;
  }

  &.short {
    width: 48px;
  }

  &.valid, .line.valid & {
    border-color: $success-green-light;
  }

  &.invalid, .line.invalid & {
    border-color: $error-red-light;
  }

  // normalize prefixes the selector with html for... some reason
  html &[disabled] {
    color: $grey;
    background-color: $disabled-input-color;
    cursor: not-allowed;
  }
}
```
