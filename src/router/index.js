import { createRouter, createWebHistory } from 'vue-router'
import FilterView from '../views/FilterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FilterView,
      props: true
    },
    {
      path: '/whiskey/:id',
      name: 'whiskies',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DetailView.vue'),
      props: true
    }
  ]
})

export default router
