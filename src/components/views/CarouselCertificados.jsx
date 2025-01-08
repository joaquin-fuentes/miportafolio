import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Importar imágenes de certificados
import certificadoRollingCode from "../../assets/certificadoRollingCodeFullStack.png";
import certificadoDigitalHouse from "../../assets/certificadoDigitalHouse.png";
import certificadoEducacionIT from "../../assets/certificadoEducacionIT.png";
import certificadoLinkedin1Fundamentos from "../../assets/certificadoLinkedin1Fundamentos.png";
import certificadoLinkedin2JSAvanzado from "../../assets/certificadoLinkedin2JSAvanzado.png";
import certificadoLinkedin3JSAvanzadoER from "../../assets/certificadoLinkedin3JSAvanzadoER.png";
import certificadoLinkedin4JSEsencial from "../../assets/certificadoLinkedin4JSEsencial.png";
import certificadoLinkedin5Mysql from "../../assets/certificadoLinkedin5Mysql.png";
import certificadoPlatziFrontEnd from "../../assets/certificadoPlatziFrontEnd.png";
import certificadoUdemySQL from "../../assets/certificadoUdemySQL.png";
import certificadoReactAvanzado from "../../assets/cretificado-React-Avanzado-RollingCode.png";

const certificados = [
  certificadoRollingCode,
  certificadoReactAvanzado,
  certificadoDigitalHouse,
  certificadoEducacionIT,
  certificadoLinkedin1Fundamentos,
  certificadoLinkedin2JSAvanzado,
  certificadoLinkedin3JSAvanzadoER,
  certificadoLinkedin4JSEsencial,
  certificadoLinkedin5Mysql,
  certificadoPlatziFrontEnd,
  certificadoUdemySQL,
];

const CarruselCertificados = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="mySwiper"
      >
        {certificados.map((certificado, index) => (
          <SwiperSlide key={index}>
            <img
              src={certificado}
              alt={`Certificado ${index + 1}`}
              className="w-full h-[30vh] md:h-96 object-contain rounded-lg shadow-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarruselCertificados;
