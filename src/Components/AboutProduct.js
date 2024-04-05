import { dataBooks } from "../Data/dataBooks";
import { useParams, useNavigate } from "react-router-dom";
const AboutProduct = (book) =>{
    const navigate = useNavigate();
    const { title } = useParams()

    return(
        <div>
            {dataBooks.filter((book) => book.title === title).map((elem, index) =>{
                return(
                    <div key={index}>
                        <p>{elem.name}</p>
                        <img 
                        src={elem.img}
                        alt='book'/>
                        <button onClick={() => navigate(-1)}> GO BACK</button>
                    </div>
                );
            })}
        </div>
    );
}
export default AboutProduct;