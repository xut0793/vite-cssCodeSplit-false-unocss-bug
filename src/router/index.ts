import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/async",
    name: "async-component",
    component: () => import("../components/AsyncRouterComp.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
