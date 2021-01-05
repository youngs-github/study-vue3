import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import NotFound from '../views/404/index.vue';

const routes: Array<RouteRecordRaw> = [
    {
        name: 'page-1',
        path: '/page-1',
        component: () => import('../views/page-1/index.vue')
    },
    {
        name: 'page-2',
        path: '/page-2',
        component: () => import('../views/page-2/index.vue')
    },
    {
        path: '/404',
        component: NotFound
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
