import { createRouter, createWebHashHistory } from "vue-router";

import HelloWorld from "../components/HelloWorld.vue";
import Products from "../views/Products.vue";

const routes = [
    { path: '/', component: HelloWorld },
    { path: '/products', component: Products }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})