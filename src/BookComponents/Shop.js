import './Book.css';
import React from 'react';
import Books from './Books';
import AllAges from '../Filter/AllAges';
import { TypeAnimation } from 'react-type-animation';


const Shop = ()=>{
return(
    <div>
       <AllAges/>
        <div className='type'>
            <TypeAnimation 
            sequence={[
                'Online Discount Bookstore Selection...',3000
            ]}
            speed={50}
            style={{ fontSize: '2em' }}
            repeat={Infinity}
            />
        </div>
        <Books/>
    </div>
)

}
export default Shop;