---
title: Policy Modal
template: child-1col-coded
active_page: ['policy']
snippet_title: policy
notes: ''
example: '
<form class="modal modal-fixed" id="modal-policy-builder" style="position: relative; ">
  <div class="modal-header">
    <h1>Policy Modal Header</h1>
    <a href="#" class="modal-close">
      <i class="icon-delete"></i>
    </a>
  </div>
  <div class="modal-content form policy-builder">
    <main>
      <p>Some content can go here.</p>
    </main>
  </div>
  <div class="modal-footer">
    <button class="primary confirm">Creation Button</button>
  </div>
</form>
'
---

* [HTML](0)
* [SCSS](1)

```html
<form class="modal modal-fixed" id="modal-policy-builder">
  <div class="modal-header modal-fixed-header">
    <h1>Create a New Policy</h1>
    <a href="#" class="modal-close">
      <i class="icon-delete"></i>
    </a>
  </div>
  <div class="modal-fixed-content form policy-builder">
  </div>
  <div class="modal-footer modal-fixed-footer">
    <button class="primary confirm">Create Policy</button>
  </div>
</form>
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
