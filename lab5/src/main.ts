import '@/assets/main.css'
import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import auth from '@/firebase';
import useAuth from "@/composables/useAuth";
auth.onAuthStateChanged((firebaseUser: any): void => {
    const { userState } = useAuth();
    if (firebaseUser){
        userState.user = firebaseUser;
        userState.authorized = true;
    } else {
        userState.user = undefined;
        userState.authorized = false;
    }
   console.log(userState);
    const app = createApp(App)
    app.use(router)
    app.mount('#app')
});
