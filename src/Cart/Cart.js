import { useSelector } from 'react-redux';
import image from '../Assets/icons-cart.png'
import CartItem from './CartItem';
import { getCartItems } from '../redux/cartSlice';
const Cart = () =>{
    const cartItems = useSelector(getCartItems)


    return(
        <div>
            <img src={image} alt='icon'/>
            {cartItems.map(cartItem => <CartItem cartItem={cartItem}/>)}
            

        </div>
    )
}
export default Cart;