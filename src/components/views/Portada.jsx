import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import imgPerfil from "../../assets/20210426_1313411.jpg"

const Portada = () => {
    return (
        <Container fluid="xs" id='home' >
            <Row className="portada m-0">
                <Col lg={6} className='contenedor-imagen  '>
                    <img data-aos="fade-up" src={imgPerfil} alt="Imagen de perfil de Joaquin Fuentes" className='w-75 rounded-circle img-portada' />
                </Col>
                <Col lg={6} className='contenedor-textoPortada  '>
                    <article data-aos="fade-up" className='articleInfo'>
                        <h1 className='text-light fw-bold text-nombre'>Joaquín Fuentes</h1>
                        <h2 className='text-puesto'>Desarrollador Web Full Stack</h2>
                    </article>
                </Col>
            </Row>
        </Container>
    );
};

export default Portada;