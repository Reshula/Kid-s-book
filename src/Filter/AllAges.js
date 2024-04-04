import Filter from './Filter';
const AllAges = () =>{
     



    return(
        <div className="age-block" >

        {['Age up 2', 'Age 3-5','Age 6-8','Age 9-12','ALL AGES'].map(category =>    <Filter  category={category}/>)}
 
        </div>
    )
}
export default AllAges;