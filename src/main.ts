import { createApp } from 'vue'
import App from './App.vue'
import MouseUI from './index'
import './index.scss'

createApp(App).use(MouseUI).mount('#app')
