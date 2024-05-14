import { createApp } from 'vue';
import { createPinia } from 'pinia';

import i18n from './i18n';
import App from './App.vue';
import router from './router';
import './style.css';
const pinia = createPinia();
const app = createApp(App);


app.use(i18n);
app.use(router);
app.use(pinia);
app.mount('#app');
