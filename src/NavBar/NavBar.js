import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Hamburger from 'hamburger-react';
import logo from '../Assets/kb-logo.svg';
import image from '../Assets/icons-cart.png';
import { useSelector } from 'react-redux';
import { getTotalArticles } from '../redux/cartSlice';
import './NavBar.css'


const NavBar =() =>{
  const [isOpen, setIsOpen] = useState(false);
  const [cartContainer, setCartContainer] = useState(false);
  const [fixNav, setFixNav] =useState(false);

  const setFixNavbar = () => {
    if (window.scrollY > 0 ) {
      setFixNav(true);
    }
    else setFixNav(false)
  }

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    window.addEventListener("scroll", setFixNavbar);
    return () => window.removeEventListener("scroll", setFixNavbar);
  }, []);
  const totalItems = useSelector(getTotalArticles);
  const openCart = () => {
    setCartContainer(!cartContainer)
  }

 
    return(
        <div className={fixNav ? 'header fixed' : 'header'}>
           
            <div className='container-main'>
              <div className='container-logo'>
               <img className="logo" src={logo} alt="logo"/>
               <h2>Big adventures. Small prices.</h2>
              </div>
              <div className='conatiner-cart'>
               <NavLink to="/cart">     <img src={image} alt='icon'/>
               {totalItems > 0 &&
              <span onClick={() => openCart()} className='totalItemsCart'>{totalItems}</span>
              }
               </NavLink>
               <Hamburger color="#6bc9c8" toggled={isOpen} toggle={toggleNavbar }/>
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