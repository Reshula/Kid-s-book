import { dataBooks } from "../Data/dataBooks";
import { useParams, useNavigate } from "react-router-dom";
const AboutProduct = () =>{
    const navigate = useNavigate();
    const { title } = useParams()

    return(
        <div>
            {dataBooks.filter((book) => book.title === title).map((elem, index) =>{
                return(
                    <div key={index}>
                         <img 
                        src={`../${elem.img}.jpg`} 
                        alt='book'/>
                        <p>{elem.name}</p>
                       <p>{elem.category}</p>
                       <p>{elem.price}</p>
                        <button onClick={() => navigate(-1)}> GO BACK</button>
                    </div>
                );
            })}
        </div>
    );
}
export default AboutProduct;