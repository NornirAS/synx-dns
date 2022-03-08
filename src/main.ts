import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import { createPinia } from 'pinia'

// Styles
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

// Components
import ToastService from 'primevue/toastservice'

const app = createApp(App)

app.use(createPinia())

app.use(PrimeVue)
app.use(ToastService)

app.mount('#app')
