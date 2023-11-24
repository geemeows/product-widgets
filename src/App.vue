<template>
  <v-widgets-wrapper />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import VWidgetsWrapper from '@components/VWidgetsWrapper/index.vue'

export default defineComponent({
  components: {
    VWidgetsWrapper
  },
  setup() {
    const slider = ref(false);
    const selected = ref(false);

    const updateSelected = () => {
      selected.value = true;
    }
    return {
      slider,
      selected,
      updateSelected
    };
  }
});

</script>

<style scoped>
</style>
