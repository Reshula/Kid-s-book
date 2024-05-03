
import { Link } from "react-router-dom";
import './Componets.css';
import videoBg from '../Assets/videoBg.mp4';
import imageBg from '../Assets/backgraundBook.jpg';
import Slider from './Slider';
import { dataSlideBookOne } from '../Data/dataSlideBookOne';
import { dataSlideBookTwo } from '../Data/dataSlideBookTwo';
import { dataSlideBookThree } from '../Data/dataSlideBookThree';
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect  } from "react";


const Home = () =>{
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <div >
            <div className="container">
               <video src={videoBg} autoPlay loop muted/>
            </div>   
        <div className="container-block">
           
            <div className="block">
            <h3 data-aos="fade-down">More books, more smiles</h3>
               <div className="block-age">
                <div className="age-Up2">
                   <p>Ages up 2</p>
                   </div>
                   <div className="age-6-8">
                   <p>Age 6-8</p>
                   </div>
                </div>
                <div className="block-age">
                    <div className="age-3-5">
                    <p>Age 3-5</p>
                    </div>
                    <div className="age-9-12">
                    <p>Age 9-12</p>
                    </div>
                </div>
                
                <div className="block-button">
                    <nav>
                    <Link to="/shop" >
                    <motion.button whileHover={{scale: 1.05, color: '#6bc9c8'}}  whileTap={{ scale: 0.9 }} className="button">SHOP NOW</motion.button></Link>  
                    </nav>
                </div>
                
            </div>
            <picture>
            <img className="imageBg" src={imageBg} alt='book'/>
            </picture>
        </div>
        <div className='slide-container' data-aos="flip-right">
         <Slider  data={dataSlideBookOne}  index={0}  />
         <Slider  data={dataSlideBookTwo}    index={1} />
         <Slider data={dataSlideBookThree}   index={2} />
     </div>

 
    </div>
    );
}

export default Home;