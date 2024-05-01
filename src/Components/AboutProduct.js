import { dataBooks } from "../Data/dataBooks";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { addItemToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
const AboutProduct = () =>{
    const navigate = useNavigate();
    const  { title }  = useParams();
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    return(
        <div>
            {dataBooks.filter((book) => book.title === title ).map((elem, index) =>{
                return(
                    <div className="div-main" key={index}>
                        <div className="div-left">
                         <img className="img-container"
                        src={`../${elem.image}.jpg`}
                        alt='book'/>
                        </div>
                        <div className="div-right">
                        <h2>{elem.name}</h2>
                        <hr/>
                        <p>by <strong>{elem.author}</strong></p>
                       <p>Price:<strong>$ {elem.price}</strong></p>
                       <h4>About</h4>
                       <p>{elem.describe}</p>
                       
                   <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>

                   <button onClick={() => {dispatch(addItemToCart({
                    id: elem.id,
                    img: elem.image,
                    price: elem.price,
                    quantity}))}} 
                    className="add-to-cart"> Add to cart</button>

                       <button onClick={() => navigate(-1)} className="btn-go-back"> GO BACK</button>
                       </div>
                    </div>
                );
            })}
        </div>
    );
}
export default AboutProduct;