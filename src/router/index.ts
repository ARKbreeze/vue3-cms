import { createRouter, createWebHistory } from 'vue-router';

// 导入的如果是个类型 可以用type声明 不用也可以
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('views/login/index.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('views/main/index.vue')
  }
];

const router = createRouter({
  routes,
  history: createWebHistory()
});

export default router;
