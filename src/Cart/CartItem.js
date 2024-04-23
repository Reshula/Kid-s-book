
const CartItem = ({cartItem}) =>{
    console.log(cartItem)

    return(
       
        <div>
         <p>   {cartItem.quantity} book(s)</p>

        </div>
    )
}
export default CartItem;