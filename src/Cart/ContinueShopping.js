import { useNavigate } from "react-router-dom";
import './Cart.css';

const ContinueShopping = () => {

    const navigate = useNavigate();
    const navigateTo = () => {
        navigate('/shop'); 
        }
    return(
        <div className='icon-cart'>
            <button className='btn-cart-box' onClick={navigateTo}>
                CONTINUE SHOPPING
            </button>
            
        </div>
    )
}
export default ContinueShopping;