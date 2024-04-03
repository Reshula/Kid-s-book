import React from "react";
import './Componets.css';
import videoBg from '../Assets/videoBg.mp4';
import logo from '../Assets/kb-logo.svg';
import imageBg from '../Assets/backgraundBook.jpg';


const Home = () =>{
    return(
        <div className="main">
            <div className="container">
               <img className="logo" src={logo} alt="logo"/>
               <h2>Big adventures. Small prices.</h2>
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
               
                    <button className="button">Shop now</button>
                 
                    </nav>
                </div>
                
            </div>
            <picture>
          
            <img className="imageBg" src={imageBg} alt='book'/>
            </picture>
           
        </div>
         
            
        </div>
    )
}
export default Home;