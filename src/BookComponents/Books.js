import { dataBooks } from '../Data/dataBooks';
import Book from './Book';
import { useSelector } from "react-redux";
import { getSelectedCategory } from '../redux/booksSlice';


const Books =() =>{
    
    const selectedCategory = useSelector(getSelectedCategory)


    return(
        <div className='book-container'>
            {dataBooks
            .filter(book =>{
                if ( selectedCategory === 'ALL AGES') return true;
                return selectedCategory === book.category;
            }
                )
            .map(book => <Book key={book.id} book={book}/>)}

        </div>
    )
}
export default Books;