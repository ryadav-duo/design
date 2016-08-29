---
title: Tooltip
template: child-2col-coded
active_page: 'hover-tooltip'
snippet_title: Hover Tool Tip
notes: 'Provide helper text when he clicks on the blue "Get Info" blob next to text.'
example: '
<i class="info icon-information-filled" original-title="Trusted devices settings do not apply to LastPass applications."></i>
'
---

* [HTML](0)
* [SCSS](1)

```html
<i class="info icon-information-filled" original-title="Trusted devices settings do not apply to LastPass applications."></i>

```
```sass
.info {
    @include policy-item-icon($info-blue);
}
```
