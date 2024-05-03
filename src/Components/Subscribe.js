import { useEffect } from "react";
import './Componets.css';
import { useForm } from '@formspree/react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Subscribe = () => {
    useEffect(() => {
        AOS.init();
      }, [])
      AOS.init({
        duration: 2000,
      })



    const [state, handleSubmit] = useForm("meqyevly");
    if (state.succeeded) {
        return <div className="thank-you">Thank you for subscribing!</div>;
      }
    return (
        <div className="subscribe-container"  data-aos="fade-up" >
            <div className="subscribe-title">
                <h2 className='title-subscribe'>Subscribe</h2>
            <p className="subscribe-par">Get timely updates from your favorite books.</p>
            </div>
            <form className="input-container" onSubmit={handleSubmit}>
                <input className="sub-input" id="email" type="email" name="email"
                placeholder="Your email"/>
                <button className="sub-btn" type="submit" disabled={state.submitting}>
                    Send
                </button>
            </form>
        </div>
    )
}
export default Subscribe;