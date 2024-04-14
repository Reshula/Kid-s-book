import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import './Componets.css';


const Slider = ({ data }) => {
    const [slideIndex, setSlideIndex] = useState(0);
    const {img}   = data[slideIndex];
   

    const nextSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
    };

    return (
        <div className='slide-container'>
        <div >
            <img className='slide-img' src={`../${img}.jpg`} alt='book'/>
            <BsChevronCompactLeft onClick={prevSlide} className='left-btn container'/>
            <BsChevronCompactRight onClick={nextSlide} className='right-btn container'/>
        </div>
     
        </div>
  
    );

};
export default Slider;