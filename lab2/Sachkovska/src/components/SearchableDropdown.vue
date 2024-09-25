<template>
    <div ref="dropdown" class="relative w-full" @click="handleClickOutside">
      <input
        type="text"
        :placeholder="placeholder"
        v-model="inputValue"
        @focus="isOpen = true"
        @keydown.enter.prevent="selectItem(filteredItems[hoveredIndex])"
        @keydown.down.prevent="focusNextItem"
        @keydown.up.prevent="focusPrevItem"
        class="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        readonly
      />
      <div v-if="isOpen" class="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg">
        <ul class="max-h-60 overflow-auto">
          <li
            v-if="filteredItems.length === 0"
            class="p-2 text-gray-500"
          >
            Нічого не знайдено
          </li>
          <li
            v-for="(item, index) in filteredItems"
            :key="item.id"
            @click="selectItem(item)"
            @mouseenter="hoveredIndex = index"
            @mouseleave="hoveredIndex = -1"
            :class="`p-2 cursor-pointer ${hoveredIndex === index ? 'bg-blue-500 text-white' : 'text-black'}`"
          >
            <span class="flex items-center">
              <img v-if="item.icon" :src="item.icon" alt="" class="w-5 h-5 mr-2" />
              {{ item.label }}
            </span>
          </li>
        </ul>
        <button @click="clearSelection" class="w-full p-2 text-blue-500 hover:bg-gray-100">
          Очистити
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue';
  
  const props = defineProps({
    items: {
      type: Array,
      required: true,
    },
    placeholder: {
      type: String,
      default: 'Пошук...',
    },
    multiple: {
      type: Boolean,
      default: false,
    },
  });
  
  const emit = defineEmits(['update:modelValue']);
  
  const searchTerm = ref('');
  const isOpen = ref(false);
  const hoveredIndex = ref(-1);
  const selectedItems = ref([]);
  const dropdown = ref(null);
  
  // Use a computed property to show selected items in the input
  const inputValue = computed(() => {
    return props.multiple
      ? selectedItems.value.map(item => item.label).join(', ')
      : selectedItems.value[0]?.label || '';
  });
  
  const filteredItems = computed(() => {
    if (!searchTerm.value) return props.items;
    return props.items.filter(item =>
      item.label.toLowerCase().includes(searchTerm.value.toLowerCase())
    );
  });
  
  // Handle item selection
  const selectItem = (item) => {
    if (props.multiple) {
      if (!selectedItems.value.includes(item)) {
        selectedItems.value.push(item);
      } else {
        selectedItems.value = selectedItems.value.filter(i => i !== item);
      }
    } else {
      selectedItems.value = [item];
    }
  
    emit('update:modelValue', selectedItems.value);
    searchTerm.value = ''; // Clear search term after selection
    isOpen.value = false; // Close the dropdown after selection
  };
  
  // Clear the selection
  const clearSelection = () => {
    selectedItems.value = [];
    emit('update:modelValue', selectedItems.value);
    searchTerm.value = ''; // Clear search term
  };
  
  // Keyboard navigation
  const focusNextItem = () => {
    if (hoveredIndex.value < filteredItems.value.length - 1) {
      hoveredIndex.value++;
    }
  };
  
  const focusPrevItem = () => {
    if (hoveredIndex.value > 0) {
      hoveredIndex.value--;
    }
  };
  
  // Handle clicks outside the dropdown
  const handleClickOutside = (event) => {
    if (dropdown.value && !dropdown.value.contains(event.target)) {
      isOpen.value = false; // Close the dropdown if clicked outside
    }
  };
  
  // Watch selectedItems to close the dropdown if needed
  watch(selectedItems, () => {
    if (!props.multiple) {
      isOpen.value = false;
    }
  });
  
  // Set up event listener for clicks outside the dropdown
  onMounted(() => {
    document.addEventListener('click', handleClickOutside);
  });
  
  // Clean up the event listener when component is unmounted
  onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
  });
  </script>
  
  <style scoped>
  /* Additional styles if necessary */
  </style>
  