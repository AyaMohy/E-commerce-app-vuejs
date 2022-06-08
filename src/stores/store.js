import { reactive, ref } from "vue";
import products from '../../products.json'
const productapi=reactive(products.products)
const toggleForce = ref(false)
export const quantityincart = ref({
    count:0,
    items:[], 
    increment(itemid,data,quantityofselecteditem){
        // if(toggleForce.value)
        //     { 
        //     let targetindex=this.items.find( (item)=>item.product.id==itemid )
        //     targetindex.quantity +=quantityofselecteditem
        // }else{
            this.items.push({
                            product:data,
                            quantity:quantityofselecteditem
                        }) 
        // }
    },
    increasecount(counter){
        this.count +=counter
    }
    // checkexistance(id){
        // for(let i=0;i<this.items.length;i++){
        //             if(id == this.items[i].product) { 
        //                 toggleForce.value=ref(true)
        //             }else{
        //                 toggleForce.value=ref(false)
        //             }
        // }
        // if(this.items.length>0) return this.items[0].product
        // else return 9
    // }

    // increment(itemid,data,quantityofselecteditem){
    //     if(checkexistance(itemid))
    //      {
    //        let targetindex=this.items.find( (item)=>item.product==itemid )
    //         targetindex.quantity +=quantityofselecteditem
    //     }else{
    //         this.items.push({
    //             product:data,
    //             quantity:quantityofselecteditem
    //         })
    //     }
        
       
    // }
})
// function checkexistance(itemid){
//     for(let i=0;i<quantityincart.value.items.length;i++){
//         if(itemid== quantityincart.value.items[i].product) { 
//             return true
//         }else{

//             return false
//         }
//     }
   
// }


// export const data=ref({
//     quantity:ref(10),

//     countnumber(id){
//         for(let i=0;i<quantityincart.value.items.length;i++){
//             if(id== quantityincart.value.items[i].product) {
//                 this.quantity=quantityincart.value.items[0].product
//                 return this.quantity
//             }else{
//                 this.quantity=quantityincart.value.items[0].quantity
//                 return this.quantity 
//             }
//         } 
//     }
// })
// export function countnumber(id){
//     for(let i=0;i<quantityincart.value.items.length;i++){
//         if(id== quantityincart.value.items[i].product) {
//             return quantityincart.value.items[0].product
//         }else{
//             return quantityincart.value.items[0].quantity
//         }
//     }
    
    // let varia=quantityincart.value.items[0]
    // return varia.product
// }


