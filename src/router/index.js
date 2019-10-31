import Vue from 'vue'
import VueRouter from 'vue-router'
// 管理页面
import Manager from '../views/manager/Index'
import Home from '../views/manager/Home'
import Order from '../views/manager/Order'
import User from '../views/manager/User'
import Address from '../views/manager/address/Address'
import AddAddress from '../views/manager/address/AddAddress'
import ProductList from '../views/manager/ProductList'

import Login from '../views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  { 
    path: '/manager',
    name: 'manager',
    component: Manager,
    children:[
      {
        path: 'home',
        component: Home,
      },
      {
        path: 'order',
        component: Order,
      },
      {
        path: 'user',
        component: User,
      },
      {
        path: 'address',
        component: ()=>import('../views/manager/address/Address') 
      },
      {
        path: 'addaddress',
        component: ()=>import('../views/manager/address/AddAddress') 
      },{
        path:'productList',
        component: ProductList
      }
    ] 
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
