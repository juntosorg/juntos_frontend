import { createRouter, createWebHistory } from 'vue-router'
// import LandingView from '@/views/LandingView.vue'
import FormsView from '@/views/FormsView.vue'
import LandingView from '@/views/LandingView.vue'
// import PresenteComponent from '@/components/PresenteComponent.vue'
import ChatView from '@/views/ChatView.vue'
import FinalContactComponent from '@/components/CFinal/FinalContactComponent.vue'
import { isValidUserId } from '@/services'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LandingView',
      component: LandingView
    },
    {
      path: '/form',
      name: 'formsView',
      component: FormsView
    },
    {
      path: '/chat',
      name: 'Chat',
      component: ChatView,
      beforeEnter: async (to, from, next) => {
        const userId = to.query.userId as string
        if (userId && await isValidUserId(userId)) {
          next()
        } else {
          next({ name: 'LandingView' }) // Redireciona para a página inicial se o userId não for válido
        }
      }
    },
    {
      path: '/contato',
      name: 'Contato',
      component: FinalContactComponent
    }
    // {
    //   path: '/presente',
    //   name: 'Presente',
    //   component: PresenteComponent
    // }

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
