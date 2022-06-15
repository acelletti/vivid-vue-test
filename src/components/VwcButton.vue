<template>
  <vwc-button v-bind="$props" @click="$emit('click')" type="submit">
    <button type="submit" style="display: none;"/>
  </vwc-button>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
// @ts-ignore
import { VWCButton } from '@vonage/vivid';
import {ConnotationPropType, LayoutPropType, ShapePropType} from "../constants";

// DO NOT REMOVE: needed for tree-shaking
VWCButton;

export default defineComponent({
  props: {
    label: String,
    connotation: String as ConnotationPropType,
    disabled: Boolean,
    enlarged: Boolean,
    icon: String,
    layout: String as LayoutPropType,
    shape: String as ShapePropType,
  },
  emits: ['click']
});
</script>
