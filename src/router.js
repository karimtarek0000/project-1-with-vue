// ALL IMPORT IN FILE
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './view/Home.vue';
import Shop from './view/Shop.vue';
import Product from './view/Product.vue';
import Blog from './view/Blog.vue';
import Portfolio from './view/Portfolio.vue';
import Page from './view/Page.vue';

// PERFORMANCE

// ADD VUE ROUTER IN VUE JS
Vue.use(VueRouter);

// CONFIGRATION VUE ROUTER 
export const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: Home,
            name: 'home'
        },
        {
            path: '/shop',
            component: Shop,
            name: 'shop'
        },
        {
            path: '/product',
            component: Product,
            name: 'product'
        },
        {
            path: '/blog',
            component: Blog,
            name: 'blog'
        },
        {
            path: '/portfolio',
            component: Portfolio,
            name: 'portfolio'
        },
        {
            path: '/page',
            component: Page,
            name: 'page'
        }
    ]
});