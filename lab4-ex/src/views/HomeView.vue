<script setup lang="ts">

import {onMounted, ref} from "vue";
import type {Category} from "@/types";
import serviceProvider from "@/services";
import CategoryWrapper from "@/components/category/CategoryWrapper.vue";

const categories = ref<Category[]>([]);
const loading = ref<boolean>(false);
const fetchCategories = async () => {
    try {
        loading.value = true;
        categories.value = await serviceProvider.getCategoriesService().get({limit: 8, offset: 0});
    } catch (e) {
        console.error(e);
    } finally {
        loading.value = false;
    }
};
onMounted(() => {
    fetchCategories();
})
</script>

<template>
    <main class="container mx-auto">
        <h1 class="text-center font-semibold p-8"> My Shop Products Categories </h1>
        <CategoryWrapper :items ="categories" :loading="loading" />
    </main>

    <div>
    <h1>Test Tooltip with Options API</h1>
    <button
      v-tooltip="{
        content: 'Tooltip on hover',
        delay: 300,
        trigger: 'hover'
      }"
    >
      Hover me
    </button>

    <button
      v-tooltip="{
        content: '<b>Tooltip</b> with HTML',
        delay: 500,
        trigger: 'click',
        html: true
      }"
    >
      Click me
    </button>

    <button
      v-tooltip="{
        content: 'Tooltip with manual control',
        show: true
      }"
    >
      Always shown
    </button>
  </div>
</template>
