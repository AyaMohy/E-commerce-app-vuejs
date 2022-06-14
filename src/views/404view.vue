<template>
    <div class="mx-5 my-5 bg-secondary p-5">
        <section class="d-flex flex-column flex-md-row">
            <div><img class="img-fluid" src="../../public/oops.png" width="300" alt=""></div>
            <div class="text-white flex-fill text-md-center" style="border-top-left-radius: 70%;border-top-right-radius: 70%;">
                <h3 class="pt-5">Oops!!</h3>
                <h5>Somethings Went Wrong.</h5>
                <button @click="$router.go()" class="btn fs-5 rounded-pill mt-4 btn-outline-light  px-3">Try Again</button>
            </div>
        </section>
     
    </div>
</template>