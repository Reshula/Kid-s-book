import ChangeQuantity from "../Cart/ChangeQuantity";

const Book = ({book}) =>{
 
    return(
    <div>
                <img className="book-img" src={`./${book.image}.jpg`} alt='book'/>  
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