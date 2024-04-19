import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Trabajo = () => {
    return (
        <Container className='text-light p-4' id='experiencia'>
            <h3 className='text-center titulo mb-3'>Trabajo</h3>
            <h5 className='fw-bold text-center'>RollingCode</h5>
            <h6 className='text-center mb-3'>Tutor en curso de Desarrollo Web</h6>
            <h5 className='fw-bold text-center'>Tucumán Kayak Club</h5>
            <h6 className='text-center mb-3'>Desarrollo y mantenimiento de página web</h6>
            <h5 className='fw-bold text-center'>Extras</h5>
            <h6 className='text-center mb-3'>Desarrollos individuales y grupales para trabajos con fines educativos</h6>
        </Container>
    );
};

export default Trabajo;