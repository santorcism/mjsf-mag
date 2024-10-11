import '@/assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ServiceProviderPlugin from './plugins/servicePlugin'; // Імпорт плагіну
import tooltipDirective from './plugins/tooltipDirective'
const app = createApp(App);

// Реєструємо плагін
app.use(ServiceProviderPlugin);
app.directive('tooltip', tooltipDirective);
app.use(createPinia())
app.use(router)

app.mount('#app')
