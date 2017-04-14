---
title: Buttons & Links
template: child-2col-coded
active_page: 'download'
snippet_title: File Download Button
notes: "Clicking this button will prompt the user to download a file to their device."
example: '<a class="c--btn-download" role="button" download="name you want the file to be on download"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-189 188 21 25" xml:space="preserve"> <title>download file icon</title> <path d="M-168.6,212.9h-19.8c-0.2,0-0.4-0.2-0.4-0.4v-24c0-0.2,0.2-0.4,0.4-0.4h13.5c0.1,0,0.2,0,0.3,0.1l6.2,6.2 c0.1,0.1,0.1,0.2,0.1,0.3v17.7C-168.2,212.7-168.4,212.9-168.6,212.9z M-188,212.1h19v-17.1l-6-6h-13V212.1z"></path> <path d="M-168.6,195.2h-6.2c-0.2,0-0.4-0.2-0.4-0.4v-6.2c0-0.2,0.2-0.4,0.4-0.4s0.4,0.2,0.4,0.4v5.9h5.8c0.2,0,0.4,0.2,0.4,0.4 S-168.4,195.2-168.6,195.2z"></path> <path id="Shape_2_" d="M-178.8,204.5c0.1,0.1,0.2,0.1,0.3,0.1s0.2,0,0.3-0.1l1.8-1.8c0.2-0.2,0.2-0.4,0-0.5c-0.2-0.2-0.3-0.2-0.5,0 l-1.2,1.2v-7c0-0.1,0-0.2-0.1-0.3s-0.2-0.1-0.3-0.1s-0.2,0-0.3,0.1s-0.1,0.2-0.1,0.3v7l-1.2-1.2c-0.2-0.2-0.4-0.2-0.5,0 c-0.2,0.2-0.2,0.3,0,0.5L-178.8,204.5z M-174.3,206h-8.4c-0.1,0-0.2,0-0.2,0.1s-0.1,0.2-0.1,0.3s0,0.2,0.1,0.3s0.1,0.1,0.2,0.1h8.4 c0.1,0,0.2,0,0.2-0.1s0.1-0.2,0.1-0.3s0-0.2-0.1-0.3S-174.2,206-174.3,206z"></path></svg>Download Button.extension<i>25.3 KB</i></a>'
---

* [HTML](0)
* [SCSS](1)

```html
<a class="c--btn-download" role="button" download="name you want the file to be on download">
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-189 188 21 25" xml:space="preserve"> <title>download file icon</title> <path d="M-168.6,212.9h-19.8c-0.2,0-0.4-0.2-0.4-0.4v-24c0-0.2,0.2-0.4,0.4-0.4h13.5c0.1,0,0.2,0,0.3,0.1l6.2,6.2 c0.1,0.1,0.1,0.2,0.1,0.3v17.7C-168.2,212.7-168.4,212.9-168.6,212.9z M-188,212.1h19v-17.1l-6-6h-13V212.1z"></path> <path d="M-168.6,195.2h-6.2c-0.2,0-0.4-0.2-0.4-0.4v-6.2c0-0.2,0.2-0.4,0.4-0.4s0.4,0.2,0.4,0.4v5.9h5.8c0.2,0,0.4,0.2,0.4,0.4 S-168.4,195.2-168.6,195.2z"></path> <path id="Shape_2_" d="M-178.8,204.5c0.1,0.1,0.2,0.1,0.3,0.1s0.2,0,0.3-0.1l1.8-1.8c0.2-0.2,0.2-0.4,0-0.5c-0.2-0.2-0.3-0.2-0.5,0 l-1.2,1.2v-7c0-0.1,0-0.2-0.1-0.3s-0.2-0.1-0.3-0.1s-0.2,0-0.3,0.1s-0.1,0.2-0.1,0.3v7l-1.2-1.2c-0.2-0.2-0.4-0.2-0.5,0 c-0.2,0.2-0.2,0.3,0,0.5L-178.8,204.5z M-174.3,206h-8.4c-0.1,0-0.2,0-0.2,0.1s-0.1,0.2-0.1,0.3s0,0.2,0.1,0.3s0.1,0.1,0.2,0.1h8.4 c0.1,0,0.2,0,0.2-0.1s0.1-0.2,0.1-0.3s0-0.2-0.1-0.3S-174.2,206-174.3,206z"></path></svg>

    Download Button.extension
    <i>25.3 KB</i>
</a>
```
```sass
.c--btn {
    &-next {
        @extend %button;

        &:after {
            @include forward-arrow;
            vertical-align: middle;
            margin-right: -.25em;
            line-height: 0;
            top: -.075em;
            position: relative;
        }
    }
    &-download {
        @extend %button;
        @include no-box-shadow;
        display: inline-block;;
        height: auto;
        border: none;
        padding: 12px 20px 12px 0;
        color: $info-blue;
        font-size: 0.8125rem;
        line-height: 1em;
        transition: color .2s ease;

        svg {
            display: inline-block;
            width: 1.72em;
            float: left;
            height: auto;
            fill: $info-blue;
            margin-right: 0.86em;
        }

        i {
            display: table-caption;
            clear: both;
            color: $mid-text-color;
            font-style: normal;
            margin-top: 0.25em;
            font-size: 0.6875rem;
            line-height: 1rem;
            min-width: 75px;
        }

        &:hover {
            @include no-box-shadow;
            color: $info-blue;
            background-color: transparent;
            text-decoration: underline;

            svg {
                fill: $info-blue;
            }

            i {
                text-decoration: none;
            }
        }

        &:focus,
        &:active {
            @include box-shadow;
            outline: none;
            border: inherit;
            background-color: transparent;
            color: inherit;
        }
    }
}
```
