import { createApp } from 'vue';
import App from './App.vue';
import Router from './router';
// import Store from './store';
import { createPinia } from 'pinia';
import { createPersistedState } from 'pinia-persistedstate-plugin';
import 'normalize.css';
import '@/assets/css/index.less';

// import './api';
// import ElementPlus from 'element-plus';
// import 'element-plus/dist/index.css';

createApp(App)
  .use(Router)
  .use(createPinia().use(createPersistedState()))
  .mount('#app');

console.log(process.env.VUE_APP_CURRENT_MODE);

// 全局element
//import ElementPlus from 'element-plus'
//import 'element-plus/dist/index.css'
// use(ElementPlus)

// 局部引入  按需引入
// 组件内手动挂载
// babel-...-import   引入时自动挂载css
// 需要自己全局注册
