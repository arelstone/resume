import Vue from 'vue'
import Router from 'vue-router'
import Home from '../containers/Home'
import PageNotFound from '../containers/PageNotFound'
import { mapDocumentorRoutes } from '../vue-documentor'
import * as Components from '../components'

Vue.use(Router)
//console.log(mapDocumentorRoutes(Components))
const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '*', component: PageNotFound},
  ...mapDocumentorRoutes(Components)
]
export default new Router({
  routes
})
