import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/products",
    name: "ProductList",
    component: import("@/views/ProductList.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: import("@/views/ShoppingCart.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;