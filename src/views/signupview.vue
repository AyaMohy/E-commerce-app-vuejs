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
                username: '',
                email:'',
                pass:''
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
         <Form  class="mx-auto px-5" >
            <div class="container bg-white rounded-3 shadow text-center border-info py-5  col-12 col-md-8 col-lg-7" >
                
                <h2 class="pt-5 signheader">Create Account</h2>
                <p>Already have an account?<br/> Enter your email address and password</p>
                <h4 class="pb-4 text-secondary">* indicates a required field</h4>
                <section>

               
                    <div class="input-group ">
                        <label class="form-label col-12 text-primary col-lg-4 fs-5" for="username">Your Name  *</label>
                        <baseinput 
                            :rules="isRequired"
                            class="form-control border border-0 fs-5"
                            id="username"
                            type="text"
                            v-model="event.username"
                            label="xyz" modelvalue="" name="username" 
                            @update="updateeusername" 
                        />
                        
                        <!-- <Field :rules="isRequired" name="username" style="background-color:#E8F0FE" class="form-control form-control border border-0 fs-5" type="text" id="username"/>
                        <ErrorMessage class="text-danger " name="username"/> -->
                    </div>

                    <div class="input-group  mt-3">
                        <label class="form-label text-primary col-12 col-lg-4 fs-5" for="email">Your Email *</label>
                        <baseinput 
                            :rules="isRequired"
                            class="form-control border border-0 fs-5"
                            id="email"
                            type="email"
                            v-model="event.email"
                            label="xyz@gmail.com" modelvalue="" name="email" 
                            @update="updateemail" 
                        />
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
                </div>
                    <button class="btn text-white mt-2 rounded-pill text-uppercase fw-bold col-5 border rounded-3" style=" background-image: linear-gradient(rgb(0, 212, 244), #8a4af3);">create account</button><br/>
                    <button style="color:#8a4af3"  class="btn fw-bold text-decoration-underline">forgot your password</button>
                    <!-- create new account -->
                    <div>
                        <p>
                            <router-link to="/login">
                                <button style="color:#8a4af3" class="btn fw-bold text-decoration-underline">I already have an account</button>
                            </router-link>
                            
                        </p>
                    </div>
                </section>
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