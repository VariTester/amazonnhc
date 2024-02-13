import "./ContactFormStyles.css";
import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form";

function ContactForm() {
    const {register, formState:{errors}, handleSubmit, reset} = useForm();
    const [isSuccess, setIsSuccess] = useState(false);
    const form = useRef();

    const sendEmail = (data) => {
        if (Object.keys(errors).length === 0) {
            emailjs
                .sendForm('service_sscuyur', 'template_567amfp', form.current, {
                    publicKey: 'RDaj7IbvCZ2gAJhjL',
                })
                .then(
                    () => {
                        setIsSuccess(true);
                        setTimeout(() => {
                            setIsSuccess(false);
                        }, 3000);
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
            reset();
        }
    }

    return(
        <div className="form-container">
            <h1>Send a message to us!</h1>
            <form ref={form} onSubmit={handleSubmit(sendEmail)}>
                <input placeholder="Name" type="text" {...register('user_name', {
                    required: true,
                    maxLength: 20,
                    pattern: /^[A-Za-z]+$/i // Expresión regular para permitir solo letras
                })}/>
                {errors.user_name?.type === 'required' && <p>The Name is required</p>}
                {errors.user_name?.type === 'maxLength' && <p>You can only enter 20 characters</p>}
                {errors.user_name?.type === 'pattern' && <p>Only letters are allowed</p>}
                
                <input placeholder="Email" type="email" {...register('user_email',{
                    required: true,
                    maxLength: 30,
                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/
                })}/>
                {errors.user_email?.type === 'required' && <p>The Email is required</p>}
                {errors.user_email?.type === 'maxLength' && <p>You cannot enter more words</p>}
                {errors.user_email?.type === 'pattern' && <p>The email format is incorrect</p>}
                
                <input placeholder="Phone Number" type="number" {...register('user_phone',{
                    required: true,
                    maxLength: 15,
                    minLength: 7,
                })}/>
                {errors.user_phone?.type === 'required' && <p>Please enter a valid cell phone or telephone number</p>}
                {errors.user_phone?.type === 'minLength' && <p>You must enter more numbers</p>}
                {errors.user_phone?.type === 'maxLength' && <p>You must enter fewer numbers</p>}
                
                <input placeholder="Country" type="text" {...register('user_country',{
                    required: true,
                    maxLength: 50,
                })}/>
                {errors.user_country?.type === 'required' && <p>The Country is required</p>}
                
                <textarea placeholder="Message" {...register('message',{
                    required: true,
                    minLength: 10,
                })} rows="4"/>
                {errors.user_message?.type === 'required' && <p>Please provide us with more information</p>}
                {errors.user_message?.type === 'minLength' && <p>Tell us a little more about what you want</p>}
                
                <button type="submit">Send Message</button>
            </form>
            {isSuccess && <p>Message sent successfully</p>}
        </div>
    );
}

export default ContactForm;
