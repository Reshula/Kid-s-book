import { Link } from 'react-router-dom';

const Book = ({book}) =>{
  
 
    return(
    <div>
              <Link to={`/store/${book.id}`}>
                <img className="book-img" src={`./${book.image}.jpg`} alt='book'/> 
              </Link>           
                 <div className="book-info">
                 </div>
       
        </div>    
       
    )
}
export default Book;