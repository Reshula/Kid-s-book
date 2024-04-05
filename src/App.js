
import './App.css';
import React from 'react';
import { BrowserRouter as 
  Router,
  Route, 
  Routes } from 'react-router-dom';
import Home from './Components/Home';
import Shop from './BookComponents/Shop';
import About from './Components/About'
import Cart from './Cart/Cart'
import NavBar from './NavBar/NavBar';
import AboutProduct from './Components/AboutProduct';



function App() {
  return (<Router>
    <NavBar/>
    <Routes>

      <Route path="/" exact element={<Home/>} />
      <Route path="/shop" element={<Shop/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/about/:title" element={<AboutProduct/>} />
      </Routes>  
   
 
  
</Router>
  );
}

export default App;
