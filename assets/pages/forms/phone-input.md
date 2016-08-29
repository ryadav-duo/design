---
title: Forms
template: child-2col-coded
active_page: 'phone-input'
snippet_title: Phone Input with International Dropdown
notes: 'Illustrates phone entry field that includes country code, based on flag selected in drop-down.'
example: '
<div class="field">
  <div class="intl-tel-input">
    <div class="flag-container">
      <div tabindex="0" class="selected-flag" title="United States: +1">
        <div class="iti-flag us"></div>
        <div class="arrow"></div>
      </div>
      <ul class="country-list hide">
        <li class="country preferred active" data-dial-code="1" data-country-code="us">
          <div class="flag">
            <div class="iti-flag us"></div>
          </div><span class="country-name">United States</span><span class="dial-code">+1</span></li>
        <li class="country preferred" data-dial-code="44" data-country-code="gb">
          <div class="flag">
            <div class="iti-flag gb"></div>
          </div><span class="country-name">United Kingdom</span><span class="dial-code">+44</span></li>
        <li class="divider"></li>
        <li class="country" data-dial-code="93" data-country-code="af">
          <div class="flag">
            <div class="iti-flag af"></div>
          </div><span class="dial-code">+93</span></li>
        <li class="country" data-dial-code="355" data-country-code="al">
          <div class="flag">
            <div class="iti-flag al"></div>
          </div><span class="country-name">Albania </span><span class="dial-code">+355</span></li>
        <li class="country" data-dial-code="213" data-country-code="dz">
          <div class="flag">
            <div class="iti-flag dz"></div>
          </div><span class="dial-code">+213</span></li>
        <li class="country" data-dial-code="1684" data-country-code="as">
          <div class="flag">
            <div class="iti-flag as"></div>
          </div><span class="country-name">American Samoa</span><span class="dial-code">+1684</span></li>
        <li class="country" data-dial-code="376" data-country-code="ad">
          <div class="flag">
            <div class="iti-flag ad"></div>
          </div><span class="country-name">Andorra</span><span class="dial-code">+376</span></li>
        <li class="country" data-dial-code="244" data-country-code="ao">
          <div class="flag">
            <div class="iti-flag ao"></div>
          </div><span class="country-name">Angola</span><span class="dial-code">+244</span></li>
        <li class="country" data-dial-code="1264" data-country-code="ai">
          <div class="flag">
            <div class="iti-flag ai"></div>
          </div><span class="country-name">Anguilla</span><span class="dial-code">+1264</span></li>
        <li class="country" data-dial-code="1268" data-country-code="ag">
          <div class="flag">
            <div class="iti-flag ag"></div>
          </div><span class="country-name">Antigua and Barbuda</span><span class="dial-code">+1268</span></li>
        <li class="country" data-dial-code="54" data-country-code="ar">
          <div class="flag">
            <div class="iti-flag ar"></div>
          </div><span class="country-name">Argentina</span><span class="dial-code">+54</span></li>
        <li class="country" data-dial-code="374" data-country-code="am">
          <div class="flag">
            <div class="iti-flag am"></div>
          </div><span class="country-name">Armenia </span><span class="dial-code">+374</span></li>
        <li class="country" data-dial-code="297" data-country-code="aw">
          <div class="flag">
            <div class="iti-flag aw"></div>
          </div><span class="country-name">Aruba</span><span class="dial-code">+297</span></li>
        <li class="country" data-dial-code="61" data-country-code="au">
          <div class="flag">
            <div class="iti-flag au"></div>
          </div><span class="country-name">Australia</span><span class="dial-code">+61</span></li>
        <li class="country" data-dial-code="43" data-country-code="at">
          <div class="flag">
            <div class="iti-flag at"></div>
          </div><span class="country-name">Austria </span><span class="dial-code">+43</span></li>
        <li class="country" data-dial-code="994" data-country-code="az">
          <div class="flag">
            <div class="iti-flag az"></div>
          </div><span class="country-name">Azerbaijan </span><span class="dial-code">+994</span></li>
        <li class="country" data-dial-code="1242" data-country-code="bs">
          <div class="flag">
            <div class="iti-flag bs"></div>
          </div><span class="country-name">Bahamas</span><span class="dial-code">+1242</span></li>
        <li class="country" data-dial-code="973" data-country-code="bh">
          <div class="flag">
            <div class="iti-flag bh"></div>
          </div><span class="dial-code">+973</span></li>
        <li class="country" data-dial-code="880" data-country-code="bd">
          <div class="flag">
            <div class="iti-flag bd"></div>
          </div><span class="country-name">Bangladesh </span><span class="dial-code">+880</span></li>
        <li class="country" data-dial-code="1246" data-country-code="bb">
          <div class="flag">
            <div class="iti-flag bb"></div>
          </div><span class="country-name">Barbados</span><span class="dial-code">+1246</span></li>
        <li class="country" data-dial-code="375" data-country-code="by">
          <div class="flag">
            <div class="iti-flag by"></div>
          </div><span class="country-name">Belarus </span><span class="dial-code">+967</span></li>
        <li class="country" data-dial-code="260" data-country-code="zm">
          <div class="flag">
            <div class="iti-flag zm"></div>
          </div><span class="country-name">Zambia</span><span class="dial-code">+260</span></li>
        <li class="country" data-dial-code="263" data-country-code="zw">
          <div class="flag">
            <div class="iti-flag zw"></div>
          </div><span class="country-name">Zimbabwe</span><span class="dial-code">+263</span></li>
        <li class="country" data-dial-code="358" data-country-code="ax">
          <div class="flag">
            <div class="iti-flag ax"></div>
          </div><span class="country-name">&#197;land Islands</span><span class="dial-code">+358</span></li>
      </ul>
    </div>
    <input type="text" name="number" id="number" autocomplete="off" placeholder="+1 201-555-5555">
  </div>
</div>
'
---

* [HTML](0)
* [SCSS](1)

```html
<div class="line phone-field">
  <label for="number">Phone number</label>
  <div class="field">
    <input type="text" name="number" id="number" >
  </div>
</div>
```
```sass
button, input, select, textarea {
  font-size: 100%;
  margin: 0;
  vertical-align: baseline;

  &.error {
    border-color: $error-red-light;
  }
}

button, input {
  line-height: normal;
}

input, textarea, select {
  border-color: $base-border-color;

  @include low-res {
    border-color: $base-border-color-low-res;
  }
}
input, textarea {
  @include transition(color, border-color, box-shadow);

  font-family: $base-font-family;
  border-width: 2px;
  border-style: solid;
  border-radius: $border-radius;
  color: $grey-dark;
  padding: 0.5rem;
  width: 100%;
  outline: none;

  &:hover {
    border-color: darken($grey-light, 5%);
  }

  &:focus {
    color: $grey-darker;
    border-color: $duo-green;
    box-shadow: 0 0 5px 0 transparentize($duo-green, 0.5);
  }

  &.half-width {
    width: 50%;
  }

  &.short {
    width: 48px;
  }

  &.valid, .line.valid & {
    border-color: $success-green-light;
  }
}
```
