import { createSlice } from '@reduxjs/toolkit'

export const CartSlice = createSlice({
  name: 'cart',
  initialState:[],
  
  reducers: {
    addToCart: (state,action) => {
      
      var flag=true;
      for(var x=0 ;x<state.length;x++){
          if(state[x].item.id==action.payload.id){
            state[x].qty++;
            flag=false;
            break;
          }
      }
      if(flag){
        const cartItem={ item: action.payload, qty:1}
          state.push(cartItem);
      }
    },
    removeFromCart: (state,action) => {
      return state.filter((i)=>i.item.id !== action.payload);
    },
  },
})

export const { addToCart, removeFromCart } = CartSlice.actions

export default CartSlice.reducer
