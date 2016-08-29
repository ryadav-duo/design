---
title: Confirmation Modal
template: child-1col-coded
active_page: 'confirmation-modal'
snippet_title: Confirmation Modal
notes: ''
example: '
<div id="modal-confirm" class="modal modal-auto modal-confirm" style="position: relative; transform: none; left: auto; top: auto; margin: 0 auto;">
  <div class="modal-header confirm-header">
    <i class="icon-exclamation-mark-circle"></i>
    <h1 class="confirm-title">Confrimation message goes here.</h1>
  </div>
  <div class="modal-content confirm-content hidden">
    <p class="confirm-message"></p>
  </div>
  <div class="modal-footer">
    <span class="button-group buttons-alert hidden">
<button class="button-accept button-alert confirm-button">Destruction Button</button>
</span>
    <span class="button-group buttons-confirm">
<button class="button-cancel confirm-button"> Secondary Button </button>
<button class="button-accept confirm-button danger">Destruction Button</button>
</span>
  </div>
</div>
'
---

* [HTML](0)
* [SCSS](1)

```html
<div id="modal-confirm" class="modal modal-auto modal-confirm">
  <div class="modal-header confirm-header">
    <i class="icon-exclamation-mark-circle"></i>
    <h1 class="confirm-title">Deleting this user cannot be undone.</h1>
  </div>
  <div class="modal-content confirm-content hidden">
    <p class="confirm-message"></p>
  </div>
  <div class="modal-footer">
    <span class="button-group buttons-alert hidden">
      <button class="button-accept button-alert confirm-button">Delete</button>
    </span>
    <span class="button-group buttons-confirm">
      <button class="button-cancel confirm-button"> Cancel </button>
      <button class="button-accept confirm-button danger">Delete</button>
    </span>
  </div>
</div>
```
```sass
.modal-confirm {
    max-width: 560px;
}

.confirm-content.hidden + .modal-footer {
    border: none;
}

.confirm-header {
    text-align: center;

    h1 {
        line-height: 32px;
    }

    i {
        color: $error-red;
        display: block;
        font-size: 80px;
        margin-bottom: 32px;
    }
}

.confirm-message {
    margin: 0;
    text-align: center;
}

.confirm-button {
    min-width: 96px;

     & + & {
        margin-left: 16px;
     }
}

.confirm-positive {
    i {
        color: $duo-green;
        font-size: 64px;
    }
}

```
