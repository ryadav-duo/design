---
title: Search
template: child-2col-coded
active_page: ['search-field']
snippet_title: Search Field
notes: ''
example: '
<div class="field ">
  <div class="select2-container select2-container-multi" id="s2id_groups">
    <ul class="select2-choices">
      <li class="select2-search-choice">
        <div>Test Group (49 users)</div>
        <a href="#" class="select2-search-choice-close" tabindex="-1"></a>
      </li>
      <li class="select2-search-field">
        <label for="s2id_autogen3" class="select2-offscreen"></label>
        <input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="select2-input" id="s2id_autogen3" placeholder="" style="width: 20px;" aria-activedescendant="select2-result-label-4"> </li>
    </ul>
  </div>
  <select id="groups" multiple="" name="groups" tabindex="-1" class="select2-offscreen">
    <option value="DGKYLA8JT3UNCKZCH8A4">AcctVPNUsers!! (0 users)</option>
    <option value="DG9IXS73DI7YL5N3V8CW">Duo_Enable (0 users)</option>
    <option value="DGD59YCLN98N58350DFM">GroupWithLargeSubgroup (2 users)</option>
    <option value="DGWOF45OSVZ97J513FBT">Hello Hello (2 users)</option>
    <option value="DGSUH9I33D59GIJ84PP2">Its ok to do test things on First right? (0 users)</option>
    <option value="DG0UPYVPHDLYIL51ZKNI">JamieGroup (3 users)</option>
    <option value="DGPEBWNCCL46AQL7J310">RADIUSGroupTest (2 users)</option>
    <option value="DGO27ET215RT2YWS7YFM">Shalabi del (0 users)</option>
    <option selected="" value="DGSZSLSWK2UVG3TV70H2">Test Group (49 users)</option>
    <option value="DGNKEMMFK28LY9FX7DKC">Testing 2 (4 users)</option>
    <option value="DG59F5GTFVH5HFNY2Y9X">admin (3 users)</option>
    <option value="DGV3EQOTKDP9BV9NTZ1P">best group (1 user)</option>
    <option value="DGGT2R0SWR0AV361SPCK">bkilla_test_group (1 user)</option>
    <option value="DGAJ6CYCQ3QO9O4R67CE">bypassthisguy (0 users)</option>
    <option value="DGXFILQ7YHW8GLKBHNEU">controller (0 users)</option>
    <option value="DGPSAA682IXKP14JW9KQ">group-1 (0 users)</option>
    <option value="DGHZZXN8M1G5291Y8CIV">group-2 (0 users)</option>
    <option value="DG4UDL4QSEJ19PLTAMDS">group_a (5 users)</option>
    <option value="DG7DTIDKQWCM87MTYTSF">group_c (1 user)</option>
    <option value="DG4DGGV0N4HC8H3BNJZ4">group_d (1 user)</option>
    <option value="DGDRKQ1LG94H5AYJNU8W">group_e (0 users)</option>
    <option value="DGKEPK463P17Y1XATMZI">group_f (0 users)</option>
    <option value="DG4CMU79CACZD8PNJSYY">group_g (0 users)</option>
    <option value="DGE83P2INNVNTHY7EPVZ">group_h (0 users)</option>
    <option value="DGU91N8FYLPAREKOD3D8">group_i (0 users)</option>
    <option value="DG9QVNK4QM907EU4ZPU8">group_j (0 users)</option>
    <option value="DGVKK947TLWE0N8OZROS">group_k (0 users)</option>
    <option value="DGINR5OP3QN5DRUT7P9N">group_l (0 users)</option>
    <option value="DGPG44IJ9T1BXO5HQYDH">group_m (0 users)</option>
    <option value="DGTPZGD5Z639SH3WRPQX">group_n (0 users)</option>
    <option value="DGJ91HSPBG2QETI3SQG3">group_o (0 users)</option>
    <option value="DGD754UZYJ2QBFFEHP6F">group_p (0 users)</option>
    <option value="DGGDN75VEBQLR0BUKKTB">group_q (0 users)</option>
    <option value="DGTAY0VRHWL3TE132XS6">group_r (0 users)</option>
    <option value="DGU96ZSWJN0L5RGCQPH8">group_s (0 users)</option>
    <option value="DGDC7W9BA1A6DDXF0ZCL">group_t (0 users)</option>
    <option value="DGFWPFG9YFRFWN5B6H7J">group_u (0 users)</option>
    <option value="DGVKOBC0K3HNTRMJCX3G">group_v (0 users)</option>
    <option value="DG7T3FFYTHHVL8IDUPY5">group_w (0 users)</option>
    <option value="DGFUO8GJ7F5IOJEVNCGY">group_x (0 users)</option>
    <option value="DG3QR36SJNQRNTI4P581">group_y (0 users)</option>
    <option value="DGBT6G9M9IJQE2DSRPDF">group_z (0 users)</option>
    <option value="DGN8N2RINEANKKAGSJWI">heres an awesome group! (0 users)</option>
    <option value="DGB5TWZLFJM4JA8X67D6">super (0 users)</option>
    <option value="DGEFS6CJNOOGJ0XOSSTE">test group (0 users)</option>
    <option value="DGQAFNG31JHH3SKCUJJK">testimport1234 (0 users)</option>
    <option value="DGR2VZTAF8E4Z6SRFYGE">testimport5678 (0 users)</option>
    <option value="DGOME6G0APYB54U38MYO">user (0 users)</option>
    <option value="DGL28L77DTUDZWZLGY10">wgroup_ (0 users)</option>
    <option value="DGC5HID1BOVWP1MNE6H0">wumpus some group name wumpus some group name (1 user)</option>
    <option value="DGRPWEM4E1X90CHD90LT">unicode (0 users)</option>
  </select>
</div>'
---

* [HTML](0)
* [SCSS](1)

```html
<div class="field ">
  <div class="select2-container select2-container-multi" id="s2id_groups">
    <ul class="select2-choices">
      <li class="select2-search-field">
        <label for="s2id_autogen3" class="select2-offscreen">
        </label>
        <input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="select2-input select2-default" id="s2id_autogen3" placeholder="" style="width: 348px;">
      </li>
    </ul>
  </div>
  <select id="groups" multiple="" name="groups" tabindex="-1" class="select2-offscreen">
    <option value="">Option 1</option>
    <option value="">Option 2</option>
    <option value="">Option 3</option>
  </select>
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
input, textarea, select {
  border-color: $base-border-color;

  @include low-res {
    border-color: $base-border-color-low-res;
  }
}

select {
  margin-top: 1px;
  font-family: inherit;
  font-size: inherit;
  font-weight: normal;
  display: inline-block;
  border-width: 1px;
  border-style: solid;
  color: #333;
  border-radius: $border-radius;
  border-color: $base-border-color;
}

```
