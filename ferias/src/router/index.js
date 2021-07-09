import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '@/views/About.vue'
import Ivan from '@/views/Ivan.vue'
import Bahia from '@/views/Bahia.vue'
import Sergipe from '@/views/Sergipe.vue'
import Df from '@/views/Df.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/bahia',
    name: 'Bahia',
    component: Bahia
  },
  {
    path: '/sergipe',
    name: 'Sergipe',
    component: Sergipe
  },
  {
    path: '/distritoFederal',
    name: 'distritoFederal',
    component: Df
  },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: About,
  // },
  // {
  //   path: '/ivan',
  //   name: 'Ivan',
  //   component: Ivan
  // }
]

const router = new VueRouter({
  routes
})

export default router
