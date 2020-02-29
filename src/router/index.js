import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children:[
      {path:'/Goods',name:'Goods',component:()=>import('../views/Goods.vue')},
      {path:'/Evaluate',name:'Evaluate',component:()=>import('../views/Evaluate.vue')},
      {path:'/Merchant',name:'Merchant',component:()=>import('../views/Merchant.vue')},
      {path:'/ShopCar',name:'ShopCar',component:()=>import('../views/ShopCar.vue')},
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
