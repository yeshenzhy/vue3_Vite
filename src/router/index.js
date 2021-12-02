/*
 * @Author: zhy
 * @Date: 2021-11-22 18:31:11
 * @Description:
 * @LastEditTime: 2021-11-30 15:01:28
 */
import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import('@/views/home/Home.vue'); // 首页
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
