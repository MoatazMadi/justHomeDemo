import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {title : "Home"},
      component: HomeView,
    },
    // Catch-all 404 route
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/NotFound.vue"),
      meta: { title: "Page Not Found" },
    }
  ],
})


router.beforeEach(async (to, from, next) => {
  // Change the document title
  if (to.meta.title) {
    document.title = "Vue3 Real Estate - "+to.meta.title;
  }
  else{
    document.title = "Vue3 Real Estate";
  }
  next()
})

// Global navigation error handler
router.onError((error) => {
  console.error("Navigation Error: ", error);
  // You could redirect to a generic error page, or show a fallback component
  router.replace({ name: "home" }); // Redirect to NotFound page in case of any error
});

export default router
