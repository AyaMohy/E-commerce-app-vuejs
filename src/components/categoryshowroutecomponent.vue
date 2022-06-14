<script>
import iconsdisplay from './iconsdisplay.vue'
export default{
    data(){
        return{
            products:[],
            url:'https://fakestoreapi.com/products'
        }
    },
    components:{
        iconsdisplay
    },
    mounted(){
      fetch(this.url)
      .then((res)=>res.json() )
      .then(data=>this.products=data.filter((x)=>x.category==this.$route.query.category ) );
      
    },
    methods:{
        currencyformat(value){
            return new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(value)
        }
    }
}
</script>

<template>
      <div class="text-center fs-3 pb-5" v-if="products.length==0">Loading ...........</div>
        <div v-else>
            <section class="row" >
            <!-- remove card-hover class to prevent hoverable icon container -->
                <div  class="col-10  col-sm-auto mx-auto my-3 " style="" v-for="product in products" :key="product.id">
                    <div style=" box-shadow:0 0 20px 1px #eee" class="card pt-1 px-sm-4 text-center pb-5 border">
                        <router-link class="text-decoration-none" :to="`/categoryitem-show/${product.id}`">
                            <img width="200" class="card-img-top" height="200" :src="product.image" alt="">
                            <h5 class="text-center">{{product.title.substring(0,15)}}..</h5>
                            <p>{{currencyformat(product.price)}}</p>
                            <button class="btn btn-outline-dark mx-3 ">buy now</button>
                        </router-link>
                    </div>

                    <div class="card-inside h-0 w-0 bg-success bg-gradient rounded-3 overflow-hidden d-flex align-items-center position-absolute top-0 start-0 ">
                        <div class="mx-auto">
                            <div class="svg-container rounded-3">
                                <iconsdisplay :products="product" :item="product" />
                            </div>   
                        </div>  
                    </div>  
                    

                  
                </div>
           
            </section>
        </div>
</template>