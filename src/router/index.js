import { createRouter, createWebHistory } from 'vue-router'
import homeview from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
     path:'/',
     name:"home",
     component:homeview,
     alias:'/home'
   },
   {
     path:"/category-show/:id",
     name:"category.show",
     component:()=>import("../views/categoryview.vue")
   },
   {
    path:"/product-show/:id",
    name:"product.show",
    component:()=>import("../views/productview.vue")
  },
  {
    path:"/cart",
    name:"cartdisplay",
    component:()=>import('../views/cartview.vue')
  },
  {
    path:'/wishlist',
    name:'wishlist',
    component:import('../views/wishlistview.vue')
  }

  
  ],
  scrollBehavior(to,from,savedposition){
    return {top:0}
  }
})

export default router
