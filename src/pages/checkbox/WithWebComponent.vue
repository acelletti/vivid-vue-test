<script setup lang="ts">
import '@vonage/vwc-checkbox';
import '@vonage/vwc-formfield';

import {ref, computed} from "vue";

const isChecked = ref(true);
const label = computed(() => isChecked.value ? 'Checked' : 'Unchecked');
</script>

<template>
  <div class="panel">
    <div class="showcase">
      <vwc-formfield :label="label">
        <vwc-checkbox
            :checked="isChecked"
            @change="event => isChecked = event.target.checked"
        />
      </vwc-formfield>
      <vwc-formfield :label="label">
        <vwc-checkbox
            :checked="isChecked"
            @change="event => isChecked = event.target.checked"
            disabled=""
        />
      </vwc-formfield>
      <vwc-formfield :label="label">
        <vwc-checkbox
            :checked="isChecked"
            @change="event => isChecked = event.target.checked"
            autofocus=""
        />
      </vwc-formfield>
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
