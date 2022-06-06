<script setup>
import { RouterLink, RouterView } from 'vue-router'
import announcedisplaycomponent from './components/announcedisplaycomponent.vue'
import navbardisplaycomponent from './components/navbardisplaycomponent.vue'
import footercomponent from "./components/footercomponent.vue"
import { ref } from 'vue';
let closeannounce=ref(false)

function hideannounce(status){
  closeannounce.value =status
}

</script>

<template>
  <header>
   <announcedisplaycomponent @close-announce="hideannounce" v-if="!closeannounce"/>
   <navbardisplaycomponent/>
  </header>

  <RouterView />
  <footercomponent/>
</template>

<style>
@import '@/assets/base.css';


</style>
