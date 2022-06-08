<script>
import { RouterLink } from "vue-router";
</script>
<template>
    <div>
        <!-- emptycartcomponent -->
         <div class=" text-center py-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="#6C757D" class="bi bi-bag-check-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zm-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
                </svg>
            </div>
            <h3 class="text-center text-muted mb-5">sorry! Your bag is empty</h3>
            <h5 class="text-center"> <router-link to="/" class=" bg-black text-white text-decoration-none py-2 btn-shop-now  px-5">SHOP NOW</router-link></h5>
    </div>
</template>