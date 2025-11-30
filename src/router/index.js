import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import HomePage from '@/views/HomePage.vue'
import Print from '@/views/print.vue'
import SignUp from '@/views/signUp.vue'
import LoginPage from '@/views/loginPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage
    },

    // follow this format for other views
    {
      path: "/print",
      name: "print",
      component: Print
    },

    {
      path: "/leader",
      name: "leader",
      component: Leaderboard
    },
    
    {
      path: "/signUp",
      name: "signUp",
      component: SignUp
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage
    },



  ],
})

export default router
