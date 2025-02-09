import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './style.css'

// 创建 Vue 应用
const app = createApp(App);

// 使用路由
app.use(router);

// 挂载应用
app.mount('#app');