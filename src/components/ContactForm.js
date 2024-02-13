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
                })}/>
                {errors.user_name?.type === 'required' && <p>El Nombre es obligatorio</p>}
                {errors.user_name?.type === 'maxLength' && <p>Solo puede ingresar 20 caracteres</p>}
                
                <input placeholder="Email" type="email" {...register('user_email',{
                    required: true,
                    maxLength: 30,
                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/
                })}/>
                {errors.user_email?.type === 'required' && <p>El Email es obligatorio</p>}
                {errors.user_email?.type === 'maxLength' && <p>No puede ingresar más palabras</p>}
                {errors.user_email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
                
                <input placeholder="Phone Number" type="number" {...register('user_phone',{
                    required: true,
                    maxLength: 15,
                    minLength: 7,
                })}/>
                {errors.user_phone?.type === 'required' && <p>Ingrese un número de celular o teléfono válido</p>}
                {errors.user_phone?.type === 'minLength' && <p>Debe ingresar más números</p>}
                {errors.user_phone?.type === 'maxLength' && <p>Debe ingresar menos números</p>}
                
                <input placeholder="Country" type="text" {...register('user_country',{
                    required: true,
                    maxLength: 50,
                })}/>
                {errors.user_country?.type === 'required' && <p>El País es obligatorio</p>}
                
                <textarea placeholder="Message" {...register('message',{
                    required: true,
                    minLength: 10,
                })} rows="4"/>
                {errors.user_message?.type === 'required' && <p>Debe brindarnos más información</p>}
                {errors.user_message?.type === 'minLength' && <p>Cuentenos un poco más sobre lo que desea</p>}
                
                <button type="submit">Send Message</button>
            </form>
            {isSuccess && <p>Mensaje enviado con éxito</p>}
        </div>
    );
}

export default ContactForm;
