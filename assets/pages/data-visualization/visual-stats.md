---
title: Visual Statistics
template: child-1col-coded
active_page: 'visual-stats'
snippet_title: Visual Statistics
notes: 'Display in a visual way statistical data (a breakdown of laptops and desktops vs mobile devices).'
example: '
<div class="device-type-container">
  <!-- This section has the number of desktop devices -->
  <div class="device-type-section">
    <div class="icon-percentage-container">
      <i class="icon-monitor"></i> 82%
    </div>
    <div>
      <span class="description-text">
of your devices are
</span>
      <span class="device-type-name">
Laptops &amp; Desktops
</span>
    </div>
  </div>
  <!-- This section has the number of Mobile devices -->
  <div class="device-type-section">
    <div class="icon-percentage-container">
      <i class="icon-phone-and-tablet"></i> 18%
    </div>
    <div>
      <div class="description-text">
        of your devices are
      </div>
      <div class="device-type-name">
        Mobile Devices
      </div>
    </div>
  </div>
</div>
'
---

* [HTML](0)
* [SCSS](1)

```html
<div class="device-type-container">
  <!-- This section has the number of desktop devices -->
  <div class="device-type-section">
    <div class="icon-percentage-container">
      <i class="icon-monitor"></i> 82%
    </div>
    <div>
      <span class="description-text">
of your devices are
</span>
      <span class="device-type-name">
Laptops &amp; Desktops
</span>
    </div>
  </div>
  <!-- This section has the number of Mobile devices -->
  <div class="device-type-section">
    <div class="icon-percentage-container">
      <i class="icon-phone-and-tablet"></i> 18%
    </div>
    <div>
      <div class="description-text">
        of your devices are
      </div>
      <div class="device-type-name">
        Mobile Devices
      </div>
    </div>
  </div>
</div>

```
```sass
.device-type-container {
    width: 100%;
    margin-top: 1rem;

    .device-type-section {
        display: inline-block;
        width: 45%;
        text-align: center;
        border: 2px solid $base-border-color;
        border-radius: 5px;
        padding: 25px 5px;
        color: $grey-darker;
        font-size: 12px;
        font-style: italic;

        .icon-percentage-container {
            font-size: 24px;
            vertical-align: middle;
            font-style: normal;
            padding: 0px 20px;

            i {
                padding: 2px 5px;
                font-size: 40px;
                vertical-align: middle;
                color: #888888;
            }
        }

        .device-type-name {
            display: block;
            font-style: normal;
            color: $grey-darker;
            font-size: 18px;
        }

        &:first-of-type {
            margin-right: 35px;
        }

        &:last-of-type {
            margin-left: 35px;
        }

        > div {
            display: inline-block;
            vertical-align: middle;
        }
    }
}

```
