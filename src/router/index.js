import Vue from 'vue'
import VueRouter from 'vue-router'
import Top from '../views/Top.vue'
import ShowTrip from '../views/ShowTrip.vue'
import SearchTrips from '../views/SearchTrips'
import CreateTrip from '../views/CreateTrip'

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
  {
    path: '/search_trips',
    name: 'SearchTrips',
    component: SearchTrips
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
