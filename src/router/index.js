import { createRouter, createWebHistory } from 'vue-router'
import homeview from '../views/HomeView.vue'
import products from '../../products.json'
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
     path:"/category-show",
     name:"category.show",
     component:()=>import("../views/categoryview.vue")
   },
   {
    path:"/categoryitem-show/:id",
    name:"categoryitem.show",
    component:()=>import("../views/categoryitemview.vue")
   },
   {
    path:"/product-show/:id",
    name:"product.show",
    component:()=>import("../views/productview.vue"),
    beforeEnter(to,from){
      const exist=products.products.find( (product)=>product.id==to.params.id )
      if(!exist){
        return{
          name:'404view',
          query:to.query,
          hash:to.hash,
          params:{pathMatch:to.path.split('/').slice(1)}
        }
      }
    }
  },
  {
    path:"/cart",
    name:"cartdisplay",
    component:()=>import('../views/cartview.vue')
  },
  {
    path:'/wishlist',
    name:'wishlist',
    component:()=>import('../views/wishlistview.vue')
  },
  {
    path:'/signup',
    name:'signup',
    component:()=>import('../views/signupview.vue')
  },
  {
    path:'/login',
    name:'login',
    component:()=>import('../views/loginview.vue')
  },
  {
    path:"/:pathMatch(.*)*",
    name:"404view",
    component:import("../views/404view.vue")
  }


  
  ],
  scrollBehavior(to,from,savedposition){
    return {top:0}
  }
})

export default router
