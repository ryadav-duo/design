---
title: Bar Graph
template: child-1col-coded
active_page: 'bar-graph'
snippet_title: Bar Graph
notes: 'Display a breakdown of two categories (out-of-date vs up-to-date devices).'
example: '
<div class="box insight-breakdown device-insight-section">
  <div class="total-device-count-container left-side">
    <div class="total-device-content">
      <div class="out-of-date device-count-header">
        <span class="device-count"> 8 </span> Devices
      </div>
      <div class="description-text">
        are Out-of-Date
      </div>
      <div class="policy-link">
        <a href="/policies#global+platforms">Edit your policy</a>
        <p>to block these devices</p>
      </div>
    </div>
  </div>
  <div class="insight-percentage-bar-container">
    <div class="percentage-bar-title">
      <span class="percentage-bar-title-count">
(Number)
</span> of Devices
    </div>
    <div id="device-age-breakdown" class="insight-percentage-bar" data-highcharts-chart="0">
      <div class="highcharts-container" id="highcharts-0" style="position: relative; overflow: hidden; width: 267px; height: 20px; text-align: left; line-height: normal; z-index: 0; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="267" height="20">
          <desc>Created with Highcharts 4.0.1</desc>
          <defs>
            <clipPath id="highcharts-1">
              <rect x="0" y="0" width="20" height="267"></rect>
            </clipPath>
          </defs>
          <g class="highcharts-grid" zIndex="1"></g>
          <g class="highcharts-grid" zIndex="1">
            <path fill="none" d="M 66.5 0 L 66.5 20" stroke="transparent" stroke-width="1" zIndex="1" opacity="1"></path>
            <path fill="none" d="M 133.5 0 L 133.5 20" stroke="transparent" stroke-width="1" zIndex="1" opacity="1"></path>
            <path fill="none" d="M 199.5 0 L 199.5 20" stroke="transparent" stroke-width="1" zIndex="1" opacity="1"></path>
            <path fill="none" d="M 267.5 0 L 267.5 20" stroke="transparent" stroke-width="1" zIndex="1" opacity="1"></path>
            <path fill="none" d="M -0.5 0 L -0.5 20" stroke="transparent" stroke-width="1" zIndex="1" opacity="1"></path>
          </g>
          <g class="highcharts-axis" zIndex="2"></g>
          <g class="highcharts-axis" zIndex="2"></g>
          <g class="highcharts-series-group" zIndex="3">
            <g class="highcharts-series" visibility="visible" zIndex="0.1" transform="translate(267,20) rotate(90) scale(-1,1) scale(1 1)" width="267" height="20" clip-path="url(#highcharts-1)">
              <rect x="1" y="74" width="19" height="194" stroke="#FFFFFF" fill="#A13639" rx="0" ry="0" stroke-width="0.00001"></rect>
            </g>
            <g class="highcharts-markers" visibility="visible" zIndex="0.1" transform="translate(267,20) rotate(90) scale(-1,1) scale(1 1)" width="267" height="20" clip-path="none"></g>
            <g class="highcharts-series" visibility="visible" zIndex="0.1" transform="translate(267,20) rotate(90) scale(-1,1) scale(1 1)" width="267" height="20" clip-path="url(#highcharts-1)">
              <rect x="1" y="0" width="19" height="74" stroke="#FFFFFF" fill="#63B246" rx="0" ry="0" stroke-width="0.00001"></rect>
            </g>
            <g class="highcharts-markers" visibility="visible" zIndex="0.1" transform="translate(267,20) rotate(90) scale(-1,1) scale(1 1)" width="267" height="20" clip-path="none"></g>
          </g>
          <g class="highcharts-axis-labels highcharts-xaxis-labels" zIndex="7"></g>
          <g class="highcharts-axis-labels highcharts-yaxis-labels" zIndex="7"></g>
        </svg>
      </div>
    </div>
    <ul class="insight-keys insight-keys-device-breakdown">

      <li class="insight-key out-of-date" data-type="out of date">
        <span class="legened-percent">
73%
</span> &mdash; out of date
      </li>

      <li class="insight-key up-to-date" data-type="up to date">
        <span class="legened-percent">
27%
</span> &mdash; up to date
      </li>

    </ul>
  </div>
  <div class="total-device-count-container right-side">
    <div class="total-device-content">
      <div class="up-to-date device-count-header">
        <span class="device-count"> 3 </span> Devices
      </div>
      <div class="description-text">
        are Up to Date
      </div>
    </div>
  </div>
</div>
'
---

* [HTML](0)
* [SCSS](1)

```html
<div class="box insight-breakdown device-insight-section">
  <div class="total-device-count-container left-side">
    <div class="total-device-content">
      <div class="out-of-date device-count-header">
        <span class="device-count"> 8 </span> Devices
      </div>
      <div class="description-text">
        are Out-of-Date
      </div>
      <div class="policy-link">
        <a href="/policies#global+platforms">Edit your policy</a>
        <p>to block these devices</p>
      </div>
    </div>
  </div>
  <div class="insight-percentage-bar-container">
    <div class="percentage-bar-title">
      <span class="percentage-bar-title-count">
Number
</span> of Devices
    </div>
    <div id="device-age-breakdown" class="insight-percentage-bar" data-highcharts-chart="0">
      <div class="highcharts-container" id="highcharts-0" style="position: relative; overflow: hidden; width: 267px; height: 20px; text-align: left; line-height: normal; z-index: 0; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="267" height="20">
          <desc>Created with Highcharts 4.0.1</desc>
          <defs>
            <clipPath id="highcharts-1">
              <rect x="0" y="0" width="20" height="267"></rect>
            </clipPath>
          </defs>
          <g class="highcharts-grid" zIndex="1"></g>
          <g class="highcharts-grid" zIndex="1">
            <path fill="none" d="M 66.5 0 L 66.5 20" stroke="transparent" stroke-width="1" zIndex="1" opacity="1"></path>
            <path fill="none" d="M 133.5 0 L 133.5 20" stroke="transparent" stroke-width="1" zIndex="1" opacity="1"></path>
            <path fill="none" d="M 199.5 0 L 199.5 20" stroke="transparent" stroke-width="1" zIndex="1" opacity="1"></path>
            <path fill="none" d="M 267.5 0 L 267.5 20" stroke="transparent" stroke-width="1" zIndex="1" opacity="1"></path>
            <path fill="none" d="M -0.5 0 L -0.5 20" stroke="transparent" stroke-width="1" zIndex="1" opacity="1"></path>
          </g>
          <g class="highcharts-axis" zIndex="2"></g>
          <g class="highcharts-axis" zIndex="2"></g>
          <g class="highcharts-series-group" zIndex="3">
            <g class="highcharts-series" visibility="visible" zIndex="0.1" transform="translate(267,20) rotate(90) scale(-1,1) scale(1 1)" width="267" height="20" clip-path="url(#highcharts-1)">
              <rect x="1" y="74" width="19" height="194" stroke="#FFFFFF" fill="#A13639" rx="0" ry="0" stroke-width="0.00001"></rect>
            </g>
            <g class="highcharts-markers" visibility="visible" zIndex="0.1" transform="translate(267,20) rotate(90) scale(-1,1) scale(1 1)" width="267" height="20" clip-path="none"></g>
            <g class="highcharts-series" visibility="visible" zIndex="0.1" transform="translate(267,20) rotate(90) scale(-1,1) scale(1 1)" width="267" height="20" clip-path="url(#highcharts-1)">
              <rect x="1" y="0" width="19" height="74" stroke="#FFFFFF" fill="#63B246" rx="0" ry="0" stroke-width="0.00001"></rect>
            </g>
            <g class="highcharts-markers" visibility="visible" zIndex="0.1" transform="translate(267,20) rotate(90) scale(-1,1) scale(1 1)" width="267" height="20" clip-path="none"></g>
          </g>
          <g class="highcharts-axis-labels highcharts-xaxis-labels" zIndex="7"></g>
          <g class="highcharts-axis-labels highcharts-yaxis-labels" zIndex="7"></g>
        </svg>
      </div>
    </div>
    <ul class="insight-keys insight-keys-device-breakdown">

      <li class="insight-key out-of-date" data-type="out of date">
        <span class="legened-percent">
73%
</span> &mdash; out of date
      </li>

      <li class="insight-key up-to-date" data-type="up to date">
        <span class="legened-percent">
27%
</span> &mdash; up to date
      </li>

    </ul>
  </div>
  <div class="total-device-count-container right-side">
    <div class="total-device-content">
      <div class="up-to-date device-count-header">
        <span class="device-count"> 3 </span> Devices
      </div>
      <div class="description-text">
        are Up to Date
      </div>
    </div>
  </div>
</div>

```
```sass
.box {
  @include box;
}
.insight-section {
    & + &.box:not(.insight-breakdown) {
        margin-top: -2em;
    }

    & + .page-message {
        margin-top: -2em;
        margin-bottom: 4em;
    }

    &.no-margin {
        margin-top: -2em;
    }

    h3, h4 {
        margin-top: .5em;
        display: block;
    }

    .star-explanation {
        font-size: .9em;
        margin-top: -1rem;
        span {
            font-weight: bold;
        }
    }
}
.total-device-count-container {
    width: 24%;
    padding: 10px 0px;
    margin: 0px;
    position: relative;
    border: solid 2px $base-border-color;
    border-radius: 5px;

    &.left-side {
        height: 90px;
    }

    &.right-side {
        height: 46px
    }

    > .total-device-content {
        position: absolute;
        height: 110%;
        width: 96%;
        left: 2%;
        top: -5%;
        background: $white;
    }

    .up-to-date {
        color: $duo-green;
    }

    .out-of-date {
        color: $error-red;
    }

    .device-count-header {
        font-size: 18px;

        .device-count {
            font-size: 22px;
        }
    }
}
.insight-percentage-bar-container {
    text-align: center;
    width: 47%;
    padding: 0px 20px;

    .insight-percentage-bar {
        padding: 5px 10px;
        width: 100%;
    }

    li {
        margin-bottom: 0;
    }

    ul.insight-keys {
        padding: 0px;
        width: 100%;

        li.insight-key {
            padding: 0.6em;
            font-size: 0.9em;
        }

        .legened-percent {
            color: $grey;
        }

        li:nth-child(odd) {
            float: left;
            text-align: left;
        }

        li:nth-child(even) {
            float: right;
            text-align: right;
        }

    }

    .percentage-bar-title {
        color: #5d5d5d;
        font-size: 22px;
        padding: 10px 5px;

        .percentage-bar-title-count {
            font-size: 34px;
        }
    }
}

```
