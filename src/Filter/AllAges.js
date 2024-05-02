import Filter from './Filter';

import 'aos/dist/aos.css';
const AllAges = () =>{
     
    return(
        <div className="age-block" data-aos="zoom-out"  >

        {['AGE up 2', 'AGE 3-5','AGE 6-8','AGE 9-12','ALL AGES'].map((category, index) => <Filter key={index}  category={category}/>)}
 
        </div>
    )
}
export default AllAges;