import 'primevue/resources/themes/lara-dark-indigo/theme.css'
import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css'
import "primeflex/primeflex.min.css"
import "@/flag.css"

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue);

app.mount('#app')
