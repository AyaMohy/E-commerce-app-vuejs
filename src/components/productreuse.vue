<script>
import iconsdisplay from './iconsdisplay.vue'
export default{
    props:['products'],
    components:{
        iconsdisplay
    },
    data(){
        return{
            isactive:false,
            productactive:false
        }
    },
    methods:{
         currencyformat(value){
         return new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(value)
     },
     changeme(product,item){
        this.isactive=item
        this.productactive=product
     }
    }

}
</script>

<template>
    <div>
        <!-- productreuse -->
        <section class="row" >
            <!-- remove card-hover class to prevent hoverable icon container -->
            <div  class=" col-auto mx-auto  my-3" style="" v-for="product in products" :key="product.id">
               <div style=" box-shadow:0 0 20px 1px #eee" class="card pt-1 text-center pb-5 border">
                    <router-link class="text-decoration-none" :to="`/product-show/${product.id}`">
                        <img width="200" class="img-fluid" height="200" :src="productactive==product?isactive.image:product.variantproduct[0].image" alt="">
                        <h3 class="text-center">{{product.name}}</h3>
                    </router-link>
                    <div class="text-center ">
                        <button  @click="changeme(product,item)" v-for="item in product.variantproduct" :key="item.id" class="btn mx-1 p-3 rounded-circle border border-secondary" :style="{'backgroundColor':item.color}" ></button>
                    </div>
                    <p>{{productactive==product?currencyformat(isactive.price):currencyformat(product.variantproduct[0].price)}}</p>
                </div>

                <div :class="{'cardinside':isactive == product.id}" class="card-inside h-0 w-0 bg-success bg-gradient rounded-3 overflow-hidden d-flex align-items-center position-absolute top-0 start-0 ">
                    <button @click.prevent="isactive = product.id" class="btn d-none position-absolute top-0 text-end w-100" style="box-shadow:none !important;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                            </svg>
                    </button>
                   <div class="mx-auto">
                        <div class="svg-container rounded-3">
                           <iconsdisplay :products="product" :item="isactive" />
                        </div>   
                   </div>  
                </div>   
            </div>
           
        </section>
    </div>
</template>

<style scoped>

</style>

