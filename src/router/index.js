import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/home/Home";
import Layout from "@/views/layout/layout";
import Login from "@/views/login/Login";
import AccountAdd from "@/views/account/accountAdd";
import accountLogin from "@/views/account/accountLogin";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name : 'home',
        component: Home
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        children: [{
            path: '/',
            name : 'accountLogin',
            component: accountLogin
        },{
            path: '/accountLogin',
            component: accountLogin
        },{
            path: '/accountAdd',
            component: AccountAdd
        }
        ]
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        //component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/layout',
        name : 'layout',
        component: Layout
    }
]

const router = new VueRouter({
    routes
})

export default router
