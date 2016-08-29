---
title: Multiple Data Sets
template: child-1col-coded
active_page: 'multi-data-sets'
snippet_title: Multiple Data Sets
notes: 'Break-down of multiple sets of data.'
example: '
<script type="text/json" id="charts">
{"platforms": [["ios", 10], ["android", 2], ["windows", 0], ["blackberry", 0], ["other", 0]], "android_insight": {"passcode_status": [["positive", 0], ["negative", 0], ["unknown", 2]], "full_disk_encryption": [["positive", 0], ["negative", 0], ["unknown", 2]], "rooted": [["positive", 0], ["negative", 0], ["unknown", 2]], "touchid_status": [["positive", 0], ["negative", 0], ["unsupported", 0], ["unknown", 2]]}, "ios_insight": {"passcode_status": [["positive", 0], ["negative", 0], ["unknown", 10]], "rooted": [["positive", 0], ["negative", 0], ["unknown", 10]], "touchid_status": [["positive", 0], ["negative", 0], ["unsupported", 0], ["unknown", 10]]}}
</script>
<div class="box insight-breakdown">
  <div class="insight-breakdown-header">
    <h4>Device Breakdown</h4>
    <i>out of</i>
    <p>12 total devices</p>
  </div>
  <div id="platform-breakdown" class="insight-breakdown-chart" data-highcharts-chart="0">
    <div class="highcharts-container" id="highcharts-0" style="position: relative; overflow: hidden; width: 140px; height: 140px; text-align: left; line-height: normal; z-index: 0; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); cursor: auto;">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="140" height="140">
        <desc>Created with Highcharts 4.0.1</desc>
        <defs>
          <clipPath id="highcharts-1">
            <rect x="0" y="0" width="140" height="140"></rect>
          </clipPath>
        </defs>
        <path fill="rgba(68,68,68,0.25)" d="M 0 0"></path>
        <g class="highcharts-series-group" zIndex="3">
          <g class="highcharts-series highcharts-tracker" visibility="visible" zIndex="0.1" transform="translate(0,0) scale(1 1)">
            <path fill="#08C0E5" d="M 69.9877796077783 10.00000124448323 A 60 60 0 1 1 18.002769785525764 40.06192975452546 L 28.8355260802079 46.29902772233265 A 47.5 47.5 0 1 0 69.99032552282448 22.50000098521589 Z" stroke="#FFFFFF" stroke-width="0.00001"
                stroke-linejoin="round" transform="translate(0,0)"></path>
            <path fill="#1E896F" d="M 18.032733849394504 40.00994750201107 A 60 60 0 0 1 69.9166612037157 10.000057877985967 L 69.9340234529416 22.500045820072224 A 47.5 47.5 0 0 0 28.859247630770646 46.25787510575877 Z" stroke="#FFFFFF" stroke-width="0.00001"
                stroke-linejoin="round" transform="translate(0,0)"></path>
            <path fill="#BEDA38" d="M 69.97666117750714 10.000004539172132 A 60 60 0 0 1 69.9166612037157 10.000057877985967 L 69.9340234529416 22.500045820072224 A 47.5 47.5 0 0 0 69.98152343219316 22.500003593511273 Z" stroke="#FFFFFF" stroke-width="0.00001"
                stroke-linejoin="round" transform="translate(0,0)"></path>
            <path fill="#FDDF19" d="M 69.97666117750714 10.000004539172132 A 60 60 0 0 1 69.9166612037157 10.000057877985967 L 69.9340234529416 22.500045820072224 A 47.5 47.5 0 0 0 69.98152343219316 22.500003593511273 Z" stroke="#FFFFFF" stroke-width="0.00001"
                stroke-linejoin="round" transform="translate(0,0)"></path>
            <path fill="#444444" d="M 69.97666117750714 10.000004539172132 A 60 60 0 0 1 69.9166612037157 10.000057877985967 L 69.9340234529416 22.500045820072224 A 47.5 47.5 0 0 0 69.98152343219316 22.500003593511273 Z" stroke="#FFFFFF" stroke-width="0.00001"
                stroke-linejoin="round" transform="translate(0,0)"></path>
          </g>
          <g class="highcharts-markers" visibility="visible" zIndex="0.1" transform="translate(0,0) scale(1 1)"></g>
        </g>
        <g class="highcharts-legend" zIndex="7">
          <g zIndex="1">
            <g></g>
          </g>
        </g>
      </svg>
    </div>
  </div>
  <ul class="insight-keys insight-breakdown-keys insight-keys-platforms">

    <a class="insight-key is-clickable ios" href="/phones?platform=2">
      <li>
        <h4>iOS</h4>
        <p>10</p>
      </li>
    </a>

    <a class="insight-key is-clickable android" href="/phones?platform=1">
      <li>
        <h4>Android</h4>
        <p>2</p>
      </li>
    </a>

    <a class="insight-key windows" href="#">
      <li>
        <h4>Windows Phone</h4>
        <p>0</p>
      </li>
    </a>

    <a class="insight-key blackberry" href="#">
      <li>
        <h4>BlackBerry</h4>
        <p>0</p>
      </li>
    </a>

    <a class="insight-key other" href="#">
      <li>
        <h4>Other</h4>
        <p>0</p>
      </li>
    </a>

  </ul>
</div>
'
---

* [HTML](0)
* [SCSS](1)

```html
<div class="box insight-breakdown">
  <div class="insight-breakdown-header">
    <h4>Device Breakdown</h4>
    <i>out of</i>
    <p>12 total devices</p>
  </div>
  <div id="platform-breakdown" class="insight-breakdown-chart" data-highcharts-chart="0">
    <div class="highcharts-container" id="highcharts-0" style="position: relative; overflow: hidden; width: 140px; height: 140px; text-align: left; line-height: normal; z-index: 0; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); cursor: auto;">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="140" height="140">
        <desc>Created with Highcharts 4.0.1</desc>
        <defs>
          <clipPath id="highcharts-1">
            <rect x="0" y="0" width="140" height="140"></rect>
          </clipPath>
        </defs>
        <path fill="rgba(68,68,68,0.25)" d="M 0 0"></path>
        <g class="highcharts-series-group" zIndex="3">
          <g class="highcharts-series highcharts-tracker" visibility="visible" zIndex="0.1" transform="translate(0,0) scale(1 1)">
            <path fill="#08C0E5" d="M 69.9877796077783 10.00000124448323 A 60 60 0 1 1 18.002769785525764 40.06192975452546 L 28.8355260802079 46.29902772233265 A 47.5 47.5 0 1 0 69.99032552282448 22.50000098521589 Z" stroke="#FFFFFF" stroke-width="0.00001"
                stroke-linejoin="round" transform="translate(0,0)"></path>
            <path fill="#1E896F" d="M 18.032733849394504 40.00994750201107 A 60 60 0 0 1 69.9166612037157 10.000057877985967 L 69.9340234529416 22.500045820072224 A 47.5 47.5 0 0 0 28.859247630770646 46.25787510575877 Z" stroke="#FFFFFF" stroke-width="0.00001"
                stroke-linejoin="round" transform="translate(0,0)"></path>
            <path fill="#BEDA38" d="M 69.97666117750714 10.000004539172132 A 60 60 0 0 1 69.9166612037157 10.000057877985967 L 69.9340234529416 22.500045820072224 A 47.5 47.5 0 0 0 69.98152343219316 22.500003593511273 Z" stroke="#FFFFFF" stroke-width="0.00001"
                stroke-linejoin="round" transform="translate(0,0)"></path>
            <path fill="#FDDF19" d="M 69.97666117750714 10.000004539172132 A 60 60 0 0 1 69.9166612037157 10.000057877985967 L 69.9340234529416 22.500045820072224 A 47.5 47.5 0 0 0 69.98152343219316 22.500003593511273 Z" stroke="#FFFFFF" stroke-width="0.00001"
                stroke-linejoin="round" transform="translate(0,0)"></path>
            <path fill="#444444" d="M 69.97666117750714 10.000004539172132 A 60 60 0 0 1 69.9166612037157 10.000057877985967 L 69.9340234529416 22.500045820072224 A 47.5 47.5 0 0 0 69.98152343219316 22.500003593511273 Z" stroke="#FFFFFF" stroke-width="0.00001"
                stroke-linejoin="round" transform="translate(0,0)"></path>
          </g>
          <g class="highcharts-markers" visibility="visible" zIndex="0.1" transform="translate(0,0) scale(1 1)"></g>
        </g>
        <g class="highcharts-legend" zIndex="7">
          <g zIndex="1">
            <g></g>
          </g>
        </g>
      </svg>
    </div>
  </div>
  <ul class="insight-keys insight-breakdown-keys insight-keys-platforms">

    <a class="insight-key is-clickable ios" href="/phones?platform=2">
      <li>
        <h4>iOS</h4>
        <p>10</p>
      </li>
    </a>

    <a class="insight-key is-clickable android" href="/phones?platform=1">
      <li>
        <h4>Android</h4>
        <p>2</p>
      </li>
    </a>

    <a class="insight-key windows" href="#">
      <li>
        <h4>Windows Phone</h4>
        <p>0</p>
      </li>
    </a>

    <a class="insight-key blackberry" href="#">
      <li>
        <h4>BlackBerry</h4>
        <p>0</p>
      </li>
    </a>

    <a class="insight-key other" href="#">
      <li>
        <h4>Other</h4>
        <p>0</p>
      </li>
    </a>

  </ul>
</div>
```
```sass
.insight-breakdown {
    & > * {
        display: inline-block;
        vertical-align: middle;
    }
}
.insight-breakdown-chart {
    width: 15%;
}
.insight-breakdown-header {
    display: inline-block;
    width: 15%;

    legend {
        margin-bottom: 1em;
    }
}
.insight-keys {
    display: inline-block;
    list-style-type: none;
    margin: 0;
    text-align: left;
}
.insight-key {
    @include transition(background-color);

    display: inline-block;
    min-width: 160px;
    padding: 1em;
    text-decoration: none;

    &.is-clickable {
        & > * {
            text-decoration: underline;
        }
    }
    &.is-clickable:hover,
    &.hover {
        background-color: $grey-lighter;
        cursor: pointer;
    }
    &:not(.is-clickable),
    &:not(.is-clickable):hover {
        color: inherit;
        cursor: default;
        text-decoration: none;
    }

    &:before {
        border-radius: 50%;
        content: '';
        display: inline-block;
        height: 10px;
        margin-right: .5rem;
        width: 10px;

    }
    &.negative:before,
    &.enabled:before,
    &.out-of-date:before {
        background-color: $error-red;
    }
    &.positive:before,
    &.up-to-date:before {
        background-color: $duo-green;
    }
    &.unknown:before {
        background-color: $grey;
    }
    &.android:before {
        background-color: #1E896F;
    }
    &.insight-access-key.windows:before {
        background-color: $windows-green;
    }
    &.internetexplorer:before {
        background-color: $ie-blue;
    }
    &.blackberry:before,
    &.insight-access-key.android:before {
        background-color: #FDDF19;
    }
    &.firefox:before {
        background-color: $firefox-orange;
    }
    &.ios:before {
        background-color: #08C0E5;
    }
    &.macosx:before {
        background-color: $macosx-blue;
    }
    &.chrome:before {
        background-color: $chrome-green;
    }
    &.other:before {
        background-color: $grey-darker;
    }
    &.windows:before,
    &.insight-access-key.ios:before {
        background-color: #BEDA38;
    }
    &.safari:before {
        background-color: $safari-red;
    }
    &.unsupported:before,
    &.uninstalled:before,
    &.disabled:before {
        background-color: black;
    }
    &.edge:before{
        background-color: $edge-blue;
    }

    h4, p {
        margin: 0;
        min-width: 160px;
    }
    h4 {
        text-decoration: none;
    }

    li {
        display: inline-block;
        vertical-align: top;
        width: 80%;
    }

    // Refers to plugin status, not whether or not the element is active
    &.disabled {
        h4 {
            color: $grey-dark;
        }
        p {
            color: $info-blue;
        }
    }
}
.insight-breakdown-keys {
    width: calc(70% - 1em);
    & > * {
        width: calc(33% - 1em);
        @media (max-width: 1280px) {
            width: calc(50% - 1em);
        }
    }
}
```
