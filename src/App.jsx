import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Menu from './components/views/Menu';
import Footer from './components/views/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import Portada from './components/views/Portada';
import SobreMi from './components/views/SobreMi';
import Trabajo from './components/views/Trabajo';
import Conocimientos from './components/views/Conocimientos';
import Contacto from './components/views/Contacto';
import Educacion from './components/views/Educacion';
import Proyectos from './components/views/Proyectos';

function App() {

  return (
    <>
      <Menu></Menu>
      <div className='main bg-dark m-0'>
        <Portada></Portada>
        <Container className='my-4'>
          <Row>
            <Col xs={12} md={6}>
              <SobreMi></SobreMi>
            </Col>
            <Col xs={12} md={6}>
              <Trabajo></Trabajo>
            </Col>
          </Row>
          <Conocimientos></Conocimientos>
          <Row>
            <Col xs={12} md={6}>
              <Contacto></Contacto>
            </Col>
            <Col xs={12} md={6}>
              <Educacion></Educacion>
            </Col>
          </Row>
          <Proyectos></Proyectos>

        </Container>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
