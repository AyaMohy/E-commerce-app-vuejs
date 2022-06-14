<script setup>
import {quantityincart} from '../stores/store.js'
import { computed } from 'vue'
import { ref ,onUpdated} from 'vue';
const isactive=ref(false)
const isexist=ref(false)
const isex=ref(false)
const isactive2=ref(false)
const props = defineProps({
  products: {
    type: Object,
    default:()=>false
  },
  item:{
     type: Object,
     default:()=>false
  }
})
const products = computed(() => props.products)
const item = computed(() => props.item)
// function increaseoneitem(){
//     return quantityincart.value.items.find((item)=>item.product.id==item.value.id )
//     // return item.value.id
// }

function addtowishlist(){
    let targetitem=quantityincart.value.itemswishlist.findIndex((i)=>i.id==products.value.id )
    if(targetitem !=-1){
         isexist.value=false
        quantityincart.value.itemswishlist.splice(targetitem,1)
    }else{
        quantityincart.value.additemstowishlist(products.value) 
        isexist.value=true
    }
    return targetitem
     
}

  function addtocart(){
        quantityincart.value.increasecount(1)  //increase cartitem
       
        //check existance
        let targetitem=quantityincart.value.items.find((i)=>i.product.id==item.value.id )
        if(targetitem){
            targetitem.quantity +=1
             targetitem.totalprice=quantityincart.value.count * item.value.price;
        }else{
            quantityincart.value.increment(item.value.price,item.value,1)
        }
    }
// onUpdated(() => {
//     addtowishlist()
//     // if(isexist.value==true) isex=true
//   // text content should be the same as current `count.value`
// //   console.log(isexist.value)
// })
</script>

<template>
    <div>
        <!-- iconsdisplay -->
        <button  :class="{disabled: isexist }" class="btn d-block  text-white" @click="(isactive= !isactive),addtocart()"> 
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-cart-dash-fill" viewBox="0 0 16 16">
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM6.5 7h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1z"/>
            </svg>
        </button>
        <button style="box-shadow:none;outline:none" :class="{disabled: isexist }" class="btn text-white" @click="(addtowishlist()),(isactive2= !isactive2)">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
            </svg>
        </button>
    </div>
</template>

<style scoped>
.card-hover:hover svg{
    fill: black !important;
}
.disabled{
    background: white;
    color: rgb(231, 34, 34) !important;
}
</style>