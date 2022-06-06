<script>
import slides from './slides.json'

export default{
    data(){
        return{
            slides:slides.slides,
            index:2
        }
    },
    computed:{
        selectedslider(){
            return this.slides.find( (item,index)=>index==this.index)
        },
      
    },
    methods:{
          previousslide(){
            if(this.index ==0) this.index=this.slides.length-1
            else this.index --
           
        },
        nextslide(){
          if(this.index ==this.slides.length-1) this.index=0
            else this.index ++  
        }
    }
}
</script>
<template>
    <div>
        <!-- carouselcomponent -->
        <section class="mx-5 my-5 positin-relative"  :style="{'backgroundColor':selectedslider.backgroundcolor}" style="height:500px">
        <img width="600" class="h-100 img-fluid" :src="selectedslider.image" style="object-position: 70% 50%;object-fit: cover;" alt="">
        <div class="position-absolute  h-100 top-0 w-50 start-50">
            <div class="d-flex  align-items-center h-100   " >
                <div class=" h-50 pt-3">
                    <h3 class=" ">{{selectedslider.conttent.h4}}</h3>
                    <p>{{selectedslider.conttent.p}}</p>
                     <button class="btn btn-shop fs-5 text-white position-absolute top-50 mt-4" style="background-color:#8a4af3">Shop now</button>
                </div>
            </div>
        </div>
        <!-- left arrow -->
        <button @click="previousslide" class="position-absolute btn-arrow btn start-0 top-50 rounded-end p-3 bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
                <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
            </svg>
        </button>
        <!-- right arrow -->
        <button @click="nextslide" class="position-absolute btn-arrow btn top-50 end-0 rounded-start p-3 bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
            </svg>
        </button>
        </section>

    </div>
</template>

<style scoped>
.btn-arrow:focus{
    box-shadow: none !important;
}

.btn-arrow:hover{
    background-color: rgb(12, 12, 12) !important;
    color: white !important;
}

.btn-shop{
    transition: all 1s;
}
.btn-shop:hover{
    background-color: white !important;
    color: #8a4af3 !important;
    margin-top:-4px !important;
}
</style>