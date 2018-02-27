import Vue from 'vue'
import Router from 'vue-router'
import Home from '../containers/Home'
import PageNotFound from '../containers/PageNotFound'
import { setRouterData } from '../vue-documentor'
import * as Components from '../components'

Vue.use(Router)

const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '*', component: PageNotFound},
  ...setRouterData(Components)
]

export default new Router({
  routes
})
