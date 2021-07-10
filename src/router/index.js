import Vue from 'vue'
import VueRouter from 'vue-router'
import Estados from '@/views/Estados.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/estado/:id',
    name: 'Estados',
    component: Estados
  }
]

const router = new VueRouter({
  routes
})

export default router
