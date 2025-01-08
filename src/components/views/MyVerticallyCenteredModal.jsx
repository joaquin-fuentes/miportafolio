import React from "react";
import CarruselCertificados from "./CarouselCertificados"; // Importamos el carrusel de certificados
import { AiOutlineClose } from "react-icons/ai"; // Importamos icono de cerrar

function MyVerticallyCenteredModal({ show, onHide }) {
  if (!show) return null;

  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-overlay") {
      onHide(); // Cierra el modal si se hace clic en el fondo
    }
  };

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 backdrop-blur-sm"
      onClick={handleOutsideClick}
    >
      <div
        className="bg-[#1e293b] rounded-lg shadow-2xl w-11/12 md:w-3/4 lg:w-1/2 p-8 relative max-h-[85vh] overflow-y-auto transform transition-transform scale-100 animate-fade-in"
        onClick={(e) => e.stopPropagation()} // Evita que los clics dentro del modal cierren el modal
      >
        {/* Botón de cerrar */}
        <button
          className="absolute top-3 right-3 text-white hover:text-yellow-500 bg-transparent rounded-full p-2 focus:outline-none"
          onClick={onHide}
        >
          <AiOutlineClose size={24} />
        </button>

        {/* Título del modal */}
        <h2 className="text-2xl font-extrabold text-center text-white mb-6 uppercase tracking-wider">
          Certificados
        </h2>

        {/* Separador decorativo */}
        <div className="w-20 h-1 mx-auto bg-yellow-500 rounded mb-6"></div>

        {/* Contenido del carrusel */}
        <div className="overflow-auto">
          <CarruselCertificados />
        </div>
      </div>
    </div>
  );
}

export default MyVerticallyCenteredModal;
