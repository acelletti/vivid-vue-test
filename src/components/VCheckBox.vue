<template>
  <vwc-formfield :label="label">
    <vwc-checkbox
        :checked="checked"
        :disabled="disabled"
        :autofocus="autofocus"
        @change="event => checked = event.target.checked"
    />
  </vwc-formfield>
</template>

<script lang="ts">
import {defineComponent, computed} from 'vue'

import '@vonage/vwc-checkbox';
import '@vonage/vwc-formfield';

export default defineComponent({
  props: {
    label: String,
    modelValue: Boolean,
    disabled: Boolean,
    autofocus: Boolean,
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const checked = computed({
      get: () => props.modelValue,
      set: (value) => emit('update:modelValue', value)
    });
    return { checked };
  },
});
</script>
