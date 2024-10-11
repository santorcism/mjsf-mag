<!-- TestOptionsAPI.vue -->
<template>
    <div>
      <h1>Options API Component</h1>
      <p>Service Name: {{ serviceName }}</p>
      <button @click="fetchServiceName">Fetch Service Name</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        serviceName: ''
      };
    },
    methods: {
      fetchServiceName() {
        // Використовуємо глобальну властивість $serviceProvider
        this.serviceName = this.$serviceProvider.getCategoriesService(); // Приклад методу у ServiceProvider
      }
    }
  };
  </script>
  