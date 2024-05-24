import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav } from "react-bootstrap";
import logoOscuro from "../../assets/logo1.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Cambia el estado para abrir/cerrar el menú
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Navbar expand="lg" className={`navBar ${scrolled ? 'scrolled' : ''}`}>
            <Container>
                <Navbar.Brand href="#home" className='text-light fw-bold'>
                    <img src={logoOscuro} alt="Logo joaquin fuentes" className='logoMenu rounded me-1' /> ¡Bienvenido!
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='navbarToggle' onClick={toggleMenu}>
                    {menuOpen ? <IoClose className='menuHamburguesaAbierto transitionMenu' /> : <GiHamburgerMenu className='menuHamburguesaCerrado transitionMenu' />}
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto contenedorEnlacesNav">
                        <Nav.Link className="text-light text-hover fw-bold" href="#sobremi">Sobre mí</Nav.Link>
                        <Nav.Link className="text-light text-hover fw-bold" href="#experiencia">Experiencia</Nav.Link>
                        <Nav.Link className="text-light text-hover fw-bold" href="#conocimientos">Conocimientos</Nav.Link>
                        <Nav.Link className="text-light text-hover fw-bold" href="#contacto">Contacto</Nav.Link>
                        <Nav.Link className="text-light text-hover fw-bold" href="#educacion">Educacion</Nav.Link>
                        <Nav.Link className="text-light text-hover fw-bold" href="#proyectos">Proyectos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;
