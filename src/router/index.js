import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

import HelloWorld from "../components/HelloWorld.vue";
import Products from "../views/Products.vue";
import Recipes from "../views/Recipes.vue";

const routes = [
    { path: '/', component: HelloWorld },
    { path: '/products', component: Products },
    { path: '/recipes', component: Recipes }
]

export const router = createRouter({
    // history: createWebHistory(),
    history: createWebHashHistory(),
    routes,
})