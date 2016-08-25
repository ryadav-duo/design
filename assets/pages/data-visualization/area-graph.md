---
title: Area Graph
template: child-1col-coded
active_page: ['area-graph']
snippet_title: Area Graph
notes: 'Display changes of data over time using area graph.'
example: '
<div class="insight-section-header os-header">
  <h2 class="stacked">
<span class="header-description">Devices with Out-of-Date</span>
<span class="header-type">operating systems</span>
</h2>
</div>
<div class="box insight-section insight-breakdown endpoint-section history-container" id="os-section">
  <div class="graph-legend-container">
    <span class="total-device-line"> </span>
    <span class="legend-description">
Total devices
</span>
    <span class="ood-device-legend-box os"> </span>
    <span class="legend-description">
Devices with out-of-date operating systems
</span>
  </div>
  <div class="graph-to-card-connector">
    <svg style="visibility: visible;">
      <circle class="left inner" cy="20" r="3.5" cx="481"></circle>
      <circle class="right inner" cy="20" r="3.5" cx="687"></circle>
      <polyline points="481,20 481,7 687,7 687,20"></polyline>
      <circle class="left outer" cy="20" r="8.5" cx="481"></circle>
      <circle class="right outer" cy="20" r="8.5" cx="687"></circle>
    </svg>
  </div>
  <div class="left-side-time-chart-container">
    <div id="os-data-chart" class="time-series-chart time-series-os-chart" data-highcharts-chart="3">
      <div class="highcharts-container" id="highcharts-10" style="position: relative; overflow: hidden; width: 522px; height: 250px; text-align: left; line-height: normal; z-index: 0; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="522" height="250">
          <desc>Created with Highcharts 4.0.1</desc>
          <defs>
            <clipPath id="highcharts-11">
              <rect x="0" y="0" width="496" height="200"></rect>
            </clipPath>
          </defs>
          <rect x="0" y="0" width="522" height="250" strokeWidth="0" fill="#FFFFFF" class=" highcharts-background"></rect>
          <g class="highcharts-grid" zIndex="1">
            <path fill="none" d="M 21 4.5 L 517 4.5" stroke="#CCCCCC" stroke-width="1" zIndex="1" opacity="1"></path>
            <path fill="none" d="M 21 30.5 L 517 30.5" stroke="#CCCCCC" stroke-width="1" zIndex="1" opacity="1"></path>
            <path fill="none" d="M 21 55.5 L 517 55.5" stroke="#CCCCCC" stroke-width="1" zIndex="1" opacity="1"></path>
            <path fill="none" d="M 21 80.5 L 517 80.5" stroke="#CCCCCC" stroke-width="1" zIndex="1" opacity="1"></path>
            <path fill="none" d="M 21 105.5 L 517 105.5" stroke="#CCCCCC" stroke-width="1" zIndex="1" opacity="1"></path>
            <path fill="none" d="M 21 130.5 L 517 130.5" stroke="#CCCCCC" stroke-width="1" zIndex="1" opacity="1"></path>
            <path fill="none" d="M 21 155.5 L 517 155.5" stroke="#CCCCCC" stroke-width="1" zIndex="1" opacity="1"></path>
            <path fill="none" d="M 21 180.5 L 517 180.5" stroke="#CCCCCC" stroke-width="1" zIndex="1" opacity="1"></path>
            <path fill="none" d="M 21 205.5 L 517 205.5" stroke="#CCCCCC" stroke-width="1" zIndex="1" opacity="1"></path>
          </g>
          <g class="highcharts-grid" zIndex="1">
            <path fill="none" d="M 91.5 5 L 91.5 205" stroke="#CCCCCC" stroke-width="1" zIndex="1" opacity="1"></path>
            <path fill="none" d="M 162.5 5 L 162.5 205" stroke="#CCCCCC" stroke-width="1" zIndex="1" opacity="1"></path>
            <path fill="none" d="M 233.5 5 L 233.5 205" stroke="#CCCCCC" stroke-width="1" zIndex="1" opacity="1"></path>
            <path fill="none" d="M 303.5 5 L 303.5 205" stroke="#CCCCCC" stroke-width="1" zIndex="1" opacity="1"></path>
            <path fill="none" d="M 374.5 5 L 374.5 205" stroke="#CCCCCC" stroke-width="1" zIndex="1" opacity="1"></path>
            <path fill="none" d="M 445.5 5 L 445.5 205" stroke="#CCCCCC" stroke-width="1" zIndex="1" opacity="1"></path>
            <path fill="none" d="M 517.5 5 L 517.5 205" stroke="#CCCCCC" stroke-width="1" zIndex="1" opacity="1"></path>
            <path fill="none" d="M 20.5 5 L 20.5 205" stroke="#CCCCCC" stroke-width="1" zIndex="1" opacity="1"></path>
          </g>
          <g class="highcharts-axis" zIndex="2"></g>
          <g class="highcharts-axis" zIndex="2">
            <path fill="none" d="M 21 205.5 L 517 205.5" stroke="#C0D0E0" stroke-width="1" zIndex="7" visibility="visible"></path>
          </g>
          <g class="highcharts-series-group" zIndex="3">
            <g class="highcharts-series" visibility="visible" zIndex="0.1" transform="translate(21,5) scale(1 1)" clip-path="url(#highcharts-11)">
              <path fill="rgba(30, 137, 111, 0.80)" d="M 0 125 L 70.85714273998488 115 L 141.71428547996976 115 L 212.57142821995464 115 L 283.4285709599395 110 L 354.28571369992443 120 L 425.1428564399093 120 L 495.9999991798942 120 L 495.9999991798942 200 L 0 200"
                  zIndex="0"></path>
            </g>
            <g class="highcharts-markers" visibility="visible" zIndex="0.1" transform="translate(21,5) scale(1 1)" clip-path="none"></g>
            <g class="highcharts-series" visibility="visible" zIndex="0.1" transform="translate(21,5) scale(1 1)" clip-path="url(#highcharts-11)">
              <path fill="transparent" d="M 0 55 L 70.85714273998488 35 L 141.71428547996976 35 L 212.57142821995464 35 L 283.4285709599395 20 L 354.28571369992443 20 L 425.1428564399093 20 L 495.9999991798942 10 L 495.9999991798942 200 L 0 200" zIndex="0"></path>
              <path fill="none" d="M 0 55 L 70.85714273998488 35 L 141.71428547996976 35 L 212.57142821995464 35 L 283.4285709599395 20 L 354.28571369992443 20 L 425.1428564399093 20 L 495.9999991798942 10" stroke="#666666" stroke-width="2" zIndex="1"
                  stroke-linejoin="round" stroke-linecap="round"></path>
            </g>
            <g class="highcharts-markers" visibility="visible" zIndex="0.1" transform="translate(21,5) scale(1 1)" clip-path="none"></g>
          </g>
          <g class="highcharts-legend" zIndex="7">
            <g zIndex="1">
              <g></g>
            </g>
          </g>
          <g class="highcharts-axis-labels highcharts-yaxis-labels" zIndex="7"></g>
          <g class="highcharts-axis-labels highcharts-xaxis-labels" zIndex="7"></g>
          <path fill="transparent" d="M 20.5 5 L 20.5 205 91.5 205 91.5 5" zIndex="7" class=""></path>
          <path fill="transparent" d="M 91.5 5 L 91.5 205 162.5 205 162.5 5" zIndex="7" class=""></path>
          <path fill="transparent" d="M 162.5 5 L 162.5 205 233.5 205 233.5 5" zIndex="7" class=""></path>
          <path fill="transparent" d="M 233.5 5 L 233.5 205 303.5 205 303.5 5" zIndex="7" class=""></path>
          <path fill="transparent" d="M 303.5 5 L 303.5 205 374.5 205 374.5 5" zIndex="7" class=""></path>
          <path fill="transparent" d="M 374.5 5 L 374.5 205 445.5 205 445.5 5" zIndex="7" class=""></path>
          <path fill="rgba(30, 90, 76, 0.48)" d="M 445.5 5 L 445.5 205 516.5 205 516.5 5" zIndex="7" class="selected-plot-band" transform="scale(1.001 1)"></path>
          <g class="highcharts-tooltip" zIndex="8" transform="translate(0,-9999)">
            <path fill="transparent" d="M 3 0 L 13 0 C 16 0 16 0 16 3 L 16 13 C 16 16 16 16 13 16 L 3 16 C 0 16 0 16 0 13 L 0 3 C 0 0 0 0 3 0" stroke-width="0.00001"></path>
          </g>
        </svg>
        <div class="highcharts-tooltip" style="position: absolute; left: 0px; top: -9999px;"><span zindex="1" style="font-size: 12px; color: rgb(51, 51, 51); margin-left: 0px; margin-top: 0px; left: 8px; top: 8px;"></span></div>
        <div class="highcharts-axis-labels highcharts-xaxis-labels" style="position: absolute; left: 0px; top: 0px;"><span opacity="1" style="color: rgb(96, 96, 96); cursor: default; font-size: 11px; margin-left: 0px; margin-top: 0px; left: 33.125px; top: 213px;"><div class="axis-label">
                    <div class="axis-label-day 8-19">
                        19
                    </div><div class="axis-label-month">
                            August
                        </div></div></span><span opacity="1" style="color: rgb(96, 96, 96); cursor: default; font-size: 11px; margin-left: 0px; margin-top: 0px; left: 107.982px; top: 213px;"><div class="axis-label">
                    <div class="axis-label-day 8-20">
                        20
                    </div></div></span><span opacity="1" style="color: rgb(96, 96, 96); cursor: default; font-size: 11px; margin-left: 0px; margin-top: 0px; left: 178.839px; top: 213px;"><div class="axis-label">
                    <div class="axis-label-day 8-21">
                        21
                    </div></div></span><span opacity="1" style="color: rgb(96, 96, 96); cursor: default; font-size: 11px; margin-left: 0px; margin-top: 0px; left: 249.696px; top: 213px;"><div class="axis-label">
                    <div class="axis-label-day 8-22">
                        22
                    </div></div></span><span opacity="1" style="color: rgb(96, 96, 96); cursor: default; font-size: 11px; margin-left: 0px; margin-top: 0px; left: 320.554px; top: 213px;"><div class="axis-label">
                    <div class="axis-label-day 8-23">
                        23
                    </div></div></span><span opacity="1" style="color: rgb(96, 96, 96); cursor: default; font-size: 11px; margin-left: 0px; margin-top: 0px; left: 391.411px; top: 213px;"><div class="axis-label">
                    <div class="axis-label-day 8-24">
                        24
                    </div></div></span><span opacity="1" style="color: rgb(96, 96, 96); cursor: default; font-size: 11px; margin-left: 0px; margin-top: 0px; left: 462.268px; top: 213px;"><div class="axis-label">
                    <div class="axis-label-day 8-25 selected">
                        25
                    </div></div></span><span style="color: rgb(96, 96, 96); cursor: default; font-size: 11px; margin-left: 0px; margin-top: 0px; left: -16.5px; top: -10011px;"><div class="axis-label">
                    <div class="axis-label-day 8-26">
                        26
                    </div></div></span></div>
        <div class="highcharts-axis-labels highcharts-yaxis-labels" style="position: absolute; left: 0px; top: 0px;"><span transform="translate(0,0)" style="color: rgb(96, 96, 96); cursor: default; font-size: 11px; margin-left: 0px; margin-top: 0px; left: -6px; top: -10011px;"><div class="axis-label">0</div></span><span transform="translate(0,0)" opacity="1"
              style="color: rgb(96, 96, 96); cursor: default; font-size: 11px; margin-left: 0px; margin-top: 0px; left: 12px; top: 172.5px;"><div class="axis-label">5</div></span><span transform="translate(0,0)" opacity="1" style="color: rgb(96, 96, 96); cursor: default; font-size: 11px; margin-left: 0px; margin-top: 0px; left: 5px; top: 147.5px;"><div class="axis-label">10</div></span>
          <span
              transform="translate(0,0)" opacity="1" style="color: rgb(96, 96, 96); cursor: default; font-size: 11px; margin-left: 0px; margin-top: 0px; left: 5px; top: 122.5px;">
            <div class="axis-label">15</div>
            </span><span transform="translate(0,0)" opacity="1" style="color: rgb(96, 96, 96); cursor: default; font-size: 11px; margin-left: 0px; margin-top: 0px; left: 5px; top: 97.5px;"><div class="axis-label">20</div></span><span transform="translate(0,0)"
                opacity="1" style="color: rgb(96, 96, 96); cursor: default; font-size: 11px; margin-left: 0px; margin-top: 0px; left: 5px; top: 72.5px;"><div class="axis-label">25</div></span><span transform="translate(0,0)" opacity="1" style="color: rgb(96, 96, 96); cursor: default; font-size: 11px; margin-left: 0px; margin-top: 0px; left: 5px; top: 47.5px;"><div class="axis-label">30</div></span>
            <span
                transform="translate(0,0)" opacity="1" style="color: rgb(96, 96, 96); cursor: default; font-size: 11px; margin-left: 0px; margin-top: 0px; left: 5px; top: 22.5px;">
              <div class="axis-label">35</div>
              </span><span transform="translate(0,0)" opacity="1" style="color: rgb(96, 96, 96); cursor: default; font-size: 11px; margin-left: 0px; margin-top: 0px; left: 5px; top: -2.5px;"><div class="axis-label">40</div></span></div>
      </div>
    </div>
    <div class="time-series-chart-filter-container">
      <div class="family-filter-container">
        <div class="show-label">
          Show
        </div>
        <ul class="filter-buttons-container">
          <li class="family-filter-button">
            <input type="radio" checked="checked" name="os-family-filter" class="family-filter" data-display-name="operating systems" id="combined-os-family-filter" data-param="combined" data-filter="3" data-families="[13, 14, 15, 16]">
            <label for="combined-os-family-filter">
              All
            </label>
          </li>


          <li class="family-filter-button">
            <input type="radio" name="os-family-filter" class="family-filter" data-display-name="Mac OS X" id="Mac OS X-os-family-filter" data-param="family" data-filter="13" data-families="[13]">
            <label for="Mac OS X-os-family-filter">
              Mac OS X
            </label>
          </li>


          <li class="family-filter-button">
            <input type="radio" name="os-family-filter" class="family-filter" data-display-name="Windows" id="Windows-os-family-filter" data-param="family" data-filter="14" data-families="[14]">
            <label for="Windows-os-family-filter">
              Windows
            </label>
          </li>


          <li class="family-filter-button">
            <input type="radio" name="os-family-filter" class="family-filter" data-display-name="iOS" id="iOS-os-family-filter" data-param="family" data-filter="15" data-families="[15]">
            <label for="iOS-os-family-filter">
              iOS
            </label>
          </li>


          <li class="family-filter-button">
            <input type="radio" name="os-family-filter" class="family-filter" data-display-name="Android" id="Android-os-family-filter" data-param="family" data-filter="16" data-families="[16]">
            <label for="Android-os-family-filter">
              Android
            </label>
          </li>

        </ul>
      </div>
      <div class="time-filter-container">
        <span class="time-button-group">
<button class="button active days-filter" data-days="7">
7 Days
</button>
<button class="button days-filter" data-days="30">
30 Days
</button>
</span>
      </div>
    </div>
  </div>
  <div class="overview-selection-info-box">
    <div class="info-box-date">Thu, Aug. 25</div>
    <div class="device-count">
      <span class="selection-amount">16</span> of
      <span class="total-amount">38</span> Devices
    </div>
    <div class="out-of-date-description">
      have out-of-date <span class="family-type-value">operating systems</span>
    </div>
    <div class="policy-link">
      <a href="/policies#global+platforms">Edit your policy</a>
      <p>to block these devices</p>
    </div>
    <div class="card-list-container new-release-info">
      <span class="card-heading" style="display: none;">
New Releases on This Day:
</span>
      <ul class="card-list release-list">
        <li class="card-list-item release-item no-releases">
          No new releases on this day.
        </li>
      </ul>
    </div>
    <div class="card-list-container ood-counts-container">
      <span class="card-heading">
Out-of-Date Devices by Operating System:
</span>
      <ul class="card-list individual-ood-counts">
        <li class="ood-count card-list-item"><a href="#">Mac OS X - 9</a></li>
        <li class="ood-count card-list-item"><a href="#">Windows - 3</a></li>
        <li class="ood-count card-list-item"><a href="#">iOS - 3</a></li>
        <li class="ood-count card-list-item"><a href="#">Android - 1</a></li>
      </ul>
    </div>
  </div>
</div>
'
---

* [HTML](0)
* [SCSS](1)

```html
<div class="insight-section-header os-header">
  <h2 class="stacked">
<span class="header-description">Devices with Out-of-Date</span>
<span class="header-type">operating systems</span>
</h2>
</div>
<div class="box insight-section insight-breakdown endpoint-section history-container" id="os-section">
  <div class="graph-legend-container">
    <span class="total-device-line"> </span>
    <span class="legend-description">
Total devices
</span>
    <span class="ood-device-legend-box os"> </span>
    <span class="legend-description">
Devices with out-of-date operating systems
</span>
  </div>
  <div class="graph-to-card-connector">
    <svg style="visibility: visible;">
      <circle class="left inner" cy="20" r="3.5" cx="481"></circle>
      <circle class="right inner" cy="20" r="3.5" cx="687"></circle>
      <polyline points="481,20 481,7 687,7 687,20"></polyline>
      <circle class="left outer" cy="20" r="8.5" cx="481"></circle>
      <circle class="right outer" cy="20" r="8.5" cx="687"></circle>
    </svg>
  </div>
  <div class="left-side-time-chart-container">
    <div id="os-data-chart" class="time-series-chart time-series-os-chart" data-highcharts-chart="3">
      <div class="highcharts-container" id="highcharts-10" style="position: relative; overflow: hidden; width: 522px; height: 250px; text-align: left; line-height: normal; z-index: 0; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="522" height="250">
          <desc>Created with Highcharts 4.0.1</desc>
          <defs>
            <clipPath id="highcharts-11">
              <rect x="0" y="0" width="496" height="200"></rect>
            </clipPath>
          </defs>
          <rect x="0" y="0" width="522" height="250" strokeWidth="0" fill="#FFFFFF" class=" highcharts-background"></rect>
          <g class="highcharts-grid" zIndex="1">
            <path fill="none" d="M 21 4.5 L 517 4.5" stroke="#CCCCCC" stroke-width="1" zIndex="1" opacity="1"></path>
            <path fill="none" d="M 21 30.5 L 517 30.5" stroke="#CCCCCC" stroke-width="1" zIndex="1" opacity="1"></path>
            <path fill="none" d="M 21 55.5 L 517 55.5" stroke="#CCCCCC" stroke-width="1" zIndex="1" opacity="1"></path>
            <path fill="none" d="M 21 80.5 L 517 80.5" stroke="#CCCCCC" stroke-width="1" zIndex="1" opacity="1"></path>
            <path fill="none" d="M 21 105.5 L 517 105.5" stroke="#CCCCCC" stroke-width="1" zIndex="1" opacity="1"></path>
            <path fill="none" d="M 21 130.5 L 517 130.5" stroke="#CCCCCC" stroke-width="1" zIndex="1" opacity="1"></path>
            <path fill="none" d="M 21 155.5 L 517 155.5" stroke="#CCCCCC" stroke-width="1" zIndex="1" opacity="1"></path>
            <path fill="none" d="M 21 180.5 L 517 180.5" stroke="#CCCCCC" stroke-width="1" zIndex="1" opacity="1"></path>
            <path fill="none" d="M 21 205.5 L 517 205.5" stroke="#CCCCCC" stroke-width="1" zIndex="1" opacity="1"></path>
          </g>
          <g class="highcharts-grid" zIndex="1">
            <path fill="none" d="M 91.5 5 L 91.5 205" stroke="#CCCCCC" stroke-width="1" zIndex="1" opacity="1"></path>
            <path fill="none" d="M 162.5 5 L 162.5 205" stroke="#CCCCCC" stroke-width="1" zIndex="1" opacity="1"></path>
            <path fill="none" d="M 233.5 5 L 233.5 205" stroke="#CCCCCC" stroke-width="1" zIndex="1" opacity="1"></path>
            <path fill="none" d="M 303.5 5 L 303.5 205" stroke="#CCCCCC" stroke-width="1" zIndex="1" opacity="1"></path>
            <path fill="none" d="M 374.5 5 L 374.5 205" stroke="#CCCCCC" stroke-width="1" zIndex="1" opacity="1"></path>
            <path fill="none" d="M 445.5 5 L 445.5 205" stroke="#CCCCCC" stroke-width="1" zIndex="1" opacity="1"></path>
            <path fill="none" d="M 517.5 5 L 517.5 205" stroke="#CCCCCC" stroke-width="1" zIndex="1" opacity="1"></path>
            <path fill="none" d="M 20.5 5 L 20.5 205" stroke="#CCCCCC" stroke-width="1" zIndex="1" opacity="1"></path>
          </g>
          <g class="highcharts-axis" zIndex="2"></g>
          <g class="highcharts-axis" zIndex="2">
            <path fill="none" d="M 21 205.5 L 517 205.5" stroke="#C0D0E0" stroke-width="1" zIndex="7" visibility="visible"></path>
          </g>
          <g class="highcharts-series-group" zIndex="3">
            <g class="highcharts-series" visibility="visible" zIndex="0.1" transform="translate(21,5) scale(1 1)" clip-path="url(#highcharts-11)">
              <path fill="rgba(30, 137, 111, 0.80)" d="M 0 125 L 70.85714273998488 115 L 141.71428547996976 115 L 212.57142821995464 115 L 283.4285709599395 110 L 354.28571369992443 120 L 425.1428564399093 120 L 495.9999991798942 120 L 495.9999991798942 200 L 0 200"
                  zIndex="0"></path>
            </g>
            <g class="highcharts-markers" visibility="visible" zIndex="0.1" transform="translate(21,5) scale(1 1)" clip-path="none"></g>
            <g class="highcharts-series" visibility="visible" zIndex="0.1" transform="translate(21,5) scale(1 1)" clip-path="url(#highcharts-11)">
              <path fill="transparent" d="M 0 55 L 70.85714273998488 35 L 141.71428547996976 35 L 212.57142821995464 35 L 283.4285709599395 20 L 354.28571369992443 20 L 425.1428564399093 20 L 495.9999991798942 10 L 495.9999991798942 200 L 0 200" zIndex="0"></path>
              <path fill="none" d="M 0 55 L 70.85714273998488 35 L 141.71428547996976 35 L 212.57142821995464 35 L 283.4285709599395 20 L 354.28571369992443 20 L 425.1428564399093 20 L 495.9999991798942 10" stroke="#666666" stroke-width="2" zIndex="1"
                  stroke-linejoin="round" stroke-linecap="round"></path>
            </g>
            <g class="highcharts-markers" visibility="visible" zIndex="0.1" transform="translate(21,5) scale(1 1)" clip-path="none"></g>
          </g>
          <g class="highcharts-legend" zIndex="7">
            <g zIndex="1">
              <g></g>
            </g>
          </g>
          <g class="highcharts-axis-labels highcharts-yaxis-labels" zIndex="7"></g>
          <g class="highcharts-axis-labels highcharts-xaxis-labels" zIndex="7"></g>
          <path fill="transparent" d="M 20.5 5 L 20.5 205 91.5 205 91.5 5" zIndex="7" class=""></path>
          <path fill="transparent" d="M 91.5 5 L 91.5 205 162.5 205 162.5 5" zIndex="7" class=""></path>
          <path fill="transparent" d="M 162.5 5 L 162.5 205 233.5 205 233.5 5" zIndex="7" class=""></path>
          <path fill="transparent" d="M 233.5 5 L 233.5 205 303.5 205 303.5 5" zIndex="7" class=""></path>
          <path fill="transparent" d="M 303.5 5 L 303.5 205 374.5 205 374.5 5" zIndex="7" class=""></path>
          <path fill="transparent" d="M 374.5 5 L 374.5 205 445.5 205 445.5 5" zIndex="7" class=""></path>
          <path fill="rgba(30, 90, 76, 0.48)" d="M 445.5 5 L 445.5 205 516.5 205 516.5 5" zIndex="7" class="selected-plot-band" transform="scale(1.001 1)"></path>
          <g class="highcharts-tooltip" zIndex="8" transform="translate(0,-9999)">
            <path fill="transparent" d="M 3 0 L 13 0 C 16 0 16 0 16 3 L 16 13 C 16 16 16 16 13 16 L 3 16 C 0 16 0 16 0 13 L 0 3 C 0 0 0 0 3 0" stroke-width="0.00001"></path>
          </g>
        </svg>
        <div class="highcharts-tooltip" style="position: absolute; left: 0px; top: -9999px;"><span zindex="1" style="font-size: 12px; color: rgb(51, 51, 51); margin-left: 0px; margin-top: 0px; left: 8px; top: 8px;"></span></div>
        <div class="highcharts-axis-labels highcharts-xaxis-labels" style="position: absolute; left: 0px; top: 0px;"><span opacity="1" style="color: rgb(96, 96, 96); cursor: default; font-size: 11px; margin-left: 0px; margin-top: 0px; left: 33.125px; top: 213px;"><div class="axis-label">
                    <div class="axis-label-day 8-19">
                        19
                    </div><div class="axis-label-month">
                            August
                        </div></div></span><span opacity="1" style="color: rgb(96, 96, 96); cursor: default; font-size: 11px; margin-left: 0px; margin-top: 0px; left: 107.982px; top: 213px;"><div class="axis-label">
                    <div class="axis-label-day 8-20">
                        20
                    </div></div></span><span opacity="1" style="color: rgb(96, 96, 96); cursor: default; font-size: 11px; margin-left: 0px; margin-top: 0px; left: 178.839px; top: 213px;"><div class="axis-label">
                    <div class="axis-label-day 8-21">
                        21
                    </div></div></span><span opacity="1" style="color: rgb(96, 96, 96); cursor: default; font-size: 11px; margin-left: 0px; margin-top: 0px; left: 249.696px; top: 213px;"><div class="axis-label">
                    <div class="axis-label-day 8-22">
                        22
                    </div></div></span><span opacity="1" style="color: rgb(96, 96, 96); cursor: default; font-size: 11px; margin-left: 0px; margin-top: 0px; left: 320.554px; top: 213px;"><div class="axis-label">
                    <div class="axis-label-day 8-23">
                        23
                    </div></div></span><span opacity="1" style="color: rgb(96, 96, 96); cursor: default; font-size: 11px; margin-left: 0px; margin-top: 0px; left: 391.411px; top: 213px;"><div class="axis-label">
                    <div class="axis-label-day 8-24">
                        24
                    </div></div></span><span opacity="1" style="color: rgb(96, 96, 96); cursor: default; font-size: 11px; margin-left: 0px; margin-top: 0px; left: 462.268px; top: 213px;"><div class="axis-label">
                    <div class="axis-label-day 8-25 selected">
                        25
                    </div></div></span><span style="color: rgb(96, 96, 96); cursor: default; font-size: 11px; margin-left: 0px; margin-top: 0px; left: -16.5px; top: -10011px;"><div class="axis-label">
                    <div class="axis-label-day 8-26">
                        26
                    </div></div></span></div>
        <div class="highcharts-axis-labels highcharts-yaxis-labels" style="position: absolute; left: 0px; top: 0px;"><span transform="translate(0,0)" style="color: rgb(96, 96, 96); cursor: default; font-size: 11px; margin-left: 0px; margin-top: 0px; left: -6px; top: -10011px;"><div class="axis-label">0</div></span><span transform="translate(0,0)" opacity="1"
              style="color: rgb(96, 96, 96); cursor: default; font-size: 11px; margin-left: 0px; margin-top: 0px; left: 12px; top: 172.5px;"><div class="axis-label">5</div></span><span transform="translate(0,0)" opacity="1" style="color: rgb(96, 96, 96); cursor: default; font-size: 11px; margin-left: 0px; margin-top: 0px; left: 5px; top: 147.5px;"><div class="axis-label">10</div></span>
          <span
              transform="translate(0,0)" opacity="1" style="color: rgb(96, 96, 96); cursor: default; font-size: 11px; margin-left: 0px; margin-top: 0px; left: 5px; top: 122.5px;">
            <div class="axis-label">15</div>
            </span><span transform="translate(0,0)" opacity="1" style="color: rgb(96, 96, 96); cursor: default; font-size: 11px; margin-left: 0px; margin-top: 0px; left: 5px; top: 97.5px;"><div class="axis-label">20</div></span><span transform="translate(0,0)"
                opacity="1" style="color: rgb(96, 96, 96); cursor: default; font-size: 11px; margin-left: 0px; margin-top: 0px; left: 5px; top: 72.5px;"><div class="axis-label">25</div></span><span transform="translate(0,0)" opacity="1" style="color: rgb(96, 96, 96); cursor: default; font-size: 11px; margin-left: 0px; margin-top: 0px; left: 5px; top: 47.5px;"><div class="axis-label">30</div></span>
            <span
                transform="translate(0,0)" opacity="1" style="color: rgb(96, 96, 96); cursor: default; font-size: 11px; margin-left: 0px; margin-top: 0px; left: 5px; top: 22.5px;">
              <div class="axis-label">35</div>
              </span><span transform="translate(0,0)" opacity="1" style="color: rgb(96, 96, 96); cursor: default; font-size: 11px; margin-left: 0px; margin-top: 0px; left: 5px; top: -2.5px;"><div class="axis-label">40</div></span></div>
      </div>
    </div>
    <div class="time-series-chart-filter-container">
      <div class="family-filter-container">
        <div class="show-label">
          Show
        </div>
        <ul class="filter-buttons-container">
          <li class="family-filter-button">
            <input type="radio" checked="checked" name="os-family-filter" class="family-filter" data-display-name="operating systems" id="combined-os-family-filter" data-param="combined" data-filter="3" data-families="[13, 14, 15, 16]">
            <label for="combined-os-family-filter">
              All
            </label>
          </li>


          <li class="family-filter-button">
            <input type="radio" name="os-family-filter" class="family-filter" data-display-name="Mac OS X" id="Mac OS X-os-family-filter" data-param="family" data-filter="13" data-families="[13]">
            <label for="Mac OS X-os-family-filter">
              Mac OS X
            </label>
          </li>


          <li class="family-filter-button">
            <input type="radio" name="os-family-filter" class="family-filter" data-display-name="Windows" id="Windows-os-family-filter" data-param="family" data-filter="14" data-families="[14]">
            <label for="Windows-os-family-filter">
              Windows
            </label>
          </li>


          <li class="family-filter-button">
            <input type="radio" name="os-family-filter" class="family-filter" data-display-name="iOS" id="iOS-os-family-filter" data-param="family" data-filter="15" data-families="[15]">
            <label for="iOS-os-family-filter">
              iOS
            </label>
          </li>


          <li class="family-filter-button">
            <input type="radio" name="os-family-filter" class="family-filter" data-display-name="Android" id="Android-os-family-filter" data-param="family" data-filter="16" data-families="[16]">
            <label for="Android-os-family-filter">
              Android
            </label>
          </li>

        </ul>
      </div>
      <div class="time-filter-container">
        <span class="time-button-group">
<button class="button active days-filter" data-days="7">
7 Days
</button>
<button class="button days-filter" data-days="30">
30 Days
</button>
</span>
      </div>
    </div>
  </div>
  <div class="overview-selection-info-box">
    <div class="info-box-date">Thu, Aug. 25</div>
    <div class="device-count">
      <span class="selection-amount">16</span> of
      <span class="total-amount">38</span> Devices
    </div>
    <div class="out-of-date-description">
      have out-of-date <span class="family-type-value">operating systems</span>
    </div>
    <div class="policy-link">
      <a href="/policies#global+platforms">Edit your policy</a>
      <p>to block these devices</p>
    </div>
    <div class="card-list-container new-release-info">
      <span class="card-heading" style="display: none;">
New Releases on This Day:
</span>
      <ul class="card-list release-list">
        <li class="card-list-item release-item no-releases">
          No new releases on this day.
        </li>
      </ul>
    </div>
    <div class="card-list-container ood-counts-container">
      <span class="card-heading">
Out-of-Date Devices by Operating System:
</span>
      <ul class="card-list individual-ood-counts">
        <li class="ood-count card-list-item"><a href="#">Mac OS X - 9</a></li>
        <li class="ood-count card-list-item"><a href="#">Windows - 3</a></li>
        <li class="ood-count card-list-item"><a href="#">iOS - 3</a></li>
        <li class="ood-count card-list-item"><a href="#">Android - 1</a></li>
      </ul>
    </div>
  </div>
</div>
```
```sass
.insight-section-header {
    background-color: $duo-blue;
    display: block;
    margin-bottom: -15px;
    border-radius: 3px 3px 0 0;

    h2 {
        font-size: 22px;
        padding: 10px 20px;
        color: white;

        &.stacked {
            padding: 13px 20px;
        }

        .header-description {
            display: block;
            font-size: 12px;
            color: rgba(255,255,255,.65);
            line-height: 18px;
        }
        .header-type {
            text-transform: capitalize;
            line-height: 24px;
            font-size: 20px;
            display: block;
        }
    }
}
.box {
  @include box;
}
.endpoint-section {
    padding: .75rem 1rem 1rem 1rem;
    margin-bottom: 3rem;

    .insight-versions {
        margin-bottom: 1em;
    }

    .title-cell {
        text-align: left;
    }

    table {
        margin-top: 10px;
    }

    th, td {
        text-align: center;
    }
}
.history-container {
    position: relative;

    .graph-to-card-connector {
        position: absolute;
        top: 46px;
        left: 1rem;
        z-index: 100;
        width: 100%;
        height: 30px;

        svg {
            width: 100%;
            height: 100%;
            visibility: hidden; // Start hidden, visibility will be toggled on

            circle.inner {
                fill: #6c7d88;
            }

            circle.outer {
                fill-opacity: 0.19;
                fill: rgb(9, 73, 94);
            }

            polyline {
                fill: none;
                stroke: rgb(108, 125, 136);
                stroke-width: 1;
            }
        }
    }
}
.insight-breakdown {
    & > * {
        display: inline-block;
        vertical-align: middle;
    }
}
.graph-legend-container {
    width: 100%;
    padding: 5px 25px;
    margin-bottom: 18px;

    .total-device-line {
        display: inline-block;
        width: 38px;
        height: 2px;
        display: inline-block;
        background-color: $grey-dark;
        vertical-align: middle;
    }

    .ood-device-legend-box {
        display: inline-block;
        height: 15px;
        width: 31px;
        vertical-align: middle;
        margin-left: 15px;

        &.plugin {
            background-color: rgba(109, 186, 213, 0.7);
        }

        &.browser {
            background-color: rgba(108, 125, 136, 0.7);
        }

        &.os {
            background-color: rgba(30, 137, 111, 0.80);
        }
    }

    .legend-description {
        font-size: 11px;
        margin-left: 5px;
        color: #333333;
    }
}
.left-side-time-chart-container {
    width: 63%;
}
.time-series-chart {
    position: relative;
    height: 250px;

    .highcharts-container {
        overflow: visible !important;
    }

    .selected-plot-band {
        &, &:hover {
            cursor: default;
        }
    }

    &.loading:before {
        @include animation(spin .8s linear infinite);
        @include keyframes("spin") {
          100% {
            transform: rotate(360deg);
          }
        }

        background-image: url('../../images/loading-indicator.svg');
        background-repeat: no-repeat;
        background-size: 100%;
        height: 50px;
        width: 50px;
        left: calc(50% - 25px);
        top: calc(50% - 45px);
        position: absolute;
        z-index: 10;
        content: '';
    }

    &:after {
        content: '';
        position: absolute;
        transition: background-color 0.5s;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }

    &.loading:after {
        background-color: rgba(255, 255, 255, 0.60);
        z-index: 9;
    }

    &:not(.loading):after {
        background-color: rgba(255, 255, 255, 0.0);
        visibility: hidden;
    }

    .highcharts-axis-labels {
        > span {
            position: absolute;

            .axis-label {
                font-size: 11px;
            }
        }
    }

    .highcharts-xaxis-labels {
        .axis-label-day {
            text-align: center;
            line-height: 18px;
            width: 3em;
        }
        .selected {
            color: white;
            border-radius: 6px;
        }
        .axis-label-month {
            left: -5px;
            position: relative;
            font-size: 10px;
            font-weight: bold;
            text-transform: uppercase;
        }
    }

    .highcharts-tooltip {
        border: 2px solid black;
        border-radius: 3px;
        background-color: $white;
        z-index: 10000;
        padding: 6px 14px;

        & > span {
            display: inline-block;
        }

        .tooltip-date, .tooltip-value, .tooltip-total {
            font-family: $base-font-family;
            width: 100%;
            text-align: left;
            display: block;
            white-space: nowrap;
            color: $grey-darker;
        }

        .tooltip-date {
            color: $grey-dark;
            font-size: 11px;
            margin-bottom: 3px;
        }

        .tooltip-value, .tooltip-total {
            font-size: 12px;
            .count {
                font-weight: bold;
            }
        }

        .tooltip-total {
            .count {
                color: $grey-dark;
            }
        }

        .tooltip-value:before, .tooltip-total:before {
            border-radius: 50%;
            content: '';
            display: inline-block;
            height: 7px;
            margin-right: 3px;
            width: 7px;
        }

        .tooltip-total:before {
            background-color: $grey-dark;
        }
    }

    path:hover {
        cursor: pointer;
    }
}
.overview-selection-info-box {
    width: 33%;
    vertical-align: top;
    text-align: center;
    margin-top: 5px;
    margin-left: 25px;
    border: 1px solid $base-border-color;
    padding: 20px 15px;
    position: relative;

    .card-heading {
        font-size: 11px;
        color: $grey-dark;
        font-family: $heading-font-family;
    }

    .device-count {
        font-size: 20px;
        .selection-amount {
            font-weight: bold;
        }
    }

    .out-of-date-description {
        font-style: italic;
        font-size: 12px;
        color: $grey-dark;
    }

    .new-release-info {
        padding: 10px 0px;
    }

    .card-list-container {
        text-align: left;

        .card-list {
            margin: 0px;
            list-style-type: none;
            padding: 0px;

            .card-list-item {
                font-family: $base-font-family;
                font-size: 14px;
                font-weight: 500;
                line-height: 22px;
                margin: 0px;

                &.no-releases {
                    font-weight: normal;
                }
            }
        }
    }

    .info-box-date {
        position: absolute;
        top: -32px;
        right: 50%;
        font-size: 11px;
        color: $duo-blue;
        font-family: $base-font-family;
        font-weight: 500;
    }
}
.policy-link {
    margin-top: 5px;
    font-size: 12px;
    line-height: 17px;

    p {
        color: #4A4A4A;
    }
}
```
