import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
    history: createWebHistory(),
    routes: 
    [
        { // List Flights
            path: '/',
            name: 'Flights',
            component: () => import('../views/flight/View.vue')
        },
        { //List Reports
            path: '/report',
            name: 'Reports',
            component: () => import('../views/report/View.vue')
        },
        { //Add Flight
            path: '/add/flights',
            name: 'CreateFlight',
            component: () => import('../views/flight/Create.vue')
        },
        { //Add Report
            path: '/add/reports',
            name: 'CreateReport',
            component: () => import('../views/report/Create.vue')
        },
        {
            path: '/edit/flight/:id',
            name: 'EditFlight',
            component: () => import('../views/flight/Edit.vue'),
        },
        {
            path: '/edit/report/:id',
            name: 'EditReport',
            component: () => import('../views/report/Edit.vue'),
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('../views/auth/SignIn.vue')
        },
        {
            path: '/register',
            name: 'Register',
            component: () => import('../views/auth/Register.vue')
        }
    ]
})

export default router