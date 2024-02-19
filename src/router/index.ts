import { createRouter, createWebHistory } from "vue-router";
import type {
  NavigationGuardNext,
  RouteLocationNormalized,
  RouteRecordRaw,
} from "vue-router";
import LoginPage from "../pages/LoginPage.vue";
import PageNotFound from "../pages/PageNotFound.vue";

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
    path: "/login",
    name: "Login",
    component: LoginPage,
    meta: {
      layout: "LayoutMain",
    },
  },
  // {
  //   path: '/registration',
  //   name: 'Registration',
  //   component: () => import('@/pages/RegistrationPage.vue'),
  //   meta: {
  //     layout: 'LayoutMain',
  //   },
  // },
  {
    path: '/',
    redirect: '/login',
    // beforeEnter: authGuard,
    meta: {
      layout: 'LayoutMain',
    },
  },
];

const catchRoutes = [
  {
    path: "/:catchAll(.*)",
    component: PageNotFound,
    meta: {
      guest: true,
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
