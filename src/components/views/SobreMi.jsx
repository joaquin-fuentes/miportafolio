import React from 'react';
import { Container, Button, Modal } from 'react-bootstrap';
import imgCV from "../../assets/JoaquinFuentes-CV.png"

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
                    CV - Joaquin Fuentes
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={imgCV} alt="Imagen Cv de joaquin fuentes" className='w-100' />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Volver</Button>
            </Modal.Footer>
        </Modal>
    );
}


const SobreMi = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <Container className='text-light p-4 text-center' id='sobremi' >
            <h3 className='text-center titulo mb-3'>Sobre mí</h3>
            <h5>¿Quién soy?</h5>
            <h6>Hola! Mi nombre es Joaquin Fuentes! Tengo 30 años. Me considero un joven apasionado de la tecnologica y la programacion. <br />
                Me gusta aprender nuevas tecnologías, solcionar problemas y adaptarme a nuevos conocimientos o lenguajes.</h6>
            <Button variant='warning' className='my-2' onClick={() => setModalShow(true)}> Ver CV </Button>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Container>
    );
};

export default SobreMi;