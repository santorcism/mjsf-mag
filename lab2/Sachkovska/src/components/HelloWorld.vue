<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <h3>
      Program Ingeneering, 8.1213, 2nd year, Sachkovska Alina Ihorivna
    </h3>
  </div>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
