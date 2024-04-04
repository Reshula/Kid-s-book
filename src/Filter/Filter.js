import { useSelector } from "react-redux";
import { getSelectedCategory } from '../redux/booksSlice';


const Filter = ({ category}) =>{
    
    
    const selectedCategory = useSelector(selectedCategory)
    return(

        <div >
           <p className={selectedCategory === category ? 'categoryButtonSelected' : 'categoryButton'}>{category}</p>
        </div>
    )
}
export default Filter;