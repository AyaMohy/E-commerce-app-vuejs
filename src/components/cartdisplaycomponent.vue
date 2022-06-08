<script setup>
import {quantityincart} from '../stores/store.js'
import emptycartcomponent from './emptycartcomponent.vue'
import { ref } from 'vue';

const one=ref(1)
function currencyformat(value){
    return new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(value)
}


function decreasebyone(){
    // quantityincart.value.increasecount(-1) 
    // let targetitem=quantityincart.value.items.find((item)=>item.product.id==id )
    // targetitem.quantity -=1;
}

function increasebyone(){
    // quantityincart.value.increasecount(1)
    // one.value= quantityincart.value.items.find((target)=>target.id==id  )
//    console.log( one.value++)
    // quantityincart.value.items.product.quantity --
    // isactive.value.quantity --
    // one.value++
    //  let targetitem=quantityincart.value.items.find((item)=>item.product.id==id )
    //     if(targetitem){
    //         targetitem.product.quantity =one.value
    //     }else{
    //         // quantityincart.value.increment(itemid,isactive,quantity.value)
    //     }
}
// 

</script>

<template>
    <div class="mx-5 mt-5">
        <!-- cartdisplaycomponent -->

        <div v-if="quantityincart.count">

            <section style="background-color:rgb(217, 219, 214)" class=" p-4 bg-gradient my-4" v-for="item in quantityincart.items" :key="item.id">
                <div class="d-flex">
                    <div>
                        <img :src="item.product.image" width="200" alt="">
                    </div>
                    <div class="ps-4">
                        <div class="d-flex  flex-column align-items-start mb-3">
                            <div class="mb-5">
                                <p>{{item.name}}</p>
                                <h3>{{currencyformat(item.product.price)}}</h3>
                            </div>
                        </div>
                       
                        <div  class="input-group mt-5">
                            <button :disabled="!item.product.quantity"  @click="(quantityincart.increasecount(1)),(item.quantity++),(item.product.quantity--)" class="btn fw-bold btn-outline-success">+</button>
                            <span class="px-3 fw-bold input-group-text border border-secondary">{{item.quantity}}</span>
                            <button @click="quantityincart.increasecount(-1),(item.quantity--),(item.product.quantity++)"  class="fw-bold btn btn-outline-danger">-</button>
                        </div>
                    </div>
                </div>
                
            </section>
        </div>
        <div v-else>
           <emptycartcomponent/>
        </div>
    </div>
</template>

<style scoped>
.btn-shop-now:focus{
    background: white !important;
    color:black !important
}
.btn-shop-now:hover{
    background: rgb(119, 115, 115) !important;
   
}
</style>