<script setup>
import {quantityincart} from '../stores/store.js';
import { ref } from 'vue';
const cartactive=ref(false)

</script>
<template>
    <div class="shadow-lg">
        <!-- navbardisplaycomponent -->
        <section  class="d-flex flex-wrap shadow-lg  py-3 justify-content-between px-5">
            <div class="col-4">
                <form action="" class="input-group">
                    <label for="" class="me-2 fs-5" style="color:#8a4af3">En</label>
                    <div class="btn-search px-2">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </span>
                        <input type="text" class="border-0 rounded bg-transparent" placeholder="" style="outline:none">
                    </div>
                </form>
            </div>
            <div class="col-12 col-md-3 text-center fs-5 fw-bold"><router-link to="/" class="text-decoration-none">Winter Kings</router-link> </div>
            <div class="col-md-5 text-end ">
                <router-link to="/signup" class="col-12">
                    <button class="btn fs-5 btn-hover" @click="registeruser">Register</button>
                </router-link>
                <router-link to="/login">
                    <button class="btn fs-5 btn-hover" @click="signinuser">log in</button>
                </router-link>
                <router-link to="/wishlist">
                   <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="red" class="bi bi-heart-fill" viewBox="0 0 16 16">
                         <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                   </svg>   
                </router-link>

                <router-link  style="outline:none !important;box-shadow:none !important;" :to= "{name:'cartdisplay'}" type="button" class="mt-5 mt-md-0 btn btn-white position-relative">
                    <span  style="height:32px; width:30px;line-height:30px" class="position-absolute  d-inline-block top-0 start-100 translate-middle badge rounded-pill bg-dark">
                        {{quantityincart.count}}
                    </span>

                    <svg  xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#8a4af3" class="bi bi-cart-dash-fill" viewBox="0 0 16 16">
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM6.5 7h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1z"/>
                    </svg>
               
                </router-link>
            </div>
        </section>
    </div>
</template>

<style scoped>
.btn-search{
    border:1px solid #8a4af3;
    border-radius: 15px;
}

.btn-search:focus-within{
    background: rgba(138, 74, 243, 0.2);
    box-shadow: 0px 0px 5px 1px #8a4af3;
}
.btn-hover:hover{
    color: #8a4af3;
}
</style>


