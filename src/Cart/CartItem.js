import { dataBooks } from "../Data/dataBooks";
import './Cart.css';
import icon from '../Assets/trash--v1.png';
import { useDispatch } from "react-redux";
import { removeItemFromCart } from '../redux/cartSlice'

const CartItem = ({cartItem}) =>{
    
    const book = dataBooks.find(item => item.id === cartItem.bookId);
    const dispatch = useDispatch();

    return(
       
        <div className="cartItem-container">
            <div>
               <img className="cartItem-img" src={`./${book.image}.jpg` } width="100px" alt ="book"/>
            </div>
            <div className="cartItem-block1">

               <p> <strong> {book.name}</strong></p>
               <p> Price: $ {book.price * cartItem.quantity}</p>
               <p> {cartItem.quantity} item(s)</p>
               <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
               <img src={icon} alt="icon" width="20px"/>
               </span>
            </div>
 
        </div>
    )
}
export default CartItem;