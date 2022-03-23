import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import JobView from '@/views/JobView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
  },
  {
    path: '/job/:id',
    name: 'JobView',
    component: JobView,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL || 'http://localhost:8080/',
  routes
})

export default router