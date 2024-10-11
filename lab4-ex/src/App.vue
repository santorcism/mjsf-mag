<script setup lang="ts">
import { RouterView } from 'vue-router';
import Navigation from "@/components/Navigation.vue";
</script>

<template>
  <header>
    <Navigation />
  </header>
  <RouterView />

  <optionsApi />
  <compositionApi />
</template>

<script>
import optionsApi from './components/optionsApi.vue';
import compositionApi from './components/compositionApi.vue';

export default {
  components: {
    optionsApi,
    compositionApi
  }
};
</script>
<style scoped>

</style>
