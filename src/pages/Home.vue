<script setup lang="ts">
import WithWrapper from './WithWrapper.vue';
import WithWebComponent from './WithWebComponent.vue';
</script>

<template>
  <div class="row">
    <div class="pane">
      <h2>With Wrapper</h2>
      <with-wrapper />
    </div>
    <div class="pane">
      <h2>With Web Component</h2>
      <with-web-component />
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