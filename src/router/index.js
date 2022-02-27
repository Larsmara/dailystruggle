import { createRouter, createWebHistory } from 'vue-router';
import { Homepage, Login, Signup } from '@/modules';

function routeGuard(to, from, next) {
    const isAuthenticated = true;
    if (isAuthenticated) {
        next();
    } else {
        next('/login');
    }
}

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Homepage
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/signup',
        name: 'Sign up',
        component: Signup
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
