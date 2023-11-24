<template>
  <div class="c-widget-wrapper">
    <h3 class="c-widget-wrapper__header">Per product widget</h3>
    
    <hr class="c-widget-wrapper__divider">
    
    <div class="c-widget-wrapper__widgets">
      <template v-if="isLoading">
        <v-skeleton v-for="i in 3" :key="i"/>
      </template>

      <template v-else>
        <v-widget
          v-for="widget in widgets"
          :key="widget.id"
          :widget-data="widget"
          @activate="activateWidget"
        />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { getWidgets, type Widget } from '@core/widgets.services'

import VWidget from '@components/VWidget/index.vue'
import VSkeleton from '@components/VSkeleton/index.vue'


export default defineComponent({
  name: 'VWidgetsWrapper',
  
  components: {
    VWidget,
    VSkeleton,
  },

  setup() {
    const widgets = ref<Widget[]>([]);
    const isLoading = ref(false)

    const activateWidget = (widgetID: number) => {
      widgets.value = widgets.value.map((widgetData) => ({
        ...widgetData,
        active: widgetID === widgetData.id
      }))

      console.log({ widgetID, widgets: widgets.value })

    }
    
    onMounted(async () => {
      isLoading.value = true;
      try {
        widgets.value = await getWidgets();
        isLoading.value = false;
      } catch (err) {
        isLoading.value = false;
        console.log(err)
      }
    });

    return {
      widgets,
      isLoading,
      activateWidget
    }
  }
});
</script>

<style scoped lang="scss">
  .c-widget-wrapper {
    &__header {
      color: #212121;
      text-align: center;
      font-family: Cabin;
      font-size: 30px;
      font-style: normal;
      font-weight: 700;
      line-height: 36px;
      margin: 0 0 12px 0;
    }

    &__divider {
      height: 2px;
      background: #B0B0B0;
      margin-top: 0;
      margin-bottom: 20px;
    }
  }

  @media all and (min-width: 800px) {
    .c-widget-wrapper {
      width: 100%;

      &__widgets {
        display: flex;
        flex-direction: row;
        gap: 20px;
      }
    }

  }
</style>
