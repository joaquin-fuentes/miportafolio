import React from 'react';
import { Container, Button } from 'react-bootstrap';

const SobreMi = () => {
    return (
        <Container className='text-light p-4' >
            <h3 className='text-center titulo mb-3'>Sobre mí</h3>
            <h5>¿Quién soy?</h5>
            <h6>Hola! Mi nombre es Joaquin Fuentes! Tengo 29 años. Me considero un joven apasionado de la tecnologica y la programacion. <br />
            Me gusta aprender nuevas tecnologías, solcionar problemas y adaptarme a nuevos conocimientos o lenguajes.</h6>
            <Button variant='warning' className='my-2'>Ver CV</Button>
        </Container>
    );
};

export default SobreMi;