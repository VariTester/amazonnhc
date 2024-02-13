import "./ContactFormStyles.css";
import React, {useRef} from "react";
import emailjs from '@emailjs/browser';
// import { useForm } from "react-hook-form";

function ContactForm(){

    // const {register, handleSubmit} = useForm();
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_sscuyur', 'template_567amfp', form.current, {
        publicKey: 'RDaj7IbvCZ2gAJhjL',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  
    return(
        <div className="form-container">
            <h1>Send a message to us!</h1>
            <form ref={form} onSubmit={sendEmail}>
                <input placeholder="Name" type="text" name="user_name"/>
                <input placeholder="Email" type="email" name="user_email"/>
                <input placeholder="Phone Number" type="number" name="user_phone"/>
                <input placeholder="Country" type="text" name="user_country"/>
                <textarea placeholder="Message" name="message" rows="4"/>
                <button>Send Message</button>
            </form>
        </div>

    //     <form ref={form} onSubmit={sendEmail}>
    //     <label>Name</label>
    //     <input type="text" name="user_name" />
    //     <label>Email</label>
    //     <input type="email" name="user_email" />
    //     <label>Message</label>
    //     <textarea name="message" />
    //     <input type="submit" value="Send" />
    //   </form>
    )
}

export default ContactForm