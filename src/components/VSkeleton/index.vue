<template>
  <div class="c-widget-skeleton">
    <div style="height: 70.59px; margin-bottom: 10px" class="c-widget-skeleton__item" />
    <div style="height: 12px; margin-bottom: 10px; width: 150px" class="c-widget-skeleton__item" />
    <div style="height: 12px; margin-bottom: 10px; width: 80px" class="c-widget-skeleton__item" />
    <div style="height: 12px; margin-bottom: 10px; width: 100px" class="c-widget-skeleton__item" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VSkeleton',
});
</script>

<style scoped lang="scss">
.c-widget-skeleton {
    display: block;
    margin-bottom: 36px;
    width: 100%;
    &__item {
      position: relative;
      border-radius: 4px;
      overflow: hidden;
      background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite linear;
      max-width: 100%;
    }

}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>
