import React, { useState } from "react";
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

const certificados = [
  certificadoRollingCode,
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
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev === certificados.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? certificados.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Imagen actual del certificado */}
      <div className="overflow-hidden">
        <img
          src={certificados[current]}
          alt={`Certificado ${current + 1}`}
          className="w-full h-[30vh] md:h-96 object-contain rounded-lg shadow-md transition-all duration-500 ease-in-out"
        />
      </div>

      {/* Botones de navegación */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-yellow-500 text-black p-2 rounded-full hover:bg-yellow-600 transition"
      >
        &#10094;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-yellow-500 text-black p-2 rounded-full hover:bg-yellow-600 transition"
      >
        &#10095;
      </button>

      {/* Indicadores de páginas */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {certificados.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === current ? "bg-yellow-500" : "bg-gray-400"
            }`}
            onClick={() => setCurrent(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CarruselCertificados;
