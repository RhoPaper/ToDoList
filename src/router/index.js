import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Pages/Home.vue';
import About from '../components/Pages/About.vue';
import NotFound from '../components/Pages/404.vue';


// 定义路由规则
const routes = [
    {
        path: '/',
        component: Home,
        meta: { title: '首页 | To Do List'},
    },
    {
        path: '/about',
        component: About,
        meta: { title: '关于 | To Do List'},
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound,
        meta: { title: '404 | To Do List' },
    },
    // {
    //     path: '/404',
    //     component: NotFound,
    //     meta: { title: '404 | To Do List' }
    // }
];

// 创建路由实例
const router = createRouter({
    history: createWebHistory(),
    routes,
});

// 导航守卫 动态设置页面标题
router.beforeEach((to, from, next) => {
    if (to.meta && to.meta.title) {
        document.title = to.meta.title;
    }
    next();
});

// 导出
export default router;