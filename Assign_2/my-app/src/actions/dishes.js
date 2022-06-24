import { ADD_DISHES } from "../constants"
let idd = 1; 
export const dishAdd = (dishName,disc,instruction)=>{
   return {
    type:ADD_DISHES,
    payload:{
        id:idd++,
        dishName,
        disc,
        instruction}
   }
}