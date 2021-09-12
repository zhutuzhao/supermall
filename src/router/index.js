import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Category = ()=>import('../views/category/Category.vue')
const Profile = ()=>import('../views/profile/Profile.vue')
const Cart = ()=>import('../views/cart/Cart.vue')
const Home = ()=>import('../views/home/Home.vue')
const routes = [
  {
    path:'',
    redirect:'/Home'
  },
  {
    path:'/Home',
    component:Home
  },
  {
    path:'/Profile',
    component:Profile
  },
  {
    path:'/Cart',
    component:Cart
  },
  {
    path:'/Category',
    component:Category
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
