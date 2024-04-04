import { NavLink } from 'react-router-dom';
import logo from '../Assets/kb-logo.svg';
import image from '../Assets/icons-cart.png'
import './NavBar.css'


const NavBar =() =>{
    return(
        <div>
            <nav>
                <div className='container-main'>
            <div className='container-logo'>
               <img className="logo" src={logo} alt="logo"/>
               <h2>Big adventures. Small prices.</h2>
               </div>
               <NavLink to="/cart">     <img src={image} alt='icon'/></NavLink>
               </div>
            <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/shop">Shop by age</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          
            </ul>
            </nav>

        </div>
    )
}
export default NavBar;