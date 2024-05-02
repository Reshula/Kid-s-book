import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import logo from '../Assets/kb-logo.svg';
import image from '../Assets/icons-cart.png'
import './NavBar.css'


const NavBar =() =>{
  const [isOpen, setIsOpen] = useState(false);
  // const handleShowNavbar = () => {
  //   setIsOpen(!setIsOpen)
  // } onClick={handleShowNavbar}
 
    return(
        <div >
           
            <div className='container-main'>
              <div className='container-logo'>
               <img className="logo" src={logo} alt="logo"/>
               <h2>Big adventures. Small prices.</h2>
              </div>
              <div className='conatiner-cart'>
               <NavLink to="/cart">     <img src={image} alt='icon'/></NavLink>
               <Hamburger color="#6bc9c8" toggled={isOpen} toggle={setIsOpen}/>
               </div> 
            </div>
            <nav    className={`nav-elements ${isOpen ? 'open' : ''}`} >
            {isOpen && (
            <ul>
            <li>
              <NavLink  to="/" className='burger-menu' >Home</NavLink>
            </li>
           
            <li>
              <NavLink to="/shop" className='burger-menu'>Shop by age</NavLink>
            </li>
            <li>
              <NavLink to="/about" className='burger-menu'>About</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className='burger-menu'>Contact</NavLink>
            </li>
          
            </ul>
            )}
            </nav>
            
          
         

        </div>
    )
}
export default NavBar;