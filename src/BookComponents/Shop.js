import './Book.css';
import React from 'react';
import Books from './Books';
import AllAges from '../Filter/AllAges';


const Shop = ()=>{

    

return(
    <div>
       <AllAges/>
      
        {/* <div className="age-block">
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
        </div> */}
        <div>
            <h2>Online Discount Bookstore Selection</h2>
        </div>

   
        <Books/>


    </div>
)

}
export default Shop;