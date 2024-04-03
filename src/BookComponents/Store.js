import './Book.css';
import React , { useState } from 'react';
import {  dataSlideOne } from '../Data/dataSlideOne';
import { dataSlideTwo } from '../Data/dataSlideTwo';
import { dataSlideThree } from '../Data/dataSlideThree';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';


const Store = ()=>{
    const [slideOne, setSlideOne] = useState(0);
    const { image } = dataSlideOne[slideOne];

    const [slideTwo, setSlideTwo] = useState(0);
    const { img } = dataSlideTwo[slideTwo];

    const [slideThree, setSlideThree] = useState(0);
    const { pic } = dataSlideThree[slideThree]
 
    const nextSlideOne = () => {
        setSlideOne((slideOne =>{
            slideOne ++;
            if (slideOne > dataSlideOne.length -1){
                slideOne=0
            }
            return slideOne;
        }))
      };
    const prevSlideOne = () =>{
        setSlideOne((slideOne =>{
            slideOne --;
            if (slideOne <0){
                return dataSlideOne.length-1
            }
            return slideOne;
        }))
    }  
    
    const nextSlideTwo = () => {
        setSlideTwo((slideTwo =>{
            slideTwo ++;
            if (slideTwo > dataSlideTwo.length -1){
                slideTwo=0
            }
            return slideTwo;
        }))
      };
    const prevSlideTwo = () =>{
        setSlideTwo((slideTwo =>{
            slideTwo --;
            if (slideTwo <0){
                return dataSlideTwo.length-1
            }
            return slideTwo;
        }))
    }  
    const nextSlideThree = () =>{
        setSlideThree((slideThree =>{
            slideThree ++;
            if (slideThree > dataSlideThree.length){
                slideThree=0
            }
            return slideThree
        }))
    };
    const prevSlideThree = () =>{ 
        setSlideThree((slideThree =>{
            slideThree --;
            if (slideThree <0){
           return slideThree.length-1
         }
         return slideThree
        }))
       
    }
    

return(
    <div>
      
        <div className="age-block">
            <div className="age-Up2">
                <p>Age Up 2</p>
            </div>
            <div className="age-3-5">
                <p>Age 3-5</p>
            </div>
            <div className="age-6-8">
                <p>Age 6-8</p>
            </div>
            <div className="age-9-12">
                <p>Age 9-12</p>
            </div>
            <div className="age-all">
                <p>All Ages</p>
            </div>
        </div>
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
        <div>
            <h2>Online Discount Bookstore Selection</h2>
        </div>
   
       


    </div>
)

}
export default Store;