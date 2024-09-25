<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Button from './components/Button.vue';
import SearchableDropdown from './components/SearchableDropdown.vue';
import { ref } from 'vue';

const dropdownItems1 = ref([
  { id: 1, label: 'Option 1', icon: 'https://cdn-icons-png.flaticon.com/128/3917/3917032.png' },
  { id: 2, label: 'Option 2', icon: 'https://cdn-icons-png.flaticon.com/128/3916/3916579.png' },
  { id: 3, label: 'Option 3', icon: 'https://cdn-icons-png.flaticon.com/128/3917/3917244.png' },
]);

const dropdownItems2 = ref([
  { id: 4, label: 'Choice A'},
  { id: 5, label: 'Choice B'},
  { id: 6, label: 'Choice C'},
]);

const selectedItems1 = ref([]);
const selectedItems2 = ref([]);
</script>

<template>
<div class="flex items-center">
  <Button label="Hello" size="medium" color="blue"></Button>
  <Button label="Click Me" size="large" color="red" icon="https://cdn-icons-png.flaticon.com/128/3916/3916882.png"></Button>
  <Button label="Submit" size="small" color="green" icon="https://cdn-icons-png.flaticon.com/128/3917/3917749.png"></Button>
  <Button label="Info" size="medium" color="yellow" icon="https://cdn-icons-png.flaticon.com/128/3916/3916693.png"></Button>
</div>

<div class="p-4">
  <h2 class="text-lg font-semibold">Dropdown 1</h2>
  <SearchableDropdown
    :items="dropdownItems1"
    :multiple="true"
    v-model="selectedItems1"
    placeholder="Оберіть варіанти"
  />
  
  <div class="mt-4">
    <h3 class="text-lg font-semibold">Вибрані елементи 1:</h3>
    <ul class="mt-2">
      <li v-if="selectedItems1.length" v-for="item in selectedItems1" :key="item.id" class="p-1">
        <span class="flex items-center">
              <img v-if="item.icon" :src="item.icon" alt="" class="w-5 h-5 mr-2" />
              {{ item.label }}
            </span>
      </li>
      <li v-else class="text-gray-500">Нічого не вибрано</li>
    </ul>
  </div>

  <h2 class="text-lg font-semibold mt-6">Dropdown 2</h2>
  <SearchableDropdown
    :items="dropdownItems2"
    :multiple="false"
    v-model="selectedItems2"
    placeholder="Оберіть інші варіанти"
  />
  
  <div class="mt-4">
    <h3 class="text-lg font-semibold">Вибрані елементи 2:</h3>
    <ul class="mt-2">
      <li v-if="selectedItems2.length" v-for="item in selectedItems2" :key="item.id" class="p-1">
        <span class="flex items-center">
              <img v-if="item.icon" :src="item.icon" alt="" class="w-5 h-5 mr-2" />
              {{ item.label }}
            </span>
      </li>
      <li v-else class="text-gray-500">Нічого не вибрано</li>
    </ul>
  </div>
</div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
