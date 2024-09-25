<template>
    <button
      :class="`text-white font-bold rounded ${sizeClass} ${colorClass} flex items-center`" 
      @click="handleClick"
    >
      <span v-if="props.icon" class="mr-2">
        <img :src="props.icon" alt="icon" class="w-5 h-5" />
      </span>
      {{ label }}
    </button>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  
  const props = defineProps({
    label: String,
    color: {
      type: String,
      default: 'blue'
    },
    size: {
      type: String,
      default: 'medium'
    },
    icon: {
      type: String,
      default: ''
    }
  })
  
  // Compute the size class for the button
  const sizeClass = computed(() => {
    return {
      small: 'px-2 py-1 text-sm w-20',
      medium: 'px-4 py-2 text-base w-32',
      large: 'px-6 py-3 text-lg w-48'
    }[props.size] || 'px-4 py-2 text-base w-32';
  });
  
  // Compute the button color class based on the color prop
  const colorClass = computed(() => {
    const colorMap = {
      blue: 'bg-blue-500 hover:bg-blue-600',
      red: 'bg-red-500 hover:bg-red-600',
      green: 'bg-green-500 hover:bg-green-600',
      yellow: 'bg-yellow-500 hover:bg-yellow-600',
      // Add more colors as needed
    };
    return colorMap[props.color] || 'bg-blue-500 hover:bg-blue-600'; // Default color
  });

  const handleClick = (event) => {
        console.log("Button clicked!", event);
    };
  </script>
  
  <style scoped>
  /* Additional styles if necessary */
  </style>
  