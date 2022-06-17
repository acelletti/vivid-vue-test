<script setup lang="ts">
import VCheckBox from "../../components/VCheckBox.vue";
import {ref, computed} from "vue";

const isChecked = ref(true);
const label = computed(() => isChecked.value ? 'Checked' : 'Unchecked');
</script>

<template>
  <div class="panel">
    <div class="showcase">
      <v-check-box :label="label" v-model="isChecked"/>
      <v-check-box :label="label" v-model="isChecked" disabled/>
      <v-check-box :label="label" v-model="isChecked" autofocus/>
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
