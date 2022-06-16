<template>
  <vwc-button
      v-bind="$props"
      @click="$emit('click')"
      :disabled="disabled || pending"
      type="submit"
      unelevated=""
  >
    <!-- Boilerplate: Needed for form submit to work properly -->
    <button type="submit" style="display: none;"/>

    <!-- Circular progress icon for pending state -->
    <vwc-circular-progress
        v-if="pending"
        slot="trailingIcon"
        data-testid="nx-lb-loading"
        indeterminate=""
        density="-7.5"
        progress="0"
    />
  </vwc-button>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {ConnotationPropType, LayoutPropType, ShapePropType} from "../constants";

import '@vonage/vwc-button';
import '@vonage/vwc-circular-progress';

export default defineComponent({
  props: {
    label: String,
    connotation: String as ConnotationPropType,
    disabled: Boolean,
    enlarged: Boolean,
    icon: String,
    layout: String as LayoutPropType,
    pending: Boolean,
    shape: String as ShapePropType,
    stacked: Boolean,
  },
  emits: ['click']
});
</script>
