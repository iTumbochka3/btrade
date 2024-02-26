import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import ProfilePage from "@/pages/ProfilePage.vue";
import TradePage from "@/pages/TradePage.vue";
import PageNotFound from "@/pages/PageNotFound.vue";

// function authGuard(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
// if (store.getters.isAuthenticated) {
//   const userId = store.getters?.getUser?.id
//   if (store.getters.getUser.verified === false) {
//     const query = { ...from.query, ...to.query }
//     next({
//       path: `/resident/unverified/${userId}`,
//       params: { userId },
//       query,
//     })
//     return
//   }
//   next()
// }
// else {
// next({ name: 'Login' })
// }
// }

const main: Array<RouteRecordRaw> = [
  {
    path: "/profile",
    name: "Login",
    component: ProfilePage,
    meta: {
      layout: "LayoutMain",
    },
  },
  {
    path: "/trade",
    name: "Trade",
    component: TradePage,
    // beforeEnter: authGuard,
    meta: {
      layout: "LayoutMain",
    },
  },
  {
    path: "/",
    redirect: "/login",
    meta: {
      layout: "LayoutMain",
    },
  },
];

const catchRoutes = [
  {
    path: "/:catchAll(.*)",
    component: PageNotFound,
    meta: {
      // guest: true,
      layout: "AppLayout",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: [...main, ...catchRoutes],
});

// router.beforeEach(loadLayoutMiddleware)

export default router;
