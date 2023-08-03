import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap"
import portadaPortafolio from "../../assets/portadaPortafolio.png"
import portadaRecetas from "../../assets/portadaRecetas.png"
import portadaTiendaAnime from "../../assets/tiendaAnime.png"
import portadaStreaming from "../../assets/portadaStreaming.png"

const Proyectos = () => {
    return (
        <Container className='py-4 text-center' id="proyectos">
            <h3 className='text-center text-light titulo mb-3'>Proyectos</h3>
            <Row className='text-light d-flex justify-content-center'>
                <Col xs={11} md={5} lg={4} className='text-center'>
                    <article className='rounded bg-secondary m-3 p-2 cardProyectos'>
                        <img src={portadaPortafolio} alt=" imagen proyecto portafolio" width="100%" className='rounded' />
                        <h4 className='mt-2'>Mi portafolio</h4>
                        <a href="https://github.com/joaquin-fuentes/nuevoportafolio" target='_blank' className='linkProyectoGithub'>Ver Repositorio de Github</a>
                    </article>
                </Col>
                <Col xs={11} md={5} lg={4} className='text-center'>
                    <article className='rounded bg-secondary m-3 p-2 cardProyectos'>
                        <img src={portadaRecetas} alt=" imagen proyecto recetas de cocina" width="100%" className='rounded' />
                        <h4 className='mt-2'>Recetas de cocina</h4>
                        <a href="https://github.com/joaquin-fuentes/recetascliente" target='_blank' className='linkProyectoGithub'>Ver Repositorio de Github</a>
                    </article>
                </Col>
                <Col xs={11} md={5} lg={4} className='text-center'>
                    <article className='rounded bg-secondary m-3 p-2 cardProyectos'>
                        <img src={portadaTiendaAnime} alt=" imagen proyecto tienda anime" width="100%" className='rounded' />
                        <h4 className='mt-2'>Tienda de anime</h4>
                        <a href="https://github.com/joaquin-fuentes/proyecto-final-modulo-2" target='_blank' className='linkProyectoGithub'>Ver Repositorio de Github</a>
                    </article>
                </Col>
                 <Col xs={11} md={5} lg={4} className='text-center'>
                    <article className='rounded bg-secondary m-3 p-2 cardProyectos'>
                        <img src={portadaStreaming} alt=" imagen proyecto rolling tv" width="100%" className='rounded' />
                        <h4 className='mt-2'>Streaming de peliculas </h4>
                        <a href="https://github.com/joaquin-fuentes/rollingtv" target='_blank' className='linkProyectoGithub'>Ver Repositorio de Github</a>
                    </article>
                </Col>

            </Row>
            <a href='https://github.com/joaquin-fuentes' target='_blank' className=' datoContacto btn btn-warning text-dark my-4 '>GITHUB</a>
        </Container>
    );
};

export default Proyectos;