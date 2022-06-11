import { reactive, ref,computed } from "vue";
import products from '../../products.json'
const productapi=reactive(products.products)
const toggleForce = ref(false)
export const quantityincart = ref({
    count:0,
    items:[],
    itemswishlist:[],
    // totalprice:ref(0), 
    increment(total,data,quantityofselecteditem){
        // if(toggleForce.value)
        //     { 
        //     let targetindex=this.items.find( (item)=>item.product.id==itemid )
        //     targetindex.quantity +=quantityofselecteditem
        // }else{
            this.items.push({
                            product:data,
                            quantity:quantityofselecteditem,
                            totalprice:quantityofselecteditem* total
                        }) 
        // }
    },
    increasecount(counter){
        this.count +=counter
    },
    gettotalprice(){
       let total=0;
        for(let i=0;i<this.items.length;i++){
            total +=this.items[i].totalprice
        }
        return total
        // this.totalprice=total
        // return total
        // return this.items.reduce((previous,current)=>previous.totalprice + current.totalprice )
     },
     additemstowishlist(item){
        this.itemswishlist.push(item) 
     }

//     gettotalprice:computed( ()=>{
//         return this.items.reduce((previous,current)=>previous.totalprice+ current.totalprice )
//    } )

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


