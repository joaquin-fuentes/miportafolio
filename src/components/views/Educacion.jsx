import React from 'react';
import { Container } from 'react-bootstrap';

const Educacion = () => {
    return (
        <Container className='text-light text-center p-4' id="educacion" >
            <h3 className=' titulo mb-3'>Educación</h3>
            <h5 className='fw-bold'>Universidad Tecnologica Nacional - FRT</h5>
            <h6>Tecnicatura Universitaria en Programacion</h6>
            <br />
            <h5 className='fw-bold'>RollingCode</h5>
            <h6>Curso de Programacion Web FullStack</h6>
            <br />
            <h5 className='fw-bold'>Udemy</h5>
            <h6>Curso de SQL desde cero</h6>
            <h6>Curso de Node JS</h6>
            <h6>Curso de REACT</h6>
            <br />
            <h5 className='fw-bold'>Platzi</h5>
            <h6>Curso de Desarrollo web Front-end</h6>
            <br />

        </Container>
    );
};

export default Educacion;