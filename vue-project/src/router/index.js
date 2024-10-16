import { createRouter, createWebHistory } from "vue-router";
import Login from "../view/until/Login.vue";
import Register from "../view/until/Register.vue";
import Dashboard from "../view/admin/Dashboard.vue";
import HomePage from "../components/HomePage.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!localStorage.getItem("token")) {
      next({ name: "Login" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
