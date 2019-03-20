import Vue from 'vue'
import Router from 'vue-router'
import FpIndex from "../pages/index/FpIndex"
import FpTickets from "../pages/tickets/FpTickets"
import City from "../pages/city/City"
import ExitTravel from "../pages/exit/ExitTravel"
import FpMy from "../pages/my/FpMy"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: FpIndex
    },{
      path:'/tickets',
      name:'FpTickets',
      component:FpTickets
    },{
      path:'/city',
      name:'City',
      component:City
    },{
      path:'/exits',
      name:'ExitTravel',
      component:ExitTravel
    },{
      path:'/my',
      name:'FpMy',
      component:FpMy
    }
  ]
})
