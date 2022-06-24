import { ADD_DISHES, SHOW_MODAL,CLOSE_MODAL } from "../constants"

const initialDishes = [{
    id:1,
    dishName:'Pork',
    disc:'sfdjfkjkdsf',
    instruction:'cook the pork cook the porkcook the pork cook the pork',
    
},
{
    id:2,
    dishName:'Steak',
    disc:'sfdjfkjkdsf',
    instruction:'cook the pork cook the porkcook the pork cook the pork',
    
}
]
var GLOBAL_ID = 3;
export default function recipe(state = initialDishes,action){
    
    switch(action.type){
        case ADD_DISHES:
            const obj = {
                id:GLOBAL_ID++,
                dishName:action.payload.dishName,
                disc:action.payload.disc,
                instruction:action.payload.instruction,
                
            }
            console.log("reducer");
            console.log(state);
            return [...state,obj];
        
        default:
            return state;
    }
    
}