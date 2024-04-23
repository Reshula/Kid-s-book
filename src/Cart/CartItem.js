import { dataBooks } from "../Data/dataBooks";

const CartItem = ({cartItem}) =>{
    console.log(cartItem)
    const books = dataBooks.find(item => item.title === cartItem.bookId)

    return(
       
        <div>
            <img  src={`../${books.image}.jpg` }/>
        <p> {books.name}</p>
        <p> {cartItem.quantity} book</p>

        </div>
    )
}
export default CartItem;