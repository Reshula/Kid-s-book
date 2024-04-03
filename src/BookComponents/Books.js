import { dataBooks } from '../Data/dataBooks';
import Book from './Book';
const Books =() =>{





    return(
        <div className='book-container'>
            {dataBooks.map(book => <Book key={book.id} book={book}/>)}

        </div>
    )
}
export default Books;