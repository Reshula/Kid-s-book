import { useState } from 'react';
import Canada from '../Assets/Canada.png';
import CanadaMost from '../Assets/CanadaMost.png'

const About = () =>{
    const par =' While we’re not the type of company who likes to stand on the rooftop and shout out the ways we support our communities, we are proud of the number of lives we’ve been able to impact through our contributions and book donations to literacy and education programs.Each month, we review dozens of donation requests from incredible individuals and organizations worldwide doing their part in Enchanting the Minds within their community. Below is a list of only some of the organizations that we have supported through financial contribution or with books and other product donations:';
    const [showMore, setShowMore] = useState(false)
    return(
        <div className='main-about'>
            <div>
            <h1>Who we are</h1>
            <span>
                <h2>Our Purpose</h2>
            </span>
            </div>
            <div>
                <p className='par'><strong> Enchanting the mind one book at a tim </strong>  is our core focus at KidsBooks. It’s the passion behind everything we do. We believe we’re not just selling books; we’re impacting the lives of millions of people, both locally and across the globe, by making books more accessible to everyone. With reading comes learning, and the more we learn the greater the impact we can all make. </p>
            </div>
            <div><h2>Our Impact</h2></div>
            <div>
                <span>
                <p className='par'>{ showMore ? par : par.substring(0,50) + "....."} 
                <button className='btn-Par' onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</button>
           
                </p></span>
</div>
            <div>
                <h2>Recognition</h2>
            </div>
            <p className='par'>A little acknowledgement is always nice, and we couldn’t be prouder to be recognized as one of Canada’s Best Managed Companies. Not only does it recognize overall business performance and sustained growth, it recognizes the efforts of our entire organization.</p>


        <div className='div-about'>
            <img src={Canada} alt="logo" width="120px"/>
            <img src={CanadaMost} alt="logo" width="120px"/>
        </div>
        </div>
    )
}
export default About;

