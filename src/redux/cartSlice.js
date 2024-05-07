import { createSlice } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';

export const slice = createSlice({
    name:'cart',
    initialState :{
        cartItems :[]
    },
    reducers: {
        addItemToCart : (state, action) =>{
            const timeId = new Date().getTime()
            
            state.cartItems.push({
                id: timeId,
                bookId: action.payload.id,
                quantity: action.payload.quantity,
                totalPrice: action.payload.quantity * action.payload.price,
                
            })
        },
   
        

        removeItemFromCart: (state, action) => {
            const { cartItemId } = action.payload;
          
            // Filter out the item to remove
         
          
            Swal.fire({
              title: "Are you sure?",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!"
            }).then((result) => {
              if (result.isConfirmed) {
                state.cartItems = state.cartItems.filter(
                  cartItem => cartItem.id !== cartItemId
                );
                // dispatch(removeItemFromCart({ cartItemId }));
                
                Swal.fire({
                  title: "Deleted!",
                  text: "Your item has been removed from the cart.",
                  icon: "success"
                });
              }
       
            });
          }
    },
})
export const getTotalPrice = state =>{
    return state.cart.cartItems.reduce((total,cartItems) =>{
        return cartItems.totalPrice + total
    }, 0)
}
export const getTotalArticles = state => {
    return state.cart.cartItems.length 
  };


export const getCartItems = state =>state.cart.cartItems;
export const { addItemToCart ,removeItemFromCart} = slice.actions
export default slice.reducer;