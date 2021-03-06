import Vue from 'vue'
import VueRouter from 'vue-router'
import Top from '../views/Top.vue'
import ShowTrip from '../views/ShowTrip.vue'
import CreateTrip from '../views/CreateTrip.vue'
// import SearchTrips from '../views/SearchTrips'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Top',
    component: Top
  },
  {
    path: '/trips/new',
    name: 'CreateTrip',
    component: CreateTrip
  },
  {
    path: '/trips/:id',
    name: 'ShowTrip',
    component: ShowTrip
  },
  // {
  //   path: '/search_trips',
  //   name: 'SearchTrips',
  //   component: SearchTrips,
  // },
  // {
  //   path: '/trips/new',
  //   name: 'CreateTrip'
  // },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
