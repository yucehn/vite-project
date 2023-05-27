import { createApp } from 'vue'
import './style.scss'
import router from './router'
import App from './App.vue'
import naiveUi from './plugins/naiveUi';
// import chart from './plugins/chart';

createApp(App).use(router).use(naiveUi).mount('#app')
