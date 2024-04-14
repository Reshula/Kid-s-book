import './Book.css';
import React from 'react';
import Books from './Books';
import AllAges from '../Filter/AllAges';


const Shop = ()=>{
return(
    <div>
       <AllAges/>
        <div>
            <h2>Online Discount Bookstore Selection</h2>
        </div>
        <Books/>
    </div>
)

}
export default Shop;