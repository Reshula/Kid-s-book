
import { Link } from "react-router-dom";
import './Componets.css';
import videoBg from '../Assets/videoBg.mp4';
import imageBg from '../Assets/backgraundBook.jpg';
import Slider from './Slider';
// import Footer from "./Footer";
import { dataSlideBookOne } from '../Data/dataSlideBookOne';
import { dataSlideBookTwo } from '../Data/dataSlideBookTwo';
import { dataSlideBookThree } from '../Data/dataSlideBookThree';


const Home = () =>{
    return(
        <div >
            <div className="container">
               <video src={videoBg} autoPlay loop muted/>
            </div>   
        <div className="container-block">
           
            <div className="block">
            <h3>More books, more smiles</h3>
               <div className="block-age">
                <div className="age-Up2">
                   <p>Ages up 2</p>
                   </div>
                   <div className="age-9-12">
                   <p>Age 9-12</p>
                   </div>
                </div>
                <div className="block-age">
                    <div className="age-3-5">
                    <p>Age 3-5</p>
                    </div>
                    <div className="age-6-8">
                    <p>Age 6-8</p>
                    </div>
                </div>
                
                <div className="block-button">
                    <nav>
                    <Link to="/shop" className="button">Shop now</Link>  
                    </nav>
                </div>
                
            </div>
            <picture>
            <img className="imageBg" src={imageBg} alt='book'/>
            </picture>
        </div>
        <div className='slide-container'>
         <Slider  data={dataSlideBookOne} />
         <Slider  data={dataSlideBookTwo} />
         <Slider data={dataSlideBookThree} />
     </div>
     {/* <Footer/> */}
 
    </div>
    );
}

export default Home;