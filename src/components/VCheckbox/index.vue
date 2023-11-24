<template>
  <label class="c-checkbox-container">
    <input type="checkbox" v-model="isChecked" class="c-checkbox-container__checkbox" />

    <div class="c-checkbox-container__custom-checkbox">
      <svg 
        v-if="isChecked" 
        class="c-checkbox-container__custom-checkbox__check-icon" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="white" 
        stroke-width="5" 
        stroke-linecap="round" 
        stroke-linejoin="round"
      >
        <path d="M20 6L9 17l-5-5" />
      </svg>
    </div>
  </label>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  name: 'VCheckbox',
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const isChecked = ref(props.modelValue);

    watch(() => props.modelValue, (newValue) => {
      isChecked.value = newValue;
    });

    watch(() => isChecked.value, (newValue) => {
      emit('update:modelValue', newValue);
    });

    return {
      isChecked,
    };
  },
});
</script>

<style lang="scss" scoped>
.c-checkbox-container {
  position: relative;
  display: inline-block;

  &__checkbox {
    position: absolute;
    opacity: 0;
  }
  &__custom-checkbox {
    width: 18px;
    height: 18px;
    background-color: #fff;
    border: 2px solid #212121; 
    border-radius: 4px;
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  
    .c-checkbox-container__checkbox:checked + & {
      background-color: #3B755F;
      border-color: #3B755F;
      box-shadow: none;
      border-color: none;
    }
  
    &:hover {
      box-shadow: 0 0 0 4px #AFC6BD;
      border-color: #212121b3;
    }
  
    &__check-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: block;
      width: 18px;
      height: 18px;
    }
  }
}


</style>
