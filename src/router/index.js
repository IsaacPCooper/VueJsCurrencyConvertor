import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue';
import History from '/src/components/History.vue';
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/history',
        name: 'history',
        component: History,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router