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
import Contact from './Contact/Contact';
import Subscribe from './Components/Subscribe';
import Footer from './Footer/Footer';



function App() {
  return (<Router>
    <NavBar/>
    <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="/shop" element={<Shop/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/store/:title" element={<AboutProduct/>} />
      </Routes>  
  <Subscribe />
  <Footer />
</Router>
  );
}

export default App;
