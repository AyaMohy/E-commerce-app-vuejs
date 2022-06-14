<script>
import products from '../../products.json'
import iconsdisplay from './iconsdisplay.vue'
export default{
    data(){
        return{
            products:products.products,
            index:0,
            selectedproduc:'',
            selecteditem:'',
            targetimage:'',
            ishover:false,
            isactive:true,
            ischange:true,   //value for item depend on color
            ischange2:true   //value for one product
        }
    },
    created() {
        this.ischange=this.products[0]
    },
    components:{ 
        iconsdisplay 
    },
    methods:{
     selectedproduct($event,item_id,product_id){
        let image=$event.target.parentNode.parentNode
        this.selectedproduc=this.products.find( (product)=>product.id==product_id)
        this.selecteditem=this.selectedproduc.variantproduct.find((item)=>item.id==item_id )
        this.targetimage=image.querySelector("img").src=this.selecteditem.image;
        
     },
     closecardinside(){
         alert("close")
     },
     currencyformat(value){
         return new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(value)
     } ,
     changeme(product,item){
        //  if(product==this.ischange2) {
        //      currencyformat(ischange.price)
        //  }
        this.ischange=item
        this.ischange2=product

     },
     checkchange(product){
         if(product==this.ischange2) {
             return this.ischange.price
         }
         else{
            return product.variantproduct[0].price
         }
     }  ,
     addoneitemtocart(){
         return this.products[0].id
     }
    },
    created(){
        console.log("hello")
    }
}
</script>

<template>
    <div class="mx-5 mt-5">
        <!-- productdisplaycomponent -->
        <section class="row" >
            <div  class="card-hover col-auto mx-auto my-3" v-for="product in products" :key="product.id">
            <!-- <template>{{ischange=product.variantproduct[0]}}</template> -->
               <div style=" box-shadow:0 0 20px 1px #eee" class="card pt-1 text-center pb-5 border">
                    <router-link class="text-decoration-none" :to="`/product-show/${product.id}`">
                        <img  width="200" height="200" :src="product == ischange2?ischange.image:product.variantproduct[0].image" alt="">
                        <h3 class="text-center">{{product.name}}</h3>
                    </router-link>
                    <!-- <div class="text-center ">
                        <button @click="selectedproduct($event,item.id,product.id)" v-for="item in product.variantproduct" :key="item.id" class="btn mx-1 p-3 rounded-circle border border-secondary" :style="{'backgroundColor':item.color}" ></button>
                    </div> -->
                   <div class="text-center ">
                        <!-- <button  @click="(ischange=item),(ischange2=product)" v-for="item in product.variantproduct" :key="item.id" class="btn mx-1 p-3 rounded-circle border border-secondary" :style="{'backgroundColor':item.color}" ></button> -->
                        <button  @click="changeme(product,item)" v-for="item in product.variantproduct" :key="item.id" class="btn mx-1 p-3 rounded-circle border border-secondary" :style="{'backgroundColor':item.color}" ></button>
                    </div>
                   <!-- <p v-if="ischange2 !==product">{{currencyformat(product.variantproduct[0].price)}}</p> -->
                    <!-- <p >{{ischange2==product?currencyformat(ischange.price):''}}</p> -->
                    <p>{{currencyformat(checkchange(product))}}</p>
                </div>

                <div :class="{'cardinside':isactive == product.id}" class="card-inside h-0 w-0 bg-success bg-gradient rounded-3 overflow-hidden d-flex align-items-center position-absolute top-0 start-0 ">
                    <button @click.prevent="isactive = product.id" class="btn d-none position-absolute top-0 text-end w-100" style="box-shadow:none !important;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                            </svg>
                    </button>
                   <div class="mx-auto">
                        <div class="svg-container rounded-3">
                           <iconsdisplay :products="product" :item="ischange==true?product.variantproduct[0]:ischange"/>
                        </div>
                   </div>
              
                </div> 
                
              

              
            </div>
           
        </section>
           
    </div>
</template>

<style scoped>
.card-inside{
    transition: all 2s;
}

.card-hover:hover .card-inside{
    height: 100% ;
    width: 100% ;
    background-color: rgba(138, 74, 243,0.4) !important;
} 
.cardinside{
    height: 90px !important;
    width: 55px !important;
    position: absolute;
}

.card-hover:hover svg{
    fill: black !important;
}
.card-hover:hover .svg-container{
    background-color: white;

}
.card-hover:hover .d-none{
    display: block !important;
}


</style>