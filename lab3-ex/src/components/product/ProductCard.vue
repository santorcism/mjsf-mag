<script setup lang="ts">
import type {ProductCartProps} from "@/components/product/types";
withDefaults(defineProps<ProductCartProps>(), {
    item: null
});
</script>

<template>
    <div class="bg-white shadow-md rounded-lg p-4">
        <router-link :to="`/product/${item.id}`">
            <figure>
                <img class="aspect-square" :src="item.image" :alt="item.name"/>
                <figcaption class="font-semibold text-center py-2">{{ item.name }}</figcaption>
            </figure>
        </router-link>
    </div>
</template>

<style scoped>

</style>
