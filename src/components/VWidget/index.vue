<template>
  <div class="c-widget">
    <div 
      :style="{ background: widget.selectedColor }"
      class="c-widget__header"
    >
      <div class="c-widget__header-img">
        <img src="@/assets/greenspark_logo.svg" alt="">
      </div>

      <div class="c-widget__header-content">
        <span 
          class="c-widget__header-content__subtitle"
          :style="{ color: headerColors }"
        >
          This product {{ widget.action }}</span>
        <h3 
          class="c-widget__header-content__title"
          :style="{ color: headerColors }"
        >
          {{ widget.amount }}&nbsp;{{ widget.type }}
        </h3>
      </div>
    </div>

    <div class="c-widget__field">
      <div class="c-widget__field__title">
        <span>Link to Public Profile</span>
        
        <div class="c-widget__field__tooltip">
          <div
            class="c-widget__field__tooltip__tooltip-icon"
            data-qa="tooltip-icon"
          >
            i
          </div>
          
          <div 
            class="c-widget__field__tooltip__tooltip-text"
            data-qa="tooltip-content"
          >
            <p class="c-widget__field__tooltip__tooltip-text__tooltip-text-content">
              This widget links directly to your public profile so that you can easily share your impact with your customers. Turn it off here if you do not want the badge to link to it.
            </p>
            <a class="c-widget__field__tooltip__tooltip-text__tooltip-link" href="#">View Public Profile</a>
          </div>
        </div>
      </div>

      <v-checkbox v-model="widget.linked" />
    </div>

    <div class="c-widget__field">
      <span class="c-widget__field__title">
        Badge colour
      </span>
      <div class="c-widget__field__colors">
        <v-color-selector
          v-for="color in colors"
          :key="color"
          :color="color"
          :selected="color === widget.selectedColor"
          @selected="widget.selectedColor = color"
        />
      </div>
    </div>

    <div class="c-widget__field">
      <span class="c-widget__field__title">
        Activate badge
      </span>

      <v-switch :model-value="widget.active" @update:model-value="() => activateWidget(widget.id)" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType, ref, computed, watch } from 'vue';
import { type Widget } from '@core/widgets.services';

import VCheckbox from '@components/VCheckbox/index.vue'
import VColorSelector from '@components/VColorSelector/index.vue'
import VSwitch from '@components/VSwitch/index.vue';

export default defineComponent({
  name: 'VWidget',
  props: {
    widgetData: {
      type: Object as PropType<Widget>,
      required: true,
    }
  },
  components: {
    VCheckbox,
    VColorSelector,
    VSwitch,
  },
  emits: ['activate'],
  setup(props, { emit }) {
    const widget = ref<Widget>({ ...props.widgetData });

    const colors = ['blue', 'green', 'beige', 'white', 'black'];

    const headerColors = computed(() => {
      const { selectedColor } = widget.value;
      return selectedColor === 'white' || selectedColor === 'beige' ? '#000' : '#F9F9F9'
    });

    const activateWidget = (id: number) => {
      emit('activate', id)
    };

    watch(() => props.widgetData, (newWidgetData) => {
      widget.value = { ...newWidgetData };
    })

    return {
      widget,
      colors,
      headerColors,
      activateWidget
    }
  }
});
</script>

<style scoped lang="scss">
  .c-widget {
    display: block;
    margin-bottom: 36px;
    width: 100%;

    &__header {
      display: flex;
      flex-direction: row;
      padding: 10.297px 13.895px 10.297px 11.91px;
      gap: 11.91px;
      border-radius: 5.955px;
      margin-bottom: 10px;
    }
    
    &__header-content {
      &__subtitle {
        color: #F9F9F9;
        font-family: Cabin;
        font-size: 12.406px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
      
      &__title {
        margin: 0;
        color: #F9F9F9;
        font-family: Cabin;
        font-size: 17.865px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
    }

    &__field {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 10px;

      &__title {
        color: #3B755F;
        text-align: center;
        font-family: Cabin;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }

      &__colors {
        display: flex;
        flex-direction: row;
        gap: 4px;
      }

      &__tooltip {
        position: relative;
        display: inline-block;
        transition: all 1s ease-in-out;

        &__tooltip-icon {
          width: 12px;
          height: 12px;
          margin-left: 5px;
          border: 1px solid;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }

        &__tooltip-text {
          width: 248px;
          bottom: 120%;
          left: 50%;
          margin-left: -124px;
          visibility: hidden;
          opacity: 0;
          transition: all 0.2s ease-in-out;

          border-radius: 4px;
          background: #FFF;
          box-shadow: 0px 0.77778px 2.99074px 0px rgba(0, 0, 0, 0.01), 0px 3.42222px 6.19259px 0px rgba(0, 0, 0, 0.02), 0px 8.4px 12.35px 0px rgba(0, 0, 0, 0.03), 0px 16.17778px 24.20741px 0px rgba(0, 0, 0, 0.03), 0px 27.22222px 44.50926px 0px rgba(0, 0, 0, 0.04), 0px 42px 76px 0px rgba(0, 0, 0, 0.05);
          text-align: center;
          padding: 24px 16px;
          border-radius: 6px;
          position: absolute;
          z-index: 1;

          &__tooltip-text-content {
            color: #212121;
            text-align: center;

            font-family: Cabin;
            font-size: 13px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            padding: 0;
            margin: 0 0 12px 0;
          }

          &__tooltip-link {
            color: #3B755F;
            text-align: center;
            font-family: Cabin;
            font-size: 14px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            letter-spacing: -0.28px;
            text-decoration: none;
          }
        }

        &:hover &__tooltip-text{
          visibility: visible;
          opacity: 1;
        }
      }
    }
  }
</style>
