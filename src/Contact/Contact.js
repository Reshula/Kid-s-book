import ContactForm from "./ContactForm";
import './Contact.css';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Contact = () =>{
    useEffect(() => {
        AOS.init();
      }, [])
      AOS.init({
        duration: 3000,
      })

    return(
        <div>
           
      
         
            <h2 className="contact" data-aos="fade-up">Contact with us</h2>
      
     
            
       
        <ContactForm/>
        
        
        
        
        </div>
    )
}
export default Contact;