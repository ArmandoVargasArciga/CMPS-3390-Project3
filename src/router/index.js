import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import HomePage from '@/views/HomePage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      paths: "/",
      name: "/home",
      component: HomePage,
    },

    /* follow this format for other views
    {
      paths: "/",
      name: "/home",
      component: "HomePage",
    },
    */



  ],
})

export default router
