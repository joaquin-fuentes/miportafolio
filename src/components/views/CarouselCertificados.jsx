import Carousel from 'react-bootstrap/Carousel';
import certificadoRollingCode from '../../assets/certificadoRollingCodeFullStack.png';
import certificadoDigitalHouse from '../../assets/certificadoDigitalHouse.png';
import certificadoEducacionIT from '../../assets/certificadoEducacionIT.png';
import certificadoLinkedin1Fundamentos from '../../assets/certificadoLinkedin1Fundamentos.png';
import certificadoLinkedin2JSAvanzado from '../../assets/certificadoLinkedin2JSAvanzado.png';
import certificadoLinkedin3JSAvanzadoER from '../../assets/certificadoLinkedin3JSAvanzadoER.png';
import certificadoLinkedin4JSEsencial from '../../assets/certificadoLinkedin4JSEsencial.png';
import certificadoLinkedin5Mysql from '../../assets/certificadoLinkedin5Mysql.png';
import certificadoPlatziFrontEnd from '../../assets/certificadoPlatziFrontEnd.png';
import certificadoUdemySQL from '../../assets/certificadoUdemySQL.png';



function UncontrolledExample() {
    return (
        <Carousel>
            <Carousel.Item>
                <img src={certificadoRollingCode} className='w-100 h-100' />
            </Carousel.Item>
            <Carousel.Item>
                <img src={certificadoDigitalHouse} className='w-100 h-100' />
            </Carousel.Item>
            <Carousel.Item>
                <img src={certificadoEducacionIT} className='w-100 h-100' />
            </Carousel.Item>
            <Carousel.Item>
                <img src={certificadoLinkedin1Fundamentos} className='w-100 h-100' />
            </Carousel.Item>
            <Carousel.Item>
                <img src={certificadoLinkedin2JSAvanzado} className='w-100 h-100' />
            </Carousel.Item>
            <Carousel.Item>
                <img src={certificadoLinkedin3JSAvanzadoER} className='w-100 h-100' />
            </Carousel.Item>
            <Carousel.Item>
                <img src={certificadoLinkedin4JSEsencial} className='w-100 h-100' />
            </Carousel.Item>
            <Carousel.Item>
                <img src={certificadoLinkedin5Mysql} className='w-100 h-100' />
            </Carousel.Item>
            <Carousel.Item>
                <img src={certificadoPlatziFrontEnd} className='w-100 h-100' />
            </Carousel.Item>
            <Carousel.Item>
                <img src={certificadoUdemySQL} className='w-100 h-100' />
            </Carousel.Item>
        </Carousel>
    );
}

export default UncontrolledExample;