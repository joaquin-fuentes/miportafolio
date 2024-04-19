import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import imgPerfil from "../../assets/20210426_1313411.jpg"

const Portada = () => {
    return (
        <Container fluid="xs" id='home' >
            <Row className="portada m-0">
                <Col lg={6} className='contenedor-imagen  '>
                    <img src={imgPerfil} alt="Imagen de perfil de Joaquin Fuentes" className='w-75 rounded-circle img-portada' />
                </Col>
                <Col lg={6} className='contenedor-textoPortada  '>
                    <article className='articleInfo'>
                        <h1 className='text-light fw-bold text-nombre'>Joaquín Fuentes</h1>
                        <h3 className='text-puesto'>Desarrollador Web Full Stack</h3>
                    </article>
                </Col>
            </Row>
        </Container>
    );
};

export default Portada;