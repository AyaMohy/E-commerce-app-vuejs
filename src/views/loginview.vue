<script>
import baseinput from '../components/baseinput.vue'
import { Field, Form, ErrorMessage } from 'vee-validate';
export default{
    components:{
        baseinput,
          Field,
        Form,
        ErrorMessage,
    },
    data(){
        return{
            event: {
                pass: '',
                email:'',
            }
       
      
        }
    },
    methods:{
        bookuser(){
            // alert("hello")
        },
         isRequired(value) {
        if (value && value.trim()) {
                return true;
            }
            return 'This is required';
            },
            updateeventdata(value){
                this.event.title=value
            }
    }
}
</script>
<template >
    <div style="background-color:#8a4af3" class="py-5 ">
        <!-- loginview -->
        <!-- <form  @submit.prevent="bookuser" >  -->
        <!-- <baseinput 
            class="form-control" 
            id="title"
            type="text"
            v-model="event.title"
            label="Title" modelvalue="aya" name="Title" 
            @update="updateeventdata" 
        /> -->
          <!-- <baseinput 
            class="form-control" 
            type="email"
            v-model="event.email"
            label="Email" @update="updateeventdata" modelvalue="aya@gmail.com" name="Email" 
        />
        <button  class="btn">log</button> -->
        
        <!-- </form> -->

         <Form  class="mx-auto" style="width:900px">
            <div class="container bg-white rounded-3 shadow text-center border-info   col-12 col-md-8 col-lg-7" style="height:610px; ">
                
                <h2 class="pt-5 signheader">Log iN</h2>
                <p>Already have an account?<br/> Enter your email address and password</p>
                <h4 class="pb-4 text-secondary">* indicates a required field</h4>
                <div class="input-group">
                    <label class="form-label col-12 text-primary col-lg-4 fs-5" for="username">Your email  *</label>
                    <baseinput 
                        :rules="isRequired"
                        class="form-control border border-0 fs-5"
                        id="email"
                        type="text"
                        v-model="event.username"
                        label="xyz@gmail.com" modelvalue="" name="email" 
                        @update="updateemail" 
                    />
                    
                    <!-- <Field :rules="isRequired" name="username" style="background-color:#E8F0FE" class="form-control form-control border border-0 fs-5" type="text" id="username"/>
                    <ErrorMessage class="text-danger " name="username"/> -->
                </div>

                <div class="input-group mt-3">
                    <label class="form-label text-primary col-12 col-lg-4 fs-5" for="password">Your password *</label>
                    <baseinput 
                        :rules="isRequired"
                        class="form-control border border-0 fs-5"
                        id="pass"
                        type="password"
                        v-model="event.pass"
                        label="" modelvalue="" name="pass" 
                        @update="updatepass" 
                    />
                    
                    <!-- <Field :rules="isRequired" name="pass" style="background-color:#E8F0FE" class="form-control border border-0 fs-5" type="password"  id="password"/> -->
                    <!-- <ErrorMessage class="text-danger" name="pass"/> --> 
                </div>
                <button class="btn text-white mt-2 text-uppercase fs-4 col-5 border rounded-3" style=" background-image: linear-gradient(rgb(0, 212, 244), #8a4af3);">login</button><br/>
                <button style="color:#8a4af3"  class="btn fw-bold text-decoration-underline">forgot your password</button>
                <!-- create new account -->
                <div>
                    <p>No account yet?
                        <router-link to="/signup">
                            <button style="color:#8a4af3" class="btn fw-bold text-decoration-underline">Register now</button>
                        </router-link>
                        
                    </p>
                </div>
            </div>
        </Form>
    </div>
</template>
<style scoped>
.signheader{ 
       background-image: linear-gradient(to right,#E91977 20%,rgb(0, 212, 244), white);
   -webkit-background-clip: text;
     -webkit-text-fill-color: transparent;
}
</style>