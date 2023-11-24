<template>
  <div class="c-switch-container" @click="toggleSwitch">
    <input
      class="c-switch-container__switch-input" 
      :checked="modelValue" 
      @input="emitUpdate" 
      type="checkbox" 
    />

    <div class="c-switch-container__switch-slider"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  name: 'VSwitch',
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
  },

  emits: ['update:modelValue'],

  setup(props, { emit }) {
    const isChecked = ref(props.modelValue);

    const toggleSwitch = () => {
      isChecked.value = !isChecked.value;
      emit('update:modelValue', isChecked.value);
    };

    watch(() => props.modelValue, (newValue) => {
      isChecked.value = newValue;
    });

    return { isChecked, toggleSwitch, emitUpdate: toggleSwitch };
  },
});
</script>

<style scoped lang="scss">
.c-switch-container {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;

  &__switch-input {
    display: none;
  }

  &__switch-slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to right, #f5f4f4, #edecec);
    transition: 0.4s;
    border-radius: 34px;
    border: 1px solid #AFC6BD;

    &:before {
      position: absolute;
      content: "";
      height: 23px;
      width: 23px;
      left: -2px;
      bottom: -1px;
      background-color: white;
      transition: 0.4s;
      border-radius: 50%;
      border: 1px solid #F2EBDB;
    }

    &:hover:before {
      box-shadow: 0 0 0 4px #AFC6BD;
    }

    &:checked {
      border-color: #B0B0B0;
    }
  }

  &__switch-input:checked + &__switch-slider {
    background: #3B755F;

    &:before {
      transform: translateX(28px);
      height: 21px;
      width: 21px;
      border: none;
      bottom: 1px;
      box-shadow: unset;
    }
  }
}
</style>


