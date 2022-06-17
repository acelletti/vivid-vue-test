<script setup lang="ts">
import VButton from '../../components/VButton.vue';
</script>

<template>
  <div class="panel">
    <h3>Outlined</h3>
    <div class="showcase">
      <v-button label="Outlined" layout="outlined"/>
      <v-button label="Outlined" layout="outlined" connotation="cta"/>
      <v-button label="Outlined" layout="outlined" connotation="success"/>
      <v-button label="Outlined" layout="outlined" connotation="warning"/>
      <v-button label="Outlined" layout="outlined" connotation="info"/>
      <v-button label="Outlined" layout="outlined" connotation="announcement"/>
    </div>
    <h3>Disabled</h3>
    <div class="showcase">
      <v-button label="Disabled" layout="outlined" disabled/>
      <v-button label="Disabled" layout="filled" :disabled="true"/>
    </div>
    <h3>Icons</h3>
    <div class="showcase">
      <v-button label="Icon" layout="filled" icon="download"/>
      <v-button label="Action" layout="filled" icon="compose-line" stacked/>
    </div>
    <h3>Pending</h3>
    <div class="showcase">
      <v-button label="Pending" layout="filled" pending/>
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
