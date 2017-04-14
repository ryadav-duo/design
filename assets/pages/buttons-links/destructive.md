---
title: Buttons & Links
template: child-2col-coded
active_page: 'destructive'
snippet_title: Destructive Action Button
notes: "Clicking on a Red button will do something dangerous, often permanently destructive. Clicking it will give you a confirmation modal where you'll have the chance to confirm or deny said action."
example: '<button class="c--destruction icon">Destructive Button</button>'
---

* [HTML](0)
* [SCSS](1)

```html
<button class="c--destruction icon">Destructive Button</button>
```
```sass
%destructive,
&.c--destruction {
    &:before {
        content: $trashcan;
        display: inline-block;
        color: $destructive-button-color;
        font-size: 1.05rem;
        font-weight: bold !important;
        padding-right: 6px;
        margin-top: -.2em;
    }

    &:after {
        background-color: $destructive-button-color;
    }

    &:hover {
        background-color: transparent;
        border-color: $destructive-button-color;
    }

    &:active {
        @include box-shadow(inset 0 0 4px 0px $destructive-boxshadow-color);
    }
}

&.a--destruction-ico:before {
    padding-right: 0;
}
```
