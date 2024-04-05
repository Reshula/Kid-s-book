import ChangeQuantity from "../Cart/ChangeQuantity";
import { Link } from 'react-router-dom';

const Book = ({book}) =>{
 
    return(
    <div>
              <Link to={`/about/${book.title}`}>
                <img className="book-img" src={`./${book.image}.jpg`} alt='book'/> 
              </Link>           
                 <div className="book-info">
                   <p>{book.name}</p>
                   <p> {book.price}</p>
                   <ChangeQuantity/>
                   <button className="add-to-cart"> Add to cart</button>
                 </div>
       
        </div>    
       
    )
}
export default Book;