import { createRouter, createWebHistory } from 'vue-router'
// import LandingView from '@/views/LandingView.vue'
import FormsView from '@/views/FormsView.vue'
import LandingViewNew from '@/views/LandingViewNew.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LandingView',
      component: LandingViewNew
    },
    {
      path: '/form',
      name: 'formsView',
      component: FormsView
    }

    // {
    // path: '/about',
    // name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
