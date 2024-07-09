import {createSlice} from "@reduxjs/toolkit"

const CartSlice = createSlice({
    name:"Cart",
    initialState:[],
    reducers:{
        addTocart:( state , action) =>{  
            const exitingitem = state.find(
                (item)=> item.id === action.payload.id
            );
            if(exitingitem)
                {
                  return state.map((item)=>
                   item.id === action.payload.id ? { ...item ,qty:item.qty + 1}:item
                );
                }
            else{
               state.push(action.payload);
            }
        },
        removeTocart:(state,action) => {
            return state.filter((item) => item.id !== action.payload.id);
        },
        increment: (state,action) =>{
            return state.map((item) =>
            item.id === action.payload.id ? {...item , qty:item.qty+1}:item
            )
        },
        decrement:(state,action) =>{
            return state.map((item) => 
              item.id === action.payload.id ? {...item, qty:item.qty-1}:item
            )
        }
    }
})
export const {addTocart,removeTocart,increment,decrement} = CartSlice.actions
export default CartSlice.reducer;