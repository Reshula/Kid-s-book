import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import { getCartItems , getTotalPrice} from '../redux/cartSlice';
import ContinueShopping from './ContinueShopping';
const Cart = () =>{
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice)


    return(
        <div className='cart-container'>
            <div  className='cart-block'>
            <h3 className='cart-title'>Your Shopping Cart</h3>
           
                <h3 className="totalPrice">{totalPrice === 0 ? 'Cart is empty' 
                    : `Total: $${totalPrice.toFixed(2)}`}</h3>
                    {cartItems.map((cartItem, id )=> <CartItem key={id} cartItem={cartItem}/>)}    
            </div>
            <div className='icon-cart'>
                {totalPrice === 0 && <ContinueShopping /> }
            </div>

            

        </div>
    )
}
export default Cart;