import React, { useState } from "react";
import { dataSlideBookOne } from '../Data/dataSlideBookOne';
import { dataSlideBookTwo } from '../Data/dataSlideBookTwo';
import { dataSlideBookThree } from '../Data/dataSlideBookThree';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import './Componets.css';


const Slider = ({ data }) => {
    const [slideIndex, setSlideIndex] = useState(0);
    const  img  = data[slideIndex];
   

    const nextSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
    };

    return (
        <div>
        <div className='slide-container'>
            <img className='slide-img' src={`./${img}.jpg`} alt='book'/>
            <BsChevronCompactLeft onClick={prevSlide} className='left-btn container'/>
            <BsChevronCompactRight onClick={nextSlide} className='right-btn container'/>
        </div>
        <div>
         <Slider data={dataSlideBookOne} />
         <Slider data={dataSlideBookTwo} />
         <Slider data={dataSlideBookThree} />
     </div>
        </div>
  
    );

};
export default Slider;