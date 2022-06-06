<script>
export default{
    methods:{
        closeannounce(){
            this.$emit('close-announce', true)
        }
    }
}
</script>

<template>
    <div>
        <!-- announcedisplaycomponent -->
        <div class="text-white text-center fs-4" style="background-color:#8a4af3">
            <p class="d-inline-block pt-2 mx-3">Hurry Up 50% off Sale</p>
            <svg role="button" @click="closeannounce" xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg>
        </div>
    </div>
</template>