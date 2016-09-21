---
title: Tables
template: child-2col-coded
active_page: 'filter'
snippet_title: Table Filter
notes: 'The filter is used in coordination with a data table to apply mutliple filters to the data set. This is also referred to as faceted search.'
example: '
<div id="endpoints-filter" class="filter-container">
  <h4>Filter</h4>
  <fieldset>
    <legend>OS</legend>
    <section class="main-section">
      <label class="clickable padded test">
        <input class="option-box main-section-box collapse-control" type="checkbox" name="os" value="2">
        <span>iOS</span>
      </label>
      <div class="sub-sections collapsable hidden">
        <section class="sub-section">
          <span class="help">Filter by version</span>
          <ul class="filter-list">
            <li>
              <label class="clickable">
                <input class="option-box sub-section-box" type="checkbox" name="os-2" value="6.0">
                <span>6.0</span>
              </label>
            </li>
          </ul>
        </section>
      </div>
    </section>
    <section class="main-section">
      <label class="clickable padded test">
        <input class="option-box main-section-box collapse-control" type="checkbox" name="os" value="6">
        <span>Mac OS X</span>
      </label>
      <div class="sub-sections collapsable hidden">
        <section class="sub-section">
          <span class="help">Filter by version</span>
          <ul class="filter-list">
            <li>
              <label class="clickable">
                <input class="option-box sub-section-box" type="checkbox" name="os-6" value="10.11">
                <span>10.11</span>
              </label>
            </li>
          </ul>
        </section>
      </div>
    </section>
    <section class="main-section">
      <label class="clickable padded test">
        <input class="option-box main-section-box collapse-control" type="checkbox" name="os" value="9">
        <span>Windows</span>
      </label>
      <div class="sub-sections collapsable hidden">
        <section class="sub-section">
          <span class="help">Filter by version</span>
          <ul class="filter-list">
            <li>
              <label class="clickable">
                <input class="option-box sub-section-box" type="checkbox" name="os-9" value="8.1">
                <span>8.1</span>
              </label>
            </li>
            <li>
              <label class="clickable">
                <input class="option-box sub-section-box" type="checkbox" name="os-9" value="8">
                <span>8</span>
              </label>
            </li>
            <li>
              <label class="clickable">
                <input class="option-box sub-section-box" type="checkbox" name="os-9" value="7">
                <span>7</span>
              </label>
            </li>
            <li>
              <label class="clickable">
                <input class="option-box sub-section-box" type="checkbox" name="os-9" value="XP">
                <span>XP</span>
              </label>
            </li>

          </ul>
        </section>
      </div>
    </section>
    <section class="main-section">
      <label class="clickable padded test">
        <input class="option-box main-section-box collapse-control" type="checkbox" name="os" value="13">
        <span>Linux</span>
      </label>
    </section>
    <section class="separated">
      <h5 class="out-of-date-header">Filter OSs by age</h5>
      <section class="main-section">
        <label class="clickable padded">
          <input class="option-box main-section-box" type="checkbox" name="os-status" value="up-to-date">
          <span>Up to Date</span>
        </label>
      </section>
      <section class="main-section">
        <label class="clickable padded">
          <input class="option-box main-section-box" type="checkbox" name="os-status" value="unknown">
          <span>Unknown</span>
        </label>
      </section>
      <section class="main-section">
        <label class="clickable padded">
          <input class="option-box main-section-box" type="checkbox" name="os-status" value="out-of-date">
          <span>Out of Date</span>
        </label>
      </section>
    </section>
  </fieldset>
  <fieldset>
    <legend>Browsers</legend>
    <section class="main-section">
      <label class="clickable padded">
        <input class="option-box main-section-box collapse-control" type="checkbox" name="browser" value="2">
        <span>Safari</span>
      </label>
      <div class="sub-sections collapsable hidden">
        <section class="sub-section">
          <span class="help">Filter by version</span>
          <ul class="filter-list">
            <li>
              <label class="clickable">
                <input class="option-box sub-section-box" type="checkbox" name="browser-2" value="9.1">
                <span>9.1</span>
              </label>
            </li>
          </ul>
        </section>
      </div>
    </section>
    <section class="main-section">
      <label class="clickable padded">
        <input class="option-box main-section-box collapse-control" type="checkbox" name="browser" value="3">
        <span>Chrome</span>
      </label>
      <div class="sub-sections collapsable hidden">
        <section class="sub-section">
          <span class="help">Filter by version</span>
          <ul class="filter-list">
            <li>
              <label class="clickable">
                <input class="option-box sub-section-box" type="checkbox" name="browser-3" value="52.0">
                <span>52.0</span>
              </label>
            </li>
            <li>
              <label class="clickable">
                <input class="option-box sub-section-box" type="checkbox" name="browser-3" value="51.0">
                <span>51.0</span>
              </label>
            </li>
          </ul>
        </section>
      </div>
    </section>
    <section class="main-section">
      <label class="clickable padded">
        <input class="option-box main-section-box collapse-control" type="checkbox" name="browser" value="4">
        <span>Firefox</span>
      </label>
      <div class="sub-sections collapsable hidden">
        <section class="sub-section">
          <span class="help">Filter by version</span>
          <ul class="filter-list">
            <li>
              <label class="clickable">
                <input class="option-box sub-section-box" type="checkbox" name="browser-4" value="47.0">
                <span>47.0</span>
              </label>
            </li>
            <li>
              <label class="clickable">
                <input class="option-box sub-section-box" type="checkbox" name="browser-4" value="39.0">
                <span>39.0</span>
              </label>
            </li>
          </ul>
        </section>
      </div>
    </section>
    <section class="main-section">
      <label class="clickable padded">
        <input class="option-box main-section-box collapse-control" type="checkbox" name="browser" value="5">
        <span>Internet Explorer</span>
      </label>
      <div class="sub-sections collapsable hidden">
        <section class="sub-section">
          <span class="help">Filter by version</span>
          <ul class="filter-list">
            <li>
              <label class="clickable">
                <input class="option-box sub-section-box" type="checkbox" name="browser-5" value="11.0">
                <span>11.0</span>
              </label>
            </li>
            <li>
              <label class="clickable">
                <input class="option-box sub-section-box" type="checkbox" name="browser-5" value="10.0">
                <span>10.0</span>
              </label>
            </li>
            <li>
              <label class="clickable">
                <input class="option-box sub-section-box" type="checkbox" name="browser-5" value="6.0">
                <span>6.0</span>
              </label>
            </li>
          </ul>
        </section>
      </div>
    </section>
    <section class="main-section">
      <label class="clickable padded">
        <input class="option-box main-section-box collapse-control" type="checkbox" name="browser" value="7">
        <span>Safari Mobile</span>
      </label>
      <div class="sub-sections collapsable hidden">
        <section class="sub-section">
          <span class="help">Filter by version</span>
          <ul class="filter-list">
            <li>
              <label class="clickable">
                <input class="option-box sub-section-box" type="checkbox" name="browser-7" value="6.0">
                <span>6.0</span>
              </label>
            </li>
          </ul>
        </section>
      </div>
    </section>
    <section class="separated">
      <h5 class="out-of-date-header">Filter browsers by age</h5>
      <section class="main-section">
        <label class="clickable padded">
          <input class="option-box main-section-box" type="checkbox" name="browser-status" value="up-to-date">
          <span>Up to Date</span>
        </label>
      </section>
      <section class="main-section">
        <label class="clickable padded">
          <input class="option-box main-section-box" type="checkbox" name="browser-status" value="unknown">
          <span>Unknown</span>
        </label>
      </section>
    </section>
    <section class="main-section">
      <label class="clickable padded">
        <input class="option-box main-section-box collapse-control" type="checkbox" name="browser-status" value="out-of-date">
        <span>Out of date</span>
      </label>
      <div class="sub-sections collapsable hidden">
        <section class="sub-section">
          <label class="clickable padded">
            <input class="option-box sub-section-box" type="checkbox" name="browser-age" value="0">
            <span>&lt; 2 weeks</span>
          </label>
          <label class="clickable padded">
            <input class="option-box sub-section-box" type="checkbox" name="browser-age" value="1">
            <span>2 weeks - 1 month</span>
          </label>
          <label class="clickable padded">
            <input class="option-box sub-section-box" type="checkbox" name="browser-age" value="2">
            <span>1 - 3 months</span>
          </label>
          <label class="clickable padded">
            <input class="option-box sub-section-box" type="checkbox" name="browser-age" value="3">
            <span>3 - 6 months</span>
          </label>
          <label class="clickable padded">
            <input class="option-box sub-section-box" type="checkbox" name="browser-age" value="4">
            <span>6 months - 1 year</span>
          </label>
          <label class="clickable padded">
            <input class="option-box sub-section-box" type="checkbox" name="browser-age" value="5">
            <span>&gt; 1 year</span>
          </label>
          <label class="clickable padded">
            <input class="option-box sub-section-box" type="checkbox" name="browser-age" value="6">
            <span>Unknown</span>
          </label>
        </section>
      </div>
    </section>
  </fieldset>
  <fieldset>
    <legend>Plugins</legend>
    <section class="main-section">
      <label class="clickable padded">
        <input class="option-box main-section-box" type="checkbox" name="plugins" value="java">
        <span>Java</span>
      </label>
    </section>
    <section class="main-section">
      <label class="clickable padded">
        <input class="option-box main-section-box" type="checkbox" name="plugins" value="flash">
        <span>Flash</span>
      </label>
    </section>
    <section class="separated">
      <h5 class="out-of-date-header">Filter plugins by age</h5>
      <section class="main-section">
        <label class="clickable padded">
          <input class="option-box main-section-box" type="checkbox" name="plugins-status" value="up-to-date">
          <span>Up to Date</span>
        </label>
      </section>
      <section class="main-section">
        <label class="clickable padded">
          <input class="option-box main-section-box" type="checkbox" name="plugins-status" value="disabled">
          <span>Disabled</span>
        </label>
      </section>
      <section class="main-section">
        <label class="clickable padded">
          <input class="option-box main-section-box" type="checkbox" name="plugins-status" value="unknown">
          <span>Unknown</span>
        </label>
      </section>
    </section>
    <section class="main-section">
      <label class="clickable padded">
        <input class="option-box main-section-box collapse-control" type="checkbox" name="plugins-status" value="out-of-date">
        <span>Out of date</span>
      </label>
      <div class="sub-sections collapsable hidden">
        <section class="sub-section">
          <label class="clickable padded">
            <input class="option-box sub-section-box" type="checkbox" name="plugins-age" value="0">
            <span>&lt; 2 weeks</span>
          </label>
          <label class="clickable padded">
            <input class="option-box sub-section-box" type="checkbox" name="plugins-age" value="1">
            <span>2 weeks - 1 month</span>
          </label>
          <label class="clickable padded">
            <input class="option-box sub-section-box" type="checkbox" name="plugins-age" value="2">
            <span>1 - 3 months</span>
          </label>
          <label class="clickable padded">
            <input class="option-box sub-section-box" type="checkbox" name="plugins-age" value="3">
            <span>3 - 6 months</span>
          </label>
          <label class="clickable padded">
            <input class="option-box sub-section-box" type="checkbox" name="plugins-age" value="4">
            <span>6 months - 1 year</span>
          </label>
          <label class="clickable padded">
            <input class="option-box sub-section-box" type="checkbox" name="plugins-age" value="5">
            <span>&gt; 1 year</span>
          </label>
          <label class="clickable padded">
            <input class="option-box sub-section-box" type="checkbox" name="plugins-age" value="6">
            <span>Unknown</span>
          </label>
        </section>
      </div>
    </section>
  </fieldset>
</div>'
---

* [HTML](0)
* [SCSS](1)

```html
<div id="endpoints-filter" class="filter-container">
  <h4>Filter</h4>
  <fieldset>
    <legend>OS</legend>
    <section class="main-section">
      <label class="clickable padded test">
        <input class="option-box main-section-box collapse-control" type="checkbox" name="os" value="2">
        <span>iOS</span>
      </label>
      <div class="sub-sections collapsable hidden">
        <section class="sub-section">
          <span class="help">Filter by version</span>
          <ul class="filter-list">
            <li>
              <label class="clickable">
                <input class="option-box sub-section-box" type="checkbox" name="os-2" value="6.0">
                <span>6.0</span>
              </label>
            </li>
          </ul>
        </section>
      </div>
    </section>
    <section class="main-section">
      <label class="clickable padded test">
        <input class="option-box main-section-box collapse-control" type="checkbox" name="os" value="6">
        <span>Mac OS X</span>
      </label>
      <div class="sub-sections collapsable hidden">
        <section class="sub-section">
          <span class="help">Filter by version</span>
          <ul class="filter-list">
            <li>
              <label class="clickable">
                <input class="option-box sub-section-box" type="checkbox" name="os-6" value="10.11">
                <span>10.11</span>
              </label>
            </li>
          </ul>
        </section>
      </div>
    </section>
    <section class="main-section">
      <label class="clickable padded test">
        <input class="option-box main-section-box collapse-control" type="checkbox" name="os" value="9">
        <span>Windows</span>
      </label>
      <div class="sub-sections collapsable hidden">
        <section class="sub-section">
          <span class="help">Filter by version</span>
          <ul class="filter-list">
            <li>
              <label class="clickable">
                <input class="option-box sub-section-box" type="checkbox" name="os-9" value="8.1">
                <span>8.1</span>
              </label>
            </li>
            <li>
              <label class="clickable">
                <input class="option-box sub-section-box" type="checkbox" name="os-9" value="8">
                <span>8</span>
              </label>
            </li>
            <li>
              <label class="clickable">
                <input class="option-box sub-section-box" type="checkbox" name="os-9" value="7">
                <span>7</span>
              </label>
            </li>
            <li>
              <label class="clickable">
                <input class="option-box sub-section-box" type="checkbox" name="os-9" value="XP">
                <span>XP</span>
              </label>
            </li>

          </ul>
        </section>
      </div>
    </section>
    <section class="main-section">
      <label class="clickable padded test">
        <input class="option-box main-section-box collapse-control" type="checkbox" name="os" value="13">
        <span>Linux</span>
      </label>
    </section>
    <section class="separated">
      <h5 class="out-of-date-header">Filter OSs by age</h5>
      <section class="main-section">
        <label class="clickable padded">
          <input class="option-box main-section-box" type="checkbox" name="os-status" value="up-to-date">
          <span>Up to Date</span>
        </label>
      </section>
      <section class="main-section">
        <label class="clickable padded">
          <input class="option-box main-section-box" type="checkbox" name="os-status" value="unknown">
          <span>Unknown</span>
        </label>
      </section>
      <section class="main-section">
        <label class="clickable padded">
          <input class="option-box main-section-box" type="checkbox" name="os-status" value="out-of-date">
          <span>Out of Date</span>
        </label>
      </section>
    </section>
  </fieldset>
  <fieldset>
    <legend>Browsers</legend>
    <section class="main-section">
      <label class="clickable padded">
        <input class="option-box main-section-box collapse-control" type="checkbox" name="browser" value="2">
        <span>Safari</span>
      </label>
      <div class="sub-sections collapsable hidden">
        <section class="sub-section">
          <span class="help">Filter by version</span>
          <ul class="filter-list">
            <li>
              <label class="clickable">
                <input class="option-box sub-section-box" type="checkbox" name="browser-2" value="9.1">
                <span>9.1</span>
              </label>
            </li>
          </ul>
        </section>
      </div>
    </section>
    <section class="main-section">
      <label class="clickable padded">
        <input class="option-box main-section-box collapse-control" type="checkbox" name="browser" value="3">
        <span>Chrome</span>
      </label>
      <div class="sub-sections collapsable hidden">
        <section class="sub-section">
          <span class="help">Filter by version</span>
          <ul class="filter-list">
            <li>
              <label class="clickable">
                <input class="option-box sub-section-box" type="checkbox" name="browser-3" value="52.0">
                <span>52.0</span>
              </label>
            </li>
            <li>
              <label class="clickable">
                <input class="option-box sub-section-box" type="checkbox" name="browser-3" value="51.0">
                <span>51.0</span>
              </label>
            </li>
          </ul>
        </section>
      </div>
    </section>
    <section class="main-section">
      <label class="clickable padded">
        <input class="option-box main-section-box collapse-control" type="checkbox" name="browser" value="4">
        <span>Firefox</span>
      </label>
      <div class="sub-sections collapsable hidden">
        <section class="sub-section">
          <span class="help">Filter by version</span>
          <ul class="filter-list">
            <li>
              <label class="clickable">
                <input class="option-box sub-section-box" type="checkbox" name="browser-4" value="47.0">
                <span>47.0</span>
              </label>
            </li>
            <li>
              <label class="clickable">
                <input class="option-box sub-section-box" type="checkbox" name="browser-4" value="39.0">
                <span>39.0</span>
              </label>
            </li>
          </ul>
        </section>
      </div>
    </section>
    <section class="main-section">
      <label class="clickable padded">
        <input class="option-box main-section-box collapse-control" type="checkbox" name="browser" value="5">
        <span>Internet Explorer</span>
      </label>
      <div class="sub-sections collapsable hidden">
        <section class="sub-section">
          <span class="help">Filter by version</span>
          <ul class="filter-list">
            <li>
              <label class="clickable">
                <input class="option-box sub-section-box" type="checkbox" name="browser-5" value="11.0">
                <span>11.0</span>
              </label>
            </li>
            <li>
              <label class="clickable">
                <input class="option-box sub-section-box" type="checkbox" name="browser-5" value="10.0">
                <span>10.0</span>
              </label>
            </li>
            <li>
              <label class="clickable">
                <input class="option-box sub-section-box" type="checkbox" name="browser-5" value="6.0">
                <span>6.0</span>
              </label>
            </li>
          </ul>
        </section>
      </div>
    </section>
    <section class="main-section">
      <label class="clickable padded">
        <input class="option-box main-section-box collapse-control" type="checkbox" name="browser" value="7">
        <span>Safari Mobile</span>
      </label>
      <div class="sub-sections collapsable hidden">
        <section class="sub-section">
          <span class="help">Filter by version</span>
          <ul class="filter-list">
            <li>
              <label class="clickable">
                <input class="option-box sub-section-box" type="checkbox" name="browser-7" value="6.0">
                <span>6.0</span>
              </label>
            </li>
          </ul>
        </section>
      </div>
    </section>
    <section class="separated">
      <h5 class="out-of-date-header">Filter browsers by age</h5>
      <section class="main-section">
        <label class="clickable padded">
          <input class="option-box main-section-box" type="checkbox" name="browser-status" value="up-to-date">
          <span>Up to Date</span>
        </label>
      </section>
      <section class="main-section">
        <label class="clickable padded">
          <input class="option-box main-section-box" type="checkbox" name="browser-status" value="unknown">
          <span>Unknown</span>
        </label>
      </section>
    </section>
    <section class="main-section">
      <label class="clickable padded">
        <input class="option-box main-section-box collapse-control" type="checkbox" name="browser-status" value="out-of-date">
        <span>Out of date</span>
      </label>
      <div class="sub-sections collapsable hidden">
        <section class="sub-section">
          <label class="clickable padded">
            <input class="option-box sub-section-box" type="checkbox" name="browser-age" value="0">
            <span>&lt; 2 weeks</span>
          </label>
          <label class="clickable padded">
            <input class="option-box sub-section-box" type="checkbox" name="browser-age" value="1">
            <span>2 weeks - 1 month</span>
          </label>
          <label class="clickable padded">
            <input class="option-box sub-section-box" type="checkbox" name="browser-age" value="2">
            <span>1 - 3 months</span>
          </label>
          <label class="clickable padded">
            <input class="option-box sub-section-box" type="checkbox" name="browser-age" value="3">
            <span>3 - 6 months</span>
          </label>
          <label class="clickable padded">
            <input class="option-box sub-section-box" type="checkbox" name="browser-age" value="4">
            <span>6 months - 1 year</span>
          </label>
          <label class="clickable padded">
            <input class="option-box sub-section-box" type="checkbox" name="browser-age" value="5">
            <span>&gt; 1 year</span>
          </label>
          <label class="clickable padded">
            <input class="option-box sub-section-box" type="checkbox" name="browser-age" value="6">
            <span>Unknown</span>
          </label>
        </section>
      </div>
    </section>
  </fieldset>
  <fieldset>
    <legend>Plugins</legend>
    <section class="main-section">
      <label class="clickable padded">
        <input class="option-box main-section-box" type="checkbox" name="plugins" value="java">
        <span>Java</span>
      </label>
    </section>
    <section class="main-section">
      <label class="clickable padded">
        <input class="option-box main-section-box" type="checkbox" name="plugins" value="flash">
        <span>Flash</span>
      </label>
    </section>
    <section class="separated">
      <h5 class="out-of-date-header">Filter plugins by age</h5>
      <section class="main-section">
        <label class="clickable padded">
          <input class="option-box main-section-box" type="checkbox" name="plugins-status" value="up-to-date">
          <span>Up to Date</span>
        </label>
      </section>
      <section class="main-section">
        <label class="clickable padded">
          <input class="option-box main-section-box" type="checkbox" name="plugins-status" value="disabled">
          <span>Disabled</span>
        </label>
      </section>
      <section class="main-section">
        <label class="clickable padded">
          <input class="option-box main-section-box" type="checkbox" name="plugins-status" value="unknown">
          <span>Unknown</span>
        </label>
      </section>
    </section>
    <section class="main-section">
      <label class="clickable padded">
        <input class="option-box main-section-box collapse-control" type="checkbox" name="plugins-status" value="out-of-date">
        <span>Out of date</span>
      </label>
      <div class="sub-sections collapsable hidden">
        <section class="sub-section">
          <label class="clickable padded">
            <input class="option-box sub-section-box" type="checkbox" name="plugins-age" value="0">
            <span>&lt; 2 weeks</span>
          </label>
          <label class="clickable padded">
            <input class="option-box sub-section-box" type="checkbox" name="plugins-age" value="1">
            <span>2 weeks - 1 month</span>
          </label>
          <label class="clickable padded">
            <input class="option-box sub-section-box" type="checkbox" name="plugins-age" value="2">
            <span>1 - 3 months</span>
          </label>
          <label class="clickable padded">
            <input class="option-box sub-section-box" type="checkbox" name="plugins-age" value="3">
            <span>3 - 6 months</span>
          </label>
          <label class="clickable padded">
            <input class="option-box sub-section-box" type="checkbox" name="plugins-age" value="4">
            <span>6 months - 1 year</span>
          </label>
          <label class="clickable padded">
            <input class="option-box sub-section-box" type="checkbox" name="plugins-age" value="5">
            <span>&gt; 1 year</span>
          </label>
          <label class="clickable padded">
            <input class="option-box sub-section-box" type="checkbox" name="plugins-age" value="6">
            <span>Unknown</span>
          </label>
        </section>
      </div>
    </section>
  </fieldset>
</div>
```
```sass
@import "../ui/faceted-search";
#endpoints-filter {
    .main-section {
        & > label {
        font-weight: normal;
        }
        .out-of-date-header {
            font-size: .95em;
            & + label {
                margin-top: 0;
            }
        }
    }
}

```
