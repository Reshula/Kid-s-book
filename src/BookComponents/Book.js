import { Link } from 'react-router-dom';

const Book = ({book}) =>{
  
 
    return(
    <div>
              <Link to={`/store/${book.title}`}>
                <img className="book-img" src={`./${book.image}.jpg`} alt='book'/> 
              </Link>           
              
       
        </div>    
       
    )
}
export default Book;