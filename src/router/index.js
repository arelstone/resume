import Vue from 'vue'
import Router from 'vue-router'
import Home from '../containers/Home'
import PageNotFound from '../containers/PageNotFound'
import { mapDocumentorRoutes } from '../vue-documentor'
import * as Components from '../components'
import Game from '../Game/Game'

Vue.use(Router)
const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '*', component: PageNotFound},
  {path: '/game', component: Game},
  ...mapDocumentorRoutes(Components)
]
const router = new Router({
  routes
})
router.beforeEach((to, from, next) => {
  console.log(to)
  next()
})

export default router
