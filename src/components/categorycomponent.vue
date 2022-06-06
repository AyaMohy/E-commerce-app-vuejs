<script>
import { RouterLink } from 'vue-router'
import categories from '../../category.json'
export default{
    data(){
        return{
            categories:categories.categories,

        }
    }
}
</script>
<template>
<div style="background-color:rgba(138, 74, 243,0.4)" class="py-2">
<h3 class="text-center pt-3"><span class="d-inline-block fw-bold category-fl">C</span>ategory</h3>
    <div class="d-flex mt-3 mb-5 mx-5 justify-content-center justify-content-lg-between flex-wrap">
        <!-- categorycomponent -->
        <section style="height:50vh;" class=" col-12 bg-transparent col-sm-9 col-md-4 p-2 hover-see-more rounded my-3 position-relative" v-for="category in categories" :key="category.id">
            
             <img :src="category.image" class="col-6 position-absolute img-fluid top-0 h-100" alt="">
            <div class="border border-2 border-secondary border-start-0 col-6 bg-light h-100 pt-5 top-0 position-absolute start-50 text-center">
                <h3 class="mt-5 text-dark px-md-4" style="">{{category.name}}</h3>  
            </div>

            <div style="background-color:#F59DA4 ;height: 0px;" class="w-50 text-center bg-info bg-gradient overflow-hidden see-more-box top-0 start-50 position-absolute">
                <router-link :to="`/category-show/${category.id}`">
                     <button class="btn top-50  btn-seemore text-dark fs-5 border  px-3 ">see more</button>
                </router-link>
                
            </div>
           
        </section>
    </div>
    </div>
</template>

<style scoped>
.btn-seemore{
    transition: all 1s;
}
.btn-seemore:hover{
    background-color: #8a4af3 !important;
    color: #fff !important;
    margin-top:-4px !important;
    border:none !important;
}
.see-more-box{
    transition: height 2s;
}
.hover-see-more img{
    transition: opacity 2s;
}
.hover-see-more:hover img{
    opacity: 0.4;
}
.hover-see-more:hover .see-more-box{
    height: 100% !important;
}
.category-fl{
    font-size: 80px !important;
    color: #8a4af3;
    transform: translateY(10px);
    animation: fade 5s  infinite  ease-in-out;
}

@keyframes fade {
    0%{opacity: 0;}
    /* 60%{opacity: 0.5;} */
    100%{opacity: 1}
}

</style>