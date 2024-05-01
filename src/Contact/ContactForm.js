import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const ContactForm =()=> {
    useEffect(() => {
        AOS.init();
      }, [])
      AOS.init({
        duration: 3000,
      })


  const [state, handleSubmit] = useForm("meqyevly");
  if (state.succeeded) {
      return <div className="thank-you">Your message has been sent successfully!</div>;
  }
  return (
      <form data-aos="zoom-in-up" className="form" onSubmit={handleSubmit}>
      <label htmlFor="email">
        Your Email
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="email">
       Your Message
      </label>
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className="btn-submit" type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
export default ContactForm;