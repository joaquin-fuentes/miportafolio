import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub, FaBootstrap } from 'react-icons/fa';
import {DiJavascript, DiMongodb, DiMysql} from "react-icons/di"


const Conocimientos = () => {
    return (
        <Container className='py-4' id="conocimientos">
            <h3 className='text-center text-light titulo mb-3'>Conocimientos</h3>
            <Row className='text-light d-flex justify-content-center'>
                <Col xs={10} md={4} className='text-center'>
                    <article className='tarjetaConocimiento rounded bg-secondary my-3 p-2'>
                        <FaHtml5 className='icono'></FaHtml5>
                        <h4>HTML</h4>
                    </article>
                </Col>
                <Col xs={10} md={4} className='text-center'>
                    <article className='tarjetaConocimiento rounded bg-secondary my-3 p-2'>
                        <FaCss3Alt className='icono'></FaCss3Alt>
                        <h4>CSS</h4>
                    </article>
                </Col>
                <Col xs={10} md={4} className='text-center'>
                    <article className='tarjetaConocimiento rounded bg-secondary my-3 p-2'>
                        <DiJavascript className='icono'></DiJavascript>
                        <h4>JAVASCRIPT</h4>
                    </article>
                </Col>
                <Col xs={10} md={4} className='text-center'>
                    <article className='tarjetaConocimiento rounded bg-secondary my-3 p-2'>
                        <FaReact className='icono'></FaReact>
                        <h4>REACT</h4>
                    </article>
                </Col>
                <Col xs={10} md={4} className='text-center'>
                    <article className='tarjetaConocimiento rounded bg-secondary my-3 p-2'>
                        <FaNodeJs className='icono'></FaNodeJs>
                        <h4>NODE JS</h4>
                    </article>
                </Col>
                <Col xs={10} md={4} className='text-center'>
                    <article className='tarjetaConocimiento rounded bg-secondary my-3 p-2'>
                        <DiMongodb className='icono'></DiMongodb>
                        <h4>MONGO DB</h4>
                    </article>
                </Col>
                <Col xs={10} md={4} className='text-center'>
                    <article className='tarjetaConocimiento rounded bg-secondary my-3 p-2'>
                        <DiMysql className='icono'></DiMysql>
                        <h4>MYSQL</h4>
                    </article>
                </Col>
                <Col xs={10} md={4} className='text-center'>
                    <article className='tarjetaConocimiento rounded bg-secondary my-3 p-2'>
                        <FaGithub className='icono'></FaGithub>
                        <h4>GITHUB</h4>
                    </article>
                </Col>
                <Col xs={10} md={4} className='text-center'>
                    <article className='tarjetaConocimiento rounded bg-secondary my-3 p-2'>
                        <FaBootstrap className='icono'></FaBootstrap>
                        <h4>Bootstrap</h4>
                    </article>
                </Col>
                
            </Row>
        </Container>
    );
};

export default Conocimientos;