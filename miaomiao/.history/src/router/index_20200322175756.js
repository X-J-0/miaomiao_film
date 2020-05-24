import Vue from 'vue'
import VueRouter from 'vue-router'
import movieRouter from './movie'

Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    movieRouter
  ]
})

export default router
