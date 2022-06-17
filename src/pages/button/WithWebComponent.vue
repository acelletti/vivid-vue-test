<script setup lang="ts">
import "@vonage/vwc-button";
import "@vonage/vwc-circular-progress";

</script>

<template>
  <div class="panel">
    <h3>Outlined</h3>
    <div class="showcase">
      <vwc-button label="Outlined" layout="outlined" type="submit" outlined="">
        <button type="submit" style="display: none;"></button>
      </vwc-button>
      <vwc-button label="Outlined" layout="outlined" type="submit" outlined="" connotation="cta">
        <button type="submit" style="display: none;"></button>
      </vwc-button>
      <vwc-button label="Outlined" layout="outlined" type="submit" outlined="" connotation="success">
        <button type="submit" style="display: none;"></button>
      </vwc-button>
      <vwc-button label="Outlined" layout="outlined" type="submit" outlined="" connotation="warning">
        <button type="submit" style="display: none;"></button>
      </vwc-button>
      <vwc-button label="Outlined" layout="outlined" type="submit" outlined="" connotation="info">
        <button type="submit" style="display: none;"></button>
      </vwc-button>
      <vwc-button label="Outlined" layout="outlined" type="submit" outlined="" connotation="announcement">
        <button type="submit" style="display: none;"></button>
      </vwc-button>
    </div>
    <h3>Disabled</h3>
    <div class="showcase">
      <vwc-button
          label="Disabled"
          layout="outlined"
          disabled="foobar"
          type="submit"
          unelevated=""
      >
        <button type="submit" style="display: none;"></button>
      </vwc-button>
      <vwc-button
          label="Disabled"
          layout="filled"
          disabled="true"
          type="submit"
          unelevated=""
      >
        <button type="submit" style="display: none;"></button>
      </vwc-button>
    </div>
    <h3>Icons</h3>
    <div class="showcase">
      <vwc-button
          label="Icon"
          layout="filled"
          icon="download"
          type="submit"
          unelevated=""
      >
        <button type="submit" style="display: none;"></button>
      </vwc-button>
      <vwc-button
          label="Action"
          layout="filled"
          icon="compose-line"
          stacked=""
          type="submit"
          unelevated=""
      >
        <button type="submit" style="display: none;"></button>
      </vwc-button>
    </div>
    <h3>Pending</h3>
    <div class="showcase">
      <vwc-button
          label="Pending"
          layout="filled"
          disabled=""
          type="submit"
          unelevated=""
      >
        <vwc-circular-progress
            slot="trailingIcon"
            indeterminate=""
            density="-7.5"
            progress="0"
        ></vwc-circular-progress>
        <button type="submit" style="display: none;"></button>
      </vwc-button>
    </div>
  </div>
</template>

<style scoped>
.panel {
  display: flex;
  flex-direction: column;
}

.showcase {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-left: 10px;
}

.showcase > * {
  margin-right: 10px;
}
</style>
