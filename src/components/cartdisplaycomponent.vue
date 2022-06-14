<script setup>
import {quantityincart} from '../stores/store.js'
import emptycartcomponent from './emptycartcomponent.vue'
import { ref ,computed} from 'vue';
import backcomponent from './backcomponent.vue'
// let totalpri=ref(0)
function currencyformat(value){
    return new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(value)
}

// function totalpri(){
//  return quantityincart.value.items.reduce((previousValue,currentValue)=>previousValue.totalprice+ currentValue.totalprice )
// }
//  totalpri=computed( ()=>{
//     return quantityincart.value.items.reduce((previousValue,currentValue)=>previousValue.totalprice+ currentValue.totalprice )
// } )

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
        <backcomponent/>
        <div v-if="quantityincart.count">

            <section style="background-color:rgba(138, 74, 243,0.2)" class=" p-4 bg-gradient my-4" v-for="item in quantityincart.items" :key="item.id">
                <div class="d-flex">
                    <div>
                        <img :src="item.product.image" width="200" alt="">
                    </div>
                    <div class="ps-4">
                        <div class="d-flex  flex-column align-items-start mb-3">
                            <div class="mb-2">
                                <p> {{item.product.name}}</p>
                                <h3>{{currencyformat(item.product.price)}}</h3>
                            </div>
                        </div>
                       
                        <div  class="input-group">
                            <button :class="[!item.product.quantity?'disabled':'']" :disabled="!item.product.quantity"  @click="(quantityincart.increasecount(1)),(item.quantity++),(item.product.quantity--),(item.totalprice=item.quantity*item.product.price)" class="btn fw-bold btn-outline-success">+</button>
                            <span class="px-3 fw-bold input-group-text border border-secondary">{{item.quantity}}</span>
                            <button @click="quantityincart.increasecount(-1),(item.quantity--),(item.product.quantity++),(item.totalprice=item.quantity*item.product.price)"  class="fw-bold btn btn-outline-danger">-</button>
                        </div>
                        <div>
                            <div class=" mt-4 fs-5">Tatal: {{currencyformat(item.totalprice)}}</div>
                        </div>
                    </div>
                    
                </div>
            </section>
            
            <div class="table-responsive px-5 fs-5 py-3">
                <!-- <button @click="quantityincart.gettotalprice">total</button> -->
                <table  class="table table-light">
                   <tr class="border-0 border-secondary" >
                       <th  class="border-end  ">Number of items </th>
                       <!-- <td>|</td> -->
                       <td class="ps-5"> {{quantityincart.count}} {{quantityincart.count>1?'items':'item' }}</td>
                   </tr>
                    <tr class="order-0 border-secondary">
                         <th  class="pt-2 border-end">Total</th>
                         <!-- <td>|</td> -->
                         <td  class="ps-5"> {{currencyformat(quantityincart.gettotalprice())}}</td>
                    </tr>
                    <tr class=" border-secondary">
                         <th class="pt-2 border-end ">Taxes</th>
                         <!-- <td>|</td> -->
                         <td  class="ps-5">{{currencyformat(quantityincart.gettotalprice() *0.1)}}</td>
                    </tr>
                    <tr class="border-secondary">
                         <th class="pt-2 border-end">GrantTotal</th>
                         <!-- <td>|</td> -->
                         <td  class="ps-5">{{currencyformat(quantityincart.gettotalprice() + quantityincart.gettotalprice()*0.1)}}</td>
                    </tr>
                </table>
                <router-link  to="/"> <button  class="btn btn-pay ms-5 w-50 my-3 fs-5 text-light py-1 px-5">Pay</button></router-link>
            </div>
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
.disabled{
    border:1px solid gray !important;
    color: gray;
}
.btn-pay:hover{
    background-color: rgba(138, 74, 243,0.5);
}
.btn-pay{
    background-color:rgba(138, 74, 243,0.8);
}
</style>