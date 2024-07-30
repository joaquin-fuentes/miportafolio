import React from 'react';
import { Container, Button } from "react-bootstrap"
import {FaWhatsapp, FaLinkedin, FaGithub} from "react-icons/fa"
import {FiMail} from "react-icons/fi"

const url = `https://api.whatsapp.com/send?phone=${3816097754}&text=${encodeURIComponent("Hola Joaquin!")}`;

const Contacto = () => {
    return (
        <Container data-aos="fade-up" className='text-light p-4 text-center d-flex flex-column' id="contacto" >
            <h2 className=' titulo mb-4'>Contacto</h2>
            <a href={url} target='_blank' className='datoContacto'> <FaWhatsapp className='fs-3 mx-1'></FaWhatsapp>381-6097754</a>
            <h5 className='datoContacto'>< FiMail className='fs-3 mx-1'></FiMail>JOAQUIN.FUENTES1327@GMAIL.COM</h5>
            <a href='https://www.linkedin.com/in/joaqu%C3%ADn-fuentes/' target='_blank' className=' datoContacto '> <FaLinkedin className='fs-3 mx-1'></FaLinkedin>Perfil de LINKEDIN</a>
            <a href='https://github.com/joaquin-fuentes' target='_blank' className=' datoContacto '> <FaGithub className='fs-3 mx-1'></FaGithub>Perfil de GITHUB</a>
        </Container>
    );
};

export default Contacto;