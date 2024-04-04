import React, { useState } from "react";
import { Link } from "react-router-dom";
import { dataSlideBookOne } from '../Data/dataSlideBookOne';
import { dataSlideBookTwo } from '../Data/dataSlideBookTwo';
import { dataSlideBookThree } from '../Data/dataSlideBookThree';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import './Componets.css';
import videoBg from '../Assets/videoBg.mp4';
import imageBg from '../Assets/backgraundBook.jpg';


const Home = () =>{
 
   
 
    const [slideOne, setSlideOne] = useState(0);
    const { image } = dataSlideBookOne[slideOne];

    const [slideTwo, setSlideTwo] = useState(0);
    const { img } = dataSlideBookTwo[slideTwo];

    const [slideThree, setSlideThree] = useState(0);
    const { pic } = dataSlideBookThree[slideThree]
 
    const nextSlideOne = () => {
        setSlideOne((slideOne =>{
            slideOne ++;
            if (slideOne > dataSlideBookOne.length -1){
                slideOne=0
            }
            return slideOne;
        }))
      };
    const prevSlideOne = () =>{
        setSlideOne((slideOne =>{
            slideOne --;
            if (slideOne <0){
                return dataSlideBookOne.length-1
            }
            return slideOne;
        }))
    }  
    
    const nextSlideTwo = () => {
        setSlideTwo((slideTwo =>{
            slideTwo ++;
            if (slideTwo > dataSlideBookTwo.length -1){
                slideTwo=0
            }
            return slideTwo;
        }))
      };
    const prevSlideTwo = () =>{
        setSlideTwo((slideTwo =>{
            slideTwo --;
            if (slideTwo <0){
                return dataSlideBookTwo.length-1
            }
            return slideTwo;
        }))
    }  
    const nextSlideThree = () =>{
        setSlideThree((slideThree =>{
            slideThree ++;
            if (slideThree > dataSlideBookThree.length-1){
                slideThree=0
            }
            return slideThree
        }))
    };
    const prevSlideThree = () =>{ 
        setSlideThree((slideThree =>{
            slideThree --;
            if (slideThree <0){
           return dataSlideBookThree.length-1
         }
         return slideThree
        }))
       
    }
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
                    <Link to="/store" className="button">Shop now</Link>  
                    </nav>
                </div>
                
            </div>
            <picture>
          
            <img className="imageBg" src={imageBg} alt='book'/>
            </picture>
           
        </div>
         
         {/* SLIDES */}

         <div className='slide-container'>
        <div className='slide-two'>
            <img className='slide-img' src={`./${img}.jpg`} alt='book'/> 
<BsChevronCompactLeft onClick={prevSlideTwo} className='left-btn-two container'/>
<BsChevronCompactRight onClick={nextSlideTwo} className='right-btn-two container'/>
        </div>
        <div className='slide-one'>
            <img className='slide-img' src={`./${image}.jpg`} alt='book'/>  
<BsChevronCompactLeft onClick={prevSlideOne} className='left-btn-one container'/>
<BsChevronCompactRight onClick={nextSlideOne} className='right-btn-one container'/>           
        </div>
        <div className='slide-three'>
            <img className='slide-img' src={`./${pic}.jpg`} alt='book'/> 
<BsChevronCompactLeft onClick={prevSlideThree} className='left-btn-three container'/>
<BsChevronCompactRight onClick={nextSlideThree} className='right-btn-three container'/>
        </div>
        </div>
        
    </div>
    );
}

export default Home;