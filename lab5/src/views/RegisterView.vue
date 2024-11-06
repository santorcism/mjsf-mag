<script lang="ts" setup>
import useAuth from "@/composables/useAuth";
import { useRouter } from "vue-router";
import { ref } from "vue";

const { userState } = useAuth();
const router = useRouter();
const email = ref<string>('');
const password = ref<string>('');
const username = ref<string>('');

const register = () => {
    console.log('Registering new user');
    userState.user = {
        id: Math.floor(Math.random() * 1000), // Use a random ID for now
        name: username.value,
        email: email.value,
    };
    userState.authorized = true;
    console.log(userState);
    router.push({ name: 'home' }); // Redirect to the home page
};
</script>

<template>
    <div>
        <h1>Registration Page</h1>
        <form @submit.prevent="register">
            <input type="text" placeholder="Username" v-model="username" required />
            <input type="email" placeholder="Email" v-model="email" required />
            <input type="password" placeholder="Password" v-model="password" required />
            <button type="submit">Register</button>
        </form>
    </div>
</template>

<style scoped>
/* Add any styles specific to your registration page here */
</style>
