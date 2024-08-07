import React from 'react';
import { useState } from 'react';
import { Container, Button, Modal, Carousel } from 'react-bootstrap';
import CarouselCertificados from "./CarouselCertificados"


function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    CERTIFICADOS
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CarouselCertificados></CarouselCertificados>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Volver</Button>
            </Modal.Footer>
        </Modal>
    );
}



const Educacion = () => {
    const [modalShow, setModalShow] = React.useState(false);


    return (
        <Container data-aos="fade-up" className='text-light text-center p-4' id="educacion" >
            <h2 className=' titulo mb-4'>Educación</h2>
            <h4 className='fw-bold'>Universidad Tecnologica Nacional-FRT</h4>
            <h6>Tecnicatura Universitaria en Programacion</h6>
            <br />
            <h4 className='fw-bold'>RollingCode</h4>
            <h6>Curso de Programacion Web FullStack</h6>
            <h6>Curso de React Avanzado</h6>
            <br />
            <h4 className='fw-bold'>Udemy</h4>
            <h6>Curso de SQL desde cero</h6>
            <h6>Curso de Node JS</h6>
            <h6>Curso de REACT</h6>
            <br />
            <h4 className='fw-bold'>Platzi</h4>
            <h6>Curso de Desarrollo web Front-end</h6>
            <br />
            <Button variant='warning' className='my-2' onClick={() => setModalShow(true)}> Certificados </Button>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

        </Container>
    );
};

export default Educacion;