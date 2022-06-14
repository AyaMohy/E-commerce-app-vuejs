<script setup>
import {quantityincart} from '../stores/store.js'
import { ref ,onMounted} from 'vue';
import { useRoute } from 'vue-router';
const url=ref('https://fakestoreapi.com/products')
const product=ref([])
let quantity=ref(0)
const route=useRoute()
const id=route.params.id
    onMounted(()=>{
        fetch(`${url.value}/${id}`)
            .then((res)=>res.json() )
            .then( data=>product.value=data )
    } )

    function currencyformat(value){
            return new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(value)
    }

    function increasequantity(){
        quantity.value++
        product.value.rating.count--
    }
    function decreasequantity(){
        quantity.value--
        product.value.rating.count++
    }
    function addtocart(itemid,product){
        quantityincart.value.increasecount(quantity.value)  //increase cartitem
       
        //check existance
        let targetitem=quantityincart.value.items.find((item)=>item.product.id==itemid )
        if(targetitem){
            targetitem.quantity +=quantity.value
             targetitem.totalprice=quantityincart.value.count * product.price;
        }else{
            quantityincart.value.increment(product.price,product,quantity.value)
        }
        
        quantity.value=0
    }



</script>

<template>
    <div class="mx-5">
        <!-- categoryitemview.vue -->
        <div>
            <router-link to="/"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="gray" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
                </svg>
            </router-link>
        </div>
        <div class="text-center fs-3 text-muted" v-if="Object.keys(product).length ==0">loading........</div>
        <div v-else>
            <section class="row m-5">
            <div class="col-12 d-flex align-items-center col-md-5">
                <img class="border img-scale rounded-3 img-fluid" :src="product.image" :alt="product.title">
            </div>
            <div class="col-12 ps-md-5 pt-5 pt-md-0 col-md-7 ">
                <h5 class="text-muted">{{product.category.toUpperCase()}}</h5>
                <p>Rating: {{product.rating.rate}}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                </p>
                <h4 class="fs-2" style="font-family: 'Lobster Two', cursive;color:#8a4af3">{{product.title}}</h4>
                <p>{{product.description}}</p>
                <p class="fs-5"><span class="fs-3" style="font-family: 'Lobster Two', cursive;color:#8a4af3">Price:</span> {{currencyformat(product.price)}}</p>
                <div class="py-3">
                    <p class="input-group d-inline-block fs-3 mb-5" >
                        <span class="fs-3 " style="font-family: 'Lobster Two', cursive;color:#8a4af3">Quantity: </span>
                        <button :class="[quantity==0?['disabled','bg-danger']:'']"  @click="decreasequantity" class="btn rounded-start fw-bold text-white" style="background-color:#8a4af3">-</button>
                        <button class="btn border fw-bold border-dark" >{{quantity}}</button>
                        <button :class="[product.rating.count==0?['disabled','bg-danger']:'']" @click="increasequantity" class="btn fw-bold text-white" style="background-color:#8a4af3">+</button>
                    </p>
                </div>
            
                <button v-show="quantity" @click="(addtocart(product.id,product))" class="btn btn-add-to-cart fs-5 text-white" style="background-color:#8a4af3">add to cart</button>
            </div>
            </section>

        </div>
    </div>
</template>
<style scoped>
.disabled{
    border:1px solid black !important;
    /* color: gray; */
    background-color: gray !important;
    cursor: auto !important;
}
</style>