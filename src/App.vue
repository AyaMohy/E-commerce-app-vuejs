<script >
import { RouterLink, RouterView } from 'vue-router'
import announcedisplaycomponent from './components/announcedisplaycomponent.vue'
import navbardisplaycomponent from './components/navbardisplaycomponent.vue'
import footercomponent from "./components/footercomponent.vue"
// import { ref } from 'vue';
// import { onMounted  } from 'vue' 
// let closeannounce=ref(false)

// function hideannounce(status){
//   closeannounce.value =status
// }

export default{
  data(){
    return{
  closeannounce:false
    }
  
  },
  components:{
    announcedisplaycomponent,
    navbardisplaycomponent,
    footercomponent
  },
  methods:{
    hideannounce(status){
      this.closeannounce=status
    },
    //  handleScroll(event) {
    //   console.log(window.scrollY);
    // }
  },
created() {
    window.addEventListener("scroll", this.handleScroll);
  },
   destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },

}


// onMounted(() => {
//   window.addEventListener("scroll", this.handleScroll);
// })

// function handleScroll(event) {
//       console.log(window.scrollY);
//     }

</script>

<template>
  <header>
   <announcedisplaycomponent @close-announce="hideannounce" v-if="!closeannounce"/>
   <div ><navbardisplaycomponent/> </div>
  </header>
  <div style="margin-top:10px">

  </div>
  <RouterView />
  <footercomponent/>
</template>

<style>
@import '@/assets/base.css';


</style>
