---
title: Buttons & Links
template: child-2col-coded
active_page: 'secondary'
snippet_title: Secondary Button
notes: "This button isn't the main call-to-action (CTA) or primary button on the page. Multiple instances may appear on the same page. In most cases this is the default button state."
example: '<button class="">Secondary Action Button</button>'
---

* [HTML](0)
* [SCSS](1)

```html
<button class="">Secondary Action Button</button>
```
```sass
%button,
.button,
button:not(.link),
input[type="button"],
input[type="src"]:not(.link) input[type="reset"] {
    @include border-radius;
    @include transitions(color $fast-ease, background-color $fast-ease, border $slow-ease, box-shadow $slow-ease, max-height $slow-ease);
    display: inline-block;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1rem;
    min-height: 2.5rem;
    border: 2px solid $button-border-color;
    padding: 9px 20px 10px;
    color: $button-text-color;
    background-color: transparent;

    &:hover {
        background-color: transparent;
        border-color: $default-button-hover-color;
        color: $default-text-color;
        cursor: pointer;
    }

    &:focus {
        @include box-shadow;
        outline: none;
        border-color: $default-border-color;
        background-color: transparent;
        color: inherit;
    }

    &:active {
        @include box-shadow(inset 0 0 6px 0px $default-dropshadow-color);
        background-color: transparent;
        border-color: $default-button-hover-color;
    }
}
```
