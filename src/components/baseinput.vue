<script>
import { Field, Form, ErrorMessage } from 'vee-validate';
export default{
    props:{
        label:{
            type:String,
            default:''
        },
        modelvalue:{
            type:[String,Number],
            default:''
        },
        name:{
            type:String,
            default:''
        }
    },
    components: {
        Field,
        Form,
        ErrorMessage,
    },


    
 
}
</script>

<template>
    <div>
       
        <Field 
            style="background-color:#E8F0FE ;" 
            @input="$emit('update',$event.target.value)"
            :value="modelvalue" v-bind="$attrs" 
            :placeholder="label" 
            :name="name"
        />

        <ErrorMessage class="text-danger" style="font-size:16px" :name="name" />
    </div>
</template>