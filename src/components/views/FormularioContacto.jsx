import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Swal from "sweetalert2";
import { IoMdMail } from "react-icons/io";
import { RiContactsFill } from "react-icons/ri";
import { IoIosText } from "react-icons/io";

const FormularioContacto = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');



    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            user_name: name,
            email_id: email,
            message: message,
            to_name: "Joaquin"
        };

        emailjs.send('service_5l0vwj7', 'template_iwqfcfa', templateParams, 'XPpSHMv-oAPxczGrr')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                Swal.fire(
                    'Enviado!',
                    `Su mensaje fue enviado correcamente`,
                    'success'
                )
            }, (err) => {
                console.error('FAILED...', err);
                Swal.fire(
                    'Error!',
                    `No se pudo procesar su peticion`,
                    'error'
                )
            });
    };

    return (
        <div className="text-light d-flex justify-content-center flex-column align-items-center mt-4"> 
            <h2 data-aos="fade-up"  className='text-center titulo mb-3'>Déjame tu mensaje, comentario o feedback</h2>
            <form data-aos="fade-up"  onSubmit={handleSubmit} className='w-75 row'>
                <div className='col-12 col-md-6 mt-3'>
                    <label className='form-label' htmlFor="name"><RiContactsFill className='iconoForm'></RiContactsFill> Nombre</label>
                    <input
                        className='form-control'
                        placeholder="Ingrese su nombre"
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className='col-12 col-md-6 mt-3'>
                    <label className='form-label' htmlFor="email"><IoMdMail className='iconoForm'></IoMdMail> Email</label>
                    <input
                        className='form-control'
                        placeholder="Ingrese su email"
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className='mt-3'>
                    <label className='form-label' htmlFor="message"><IoIosText className='iconoForm'></IoIosText> Mensaje</label>
                    <textarea
                        className='form-control'
                        placeholder="Escriba aquí su mensaje"
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className='mt-4 d-flex justify-content-center'>
                    <button className='btn btn-warning btnForm' type="submit">Enviar</button>
                </div>
            </form>
        </div>
    );
};

export default FormularioContacto;
