import React from 'react';
import { Container, Button } from "react-bootstrap"
import {FaWhatsapp, FaLinkedin, FaGithub} from "react-icons/fa"
import {FiMail} from "react-icons/fi"


const Contacto = () => {
    return (
        <Container className='text-light p-4 text-center' id="contacto" >
            <h3 className=' titulo mb-3'>Contacto</h3>
            <h5 className='mb-4 datoContacto'> <FaWhatsapp className='fs-3 mx-1'></FaWhatsapp>381-6097754</h5>
            <h5 className='mb-4 datoContacto'>< FiMail className='fs-3 mx-1'></FiMail>JOAQUIN.FUENTES1327@GMAIL.COM</h5>
            <h5 className='mb-4 datoContacto'> <FaLinkedin className='fs-3 mx-1'></FaLinkedin>Perfil de LINKEDIN</h5>
            <h5 className='mb-4 datoContacto'> <FaGithub className='fs-3 mx-1'></FaGithub>Perfil de GITHUB</h5>
        </Container>
    );
};

export default Contacto;