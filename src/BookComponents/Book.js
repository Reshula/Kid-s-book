
const Book = ({book}) =>{
 
    return(
    <div>
                <img className="book-img" src={`./${book.image}.jpg`} alt='book'/>  
                 <div className="book-info">
                   <p>{book.name}</p>
                   <p> {book.price}</p>
                   <button>How many books?</button>
                   <button className="add-to-cart"> Add to cart</button>
                 </div>
       
        </div>    
       
    )
}
export default Book;