import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap"
import portadaPortafolio from "../../assets/portadamiportafolio.png"
import portadaTKC from "../../assets/portadatkc.png"
import portadaLJ from "../../assets/portadalj.png"
import portadaBonDia from "../../assets/portadabondia.png"

const Proyectos = () => {
    return (
        <Container className='py-4 text-center' id="proyectos">
            <h2 data-aos="fade-up" className='text-center text-light titulo mb-3'>Proyectos</h2>
            <Row className='text-light d-flex justify-content-center'>
                <Col xs={11} md={5} lg={4} className='text-center'>
                    <article data-aos="fade-up" className='rounded bg-secondary m-3 p-2 cardProyectos'>
                        <img src={portadaPortafolio} alt=" imagen proyecto portafolio" width="100%" className='rounded' />
                        <h4 className='mt-2 nombreProyecto'>Mi portafolio</h4>
                        <div className=''>
                            <a href="https://github.com/joaquin-fuentes/nuevoportafolio" target='_blank' className='linkProyectoGithub'>  Github</a>
                            <span> - </span>
                            <a href="https://joaquin-fuentes.github.io/miportafolio/" target='_blank' className='linkProyectoGithub'>Página web</a>
                        </div>
                    </article>
                </Col>
                <Col xs={11} md={5} lg={4} className='text-center'>
                    <article data-aos="fade-up" className='rounded bg-secondary m-3 p-2 cardProyectos'>
                        <img src={portadaTKC} alt=" imagen proyecto Tucuman Kayak Club" width="100%" className='rounded' />
                        <h4 className='mt-2 nombreProyecto'>Tucumán Kayak Club</h4>
                        <div className=''>
                            <a href="https://github.com/joaquin-fuentes/TKC-Front" target='_blank' className='linkProyectoGithub'>  Github</a>
                            <span> - </span>
                            <a href="https://tucumankayakclub.netlify.app" target='_blank' className='linkProyectoGithub'>Página web</a>
                        </div>
                    </article>
                </Col>
                <Col xs={11} md={5} lg={4} className='text-center'>
                    <article data-aos="fade-up" className='rounded bg-secondary m-3 p-2 cardProyectos'>
                        <img src={portadaLJ} alt=" imagen proyecto lj indumentaria" width="100%" className='rounded' />
                        <h4 className='mt-2 nombreProyecto'>LJ Indumentaria</h4>
                        <div className=''>
                            <a href="https://github.com/joaquin-fuentes/leo-indumentaria" target='_blank' className='linkProyectoGithub'>  Github</a>
                            <span> - </span>
                            <a href="https://lj-indumentaria.netlify.app" target='_blank' className='linkProyectoGithub'>Página web</a>
                        </div>
                    </article>
                </Col>
                <Col xs={11} md={5} lg={4} className='text-center'>
                    <article data-aos="fade-up" className='rounded bg-secondary m-3 p-2 cardProyectos'>
                        <img src={portadaBonDia} alt=" imagen proyecto bom dia" width="100%" className='rounded' />
                        <h4 className='mt-2 nombreProyecto'>Bon Dia </h4>
                        <div className=''>
                            <a href="https://github.com/joaquin-fuentes/ProyectoFinal-Grupo3" target='_blank' className='linkProyectoGithub'>  Github</a>
                            <span> - </span>
                            <a href="https://bondia-restaurant.netlify.app/" target='_blank' className='linkProyectoGithub'>Página web</a>
                        </div>
                    </article>
                </Col>

            </Row>
            <a data-aos="fade-up" href='https://github.com/joaquin-fuentes' target='_blank' className=' datoContacto btn btn-warning text-dark my-4 '>GITHUB</a>
        </Container>
    );
};

export default Proyectos;