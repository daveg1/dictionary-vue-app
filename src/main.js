import { createApp } from 'vue'
import store from './store'

// App imports
import App from './App.vue'
import './assets/global.css'

createApp(App).use(store).mount('#app')