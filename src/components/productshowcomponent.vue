<script setup>
import products from '../../products.json'
import { useRoute } from 'vue-router';
import {computed, ref} from "vue"

const productapi=ref(products.products)
const isactive=ref(true)
const isactive2=ref(true)
const quantity=ref(0)
const route=useRoute()
const id=route.params.id

    const targetproduct=computed( ()=>{
        return productapi.value.find((target)=>target.id==id  )
    } )

    function currencyformat(value){
        return new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(value)
    }
    function increasequantity(){
        quantity.value ++
    }
     function decreasequantity(){
        quantity.value --
    }

</script>

<template>
    <div>
        <!-- productshowcomponent -->
        <section class="row m-5">
            <div class="col-12 d-flex align-items-center col-md-6">
                <img class="border img-scale rounded-3 img-fluid" :src="isactive2==targetproduct?isactive.image:targetproduct.variantproduct[0].image" alt="">
            </div>
            <div class="col-12 ps-md-5 pt-5 pt-md-0 col-md-6 ">
                <h2 class="fs-2" style="font-family: 'Lobster Two', cursive;color:#8a4af3">{{targetproduct.name}}</h2>
                <p>{{targetproduct.desc}}</p>
                <p class="fs-5"><span class="fs-3" style="font-family: 'Lobster Two', cursive;color:#8a4af3">Price:</span> {{isactive2==targetproduct?currencyformat(isactive.price):currencyformat(targetproduct.variantproduct[0].price)}}</p>
                <div class="mt-2 "> <span class="fs-3" style="font-family: 'Lobster Two', cursive;color:#8a4af3">Color: </span> 
                    <button @click="(isactive=item),(isactive2=targetproduct)" v-for="item in targetproduct.variantproduct" :key="item.id" class="btn mx-1 p-2 rounded-circle border border-secondary" :style="{'backgroundColor':item.color}" ></button>
                </div>
                <div class="py-3">
                    <p class="input-group d-inline-block fs-3 mb-5" >
                        <span class="fs-3 " style="font-family: 'Lobster Two', cursive;color:#8a4af3">Quantity: </span>
                        <button :class="[quantity==0?['disabled','bg-danger']:'']"  @click="decreasequantity" class="btn rounded-start fw-bold text-white" style="background-color:#8a4af3">-</button>
                        <button class="btn border fw-bold border-dark" >{{quantity}}</button>
                        <button :class="[quantity>isactive.quantity?['disabled','bg-danger']:'']" @click="increasequantity" class="btn fw-bold text-white" style="background-color:#8a4af3">+</button>
                    </p>
                </div>
            
                <button class="btn btn-add-to-cart fs-5 text-white " style="background-color:#8a4af3">add to cart</button>
            </div>
            
        </section>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lobster+Two&display=swap');

.btn-add-to-cart{
  transition: all 1s;  
}
.btn-add-to-cart:hover{
    background-color: rgba(138, 74, 243,0.5) !important;
}
.img-scale{
    transition: transform 1s;
    transform: scale(0.9);
}
.img-scale:hover{
    transform: scale(1.1);
}
</style>