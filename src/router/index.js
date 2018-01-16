import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/containers/Home'
import Docs from '@/containers/Docs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/docs',
      name: 'Docs',
      component: Docs
    }
  ]
})
