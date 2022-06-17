<script setup lang="ts">
import ButtonWithWrapper from './button/WithWrapper.vue';
import ButtonWithWebComponent from './button/WithWebComponent.vue';
import CheckboxWithWrapper from './checkbox/WithWrapper.vue';
import CheckboxWithWebComponent from './checkbox/WithWrapper.vue';

</script>

<template>
  <h1>Button</h1>
  <div class="row">
    <div class="pane">
      <h2>With Wrapper</h2>
      <button-with-wrapper />
    </div>
    <div class="pane">
      <h2>With Web Component</h2>
      <button-with-web-component />
    </div>
  </div>
  <h1>Checkbox</h1>
  <div class="row">
    <div class="pane">
      <h2>With Wrapper</h2>
      <checkbox-with-wrapper />
    </div>
    <div class="pane">
      <h2>With Web Component</h2>
      <checkbox-with-web-component />
    </div>
  </div>
</template>

<style>
.row {
  display: flex;
  flex-direction: row;
}

.pane {
  flex-grow: 1;
}
</style>