
const Book = ({book}) =>{
  console.log(book)


    return(
    <div>
         
       
                <img className="book-img" src={`./${book.image}.jpg`} alt='book'/>  
                 <div className="book-info">
                   <p>{book.name}</p>
                   <p> {book.price}</p>
                 </div>
       
        </div>    
       
    )
}
export default Book;