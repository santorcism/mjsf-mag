<!-- TestCompositionAPI.vue -->
<template>
    <div>
      <h1>Composition API Component</h1>
      <p>Service Name: {{ serviceName }}</p>
      <button @click="fetchServiceName">Fetch Service Name</button>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const serviceName = ref('');
  
      // Доступ до плагіну через this.$serviceProvider
      const fetchServiceName = () => {
        serviceName.value = this.$serviceProvider.getCategoriesService(); // Приклад методу у ServiceProvider
      };
  
      return {
        serviceName,
        fetchServiceName
      };
    }
  };
  </script>
  