import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import './Componets.css';



const Slider = ({ data , index}) => {
    const [slideIndex, setSlideIndex] = useState(0);
    const {img}   = data[slideIndex];
   

    const nextSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
    };

    return (
       <div>
        <div className="slider">
            <img className='slide-img' src={`../${img}.jpg`} alt='book'/>
            <BsChevronCompactLeft onClick={prevSlide} className='left-btn-one-two-three' />
            <BsChevronCompactRight onClick={nextSlide} className='right-btn-one-two-three'/>
     
        </div>
  
        </div>
     
      
  
    );

};
export default Slider;