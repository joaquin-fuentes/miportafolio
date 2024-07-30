import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Trabajo = () => {
    return (
        <Container data-aos="fade-up" className='text-light p-4' id='experiencia'>
            <h2 className='text-center titulo mb-3'>Trabajo</h2>
            <h4 className='fw-bold text-center'>RollingCode</h4>
            <h6 className='text-center mb-3'>Tutor en curso de Desarrollo Web</h6>
            <h4 className='fw-bold text-center'>Tucumán Kayak Club</h4>
            <h6 className='text-center mb-3'>Desarrollo y mantenimiento de página web</h6>
            <h4 className='fw-bold text-center'>Trece Software</h4>
            <h6 className='text-center mb-3'>Desarrollador Frontend con React</h6>
            <h4 className='fw-bold text-center'>Extras</h4>
            <h6 className='text-center mb-3'>Desarrollos individuales y grupales para trabajos con fines educativos</h6>
        </Container>
    );
};

export default Trabajo;