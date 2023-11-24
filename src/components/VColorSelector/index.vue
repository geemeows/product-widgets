<template>
  <div 
    :class="['c-color-block', { 'c-color-block--selected': selected }]"
    :style="{ background: color }"
    @click="onColorClick"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VColorSelector',
  props: {
    color: {
      type: String,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  emits: ['selected'],
  setup(props, { emit }) {
    const onColorClick = () => {
      emit('selected');
    }
    return {
      onColorClick
    };
  }
});
</script>

<style scoped lang="scss">
  .c-color-block {
    width: 16px;
    height: 16px;
    cursor: pointer;
    box-sizing: border-box;

    &:hover {
      opacity: 0.8;
    }

    &--selected {
      border: 2px solid #B0B0B0;
    }
  }
</style>
