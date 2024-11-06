<script lang="ts" setup>
import useAuth from "@/composables/useAuth";
import {useRouter} from "vue-router";
import {ref} from "vue";

const { userState } = useAuth();
const router = useRouter();
const email = ref<string>('');
const login = () => {
    console.log('login')
    userState.user = {
        id: 1,
        name: 'test',
        email: email.value,
    }
    userState.authorized = true;
    console.log(userState)
    router.push({name: 'todo'});
}
</script>

<template>
    <div>
        <h1>Login page</h1>
        <form>
            <input type="text" placeholder="email" v-model="email" />
        </form>
        <button @click="login">Set default user</button>
    </div>
</template>

<style scoped>

</style>
