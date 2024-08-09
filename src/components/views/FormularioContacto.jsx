import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { IoMdMail } from 'react-icons/io';
import { RiContactsFill } from 'react-icons/ri';
import { IoIosText } from 'react-icons/io';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormularioContacto = () => {
    const { handleSubmit, control, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const templateParams = {
            user_name: data.name,
            email_id: data.email,
            message: data.message,
            to_name: 'Joaquin'
        };

        emailjs.send('service_5l0vwj7', 'template_iwqfcfa', templateParams, 'XPpSHMv-oAPxczGrr')
            .then((response) => {
                Swal.fire('Enviado!', 'Su mensaje fue enviado correctamente', 'success');
                reset(); 
            }, (err) => {
                Swal.fire('Error!', 'No se pudo procesar su petición', 'error');
            });
    };

    return (
        <div className="text-light d-flex justify-content-center flex-column align-items-center mt-4">
            <h2 data-aos="fade-up" className='text-center titulo mb-3'>Déjame tu mensaje o feedback</h2>
            <form data-aos="fade-up" onSubmit={handleSubmit(onSubmit)} className='w-75 row'>
                <div className='col-12 col-md-6 mt-3'>
                    <label className='form-label' htmlFor="name">
                        <RiContactsFill className='iconoForm' /> Nombre
                    </label>
                    <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'El nombre es obligatorio' }}
                        render={({ field }) => (
                            <input
                                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                placeholder="Ingrese su nombre"
                                type="text"
                                id="name"
                                {...field}
                            />
                        )}
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
                </div>
                <div className='col-12 col-md-6 mt-3'>
                    <label className='form-label' htmlFor="email">
                        <IoMdMail className='iconoForm' /> Email
                    </label>
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: 'El email es obligatorio',
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Email inválido'
                            }
                        }}
                        render={({ field }) => (
                            <input
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                placeholder="Ingrese su email"
                                type="email"
                                id="email"
                                {...field}
                            />
                        )}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                </div>
                <div className='mt-3'>
                    <label className='form-label' htmlFor="message">
                        <IoIosText className='iconoForm' /> Mensaje
                    </label>
                    <Controller
                        name="message"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'El mensaje es obligatorio' }}
                        render={({ field }) => (
                            <textarea
                                className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                                placeholder="Escriba aquí su mensaje"
                                id="message"
                                {...field}
                            ></textarea>
                        )}
                    />
                    {errors.message && <div className="invalid-feedback">{errors.message.message}</div>}
                </div>
                <div className='mt-4 d-flex justify-content-center'>
                    <button className='btn btn-warning btnForm' type="submit">Enviar</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default FormularioContacto;
