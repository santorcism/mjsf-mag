<script lang="ts" setup>
import { ref } from 'vue';

interface TodoItem {
    id: number;
    text: string;
    completed: boolean;
}

const newTodo = ref<string>('');
const todos = ref<TodoItem[]>([]);

// Add a new todo item
const addTodo = () => {
    if (newTodo.value.trim() !== '') {
        todos.value.push({
            id: Date.now(),
            text: newTodo.value.trim(),
            completed: false,
        });
        newTodo.value = ''; // Clear the input
    }
};

// Toggle completed state of a todo item
const toggleTodo = (id: number) => {
    const todo = todos.value.find(item => item.id === id);
    if (todo) {
        todo.completed = !todo.completed;
    }
};

// Remove a todo item
const removeTodo = (id: number) => {
    todos.value = todos.value.filter(item => item.id !== id);
};
</script>

<template>
    <div>
        <h1>To-Do List</h1>
        <form @submit.prevent="addTodo">
            <input type="text" v-model="newTodo" placeholder="Enter a new task" />
            <button type="submit">Add</button>
        </form>
        <ul>
            <li v-for="todo in todos" :key="todo.id" :class="{ completed: todo.completed }">
                <input type="checkbox" v-model="todo.completed" @change="toggleTodo(todo.id)" />
                <span>{{ todo.text }}</span>
                <button @click="removeTodo(todo.id)">Remove</button>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.completed {
    text-decoration: line-through;
    color: gray;
}
</style>
