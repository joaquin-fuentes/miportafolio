import React from 'react';
import { Container, Navbar, Nav } from "react-bootstrap"

const Menu = () => {
    return (
        <Navbar expand="lg" className="bg-dark">
            <Container>
                <Navbar.Brand href="#home" className='text-light fw-bold'>¡Bienvenido!</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-secondary' />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="ms-auto">
                        <Nav.Link className="text-light text-hover" href="#home">Sobre mí</Nav.Link>
                        <Nav.Link className="text-light text-hover" href="#link">Experiencia</Nav.Link>
                        <Nav.Link className="text-light text-hover" href="#link">Conocimientos</Nav.Link>
                        <Nav.Link className="text-light text-hover" href="#link">Contacto</Nav.Link>
                        <Nav.Link className="text-light text-hover" href="#link">Educacion</Nav.Link>
                        <Nav.Link className="text-light text-hover" href="#link">Proyectos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;