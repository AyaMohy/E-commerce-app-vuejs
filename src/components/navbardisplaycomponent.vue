<script>
export default{
    props:{
        
    },
    methods:{
        registeruser(){

        },
        signinuser(){

        }
    }
}
</script>
<template>
    <div class="shadow-lg">
        <!-- navbardisplaycomponent -->
        <section class="d-flex py-3 justify-content-between px-5">
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
            <div class="col-4 text-center fs-5 fw-bold">Winter Kings</div>
            <div class="col-4 text-end ">
                <button class="btn fs-5 btn-hover" @click="registeruser">Register</button>
                <button class="btn fs-5 btn-hover" @click="signinuser">Sign in</button>
                <button type="button" class="btn btn-white position-relative">
                    <span style="height:30px; width:30px;line-height:30px" class="position-absolute d-inline-block top-0 start-100 translate-middle badge rounded-pill bg-dark">
                        {{0}}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#8a4af3" class="bi bi-cart-dash-fill" viewBox="0 0 16 16">
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM6.5 7h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1z"/>
                    </svg>
               
                </button>
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