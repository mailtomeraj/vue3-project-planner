import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import AddProject from '@/views/AddProject.vue'
import EditProject from '@/views/EditProject.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/add',
      name: 'AddProject',
      component: AddProject
    },
    {
      path: '/project/:id',
      name: 'EditProject',
      component: EditProject
    },
    {
      path: '/about',
      name: 'about',
      component: About
      // // route level code-splitting
      // // this generates a separate chunk (About.[hash].js) for this route
      // // which is lazy-loaded when the route is visited.
      // component: () => import('../views/About.vue')
    }
  ]
})

export default router
