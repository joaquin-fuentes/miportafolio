import React from "react";
import CarruselCertificados from "./CarouselCertificados"; // Importamos el carrusel de certificados

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
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleOutsideClick}
    >
      <div
        className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 p-6 relative max-h-[85vh] overflow-y-auto" // Max height para evitar que ocupe toda la pantalla
        onClick={(e) => e.stopPropagation()} // Evita que los clics dentro del modal cierren el modal
      >
        {/* Botón de cerrar */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onHide}
        >
          ✕
        </button>

        {/* Contenido del modal */}
        <h2 className="text-lg font-bold mb-4 text-center">CERTIFICADOS</h2>
        <div className="overflow-auto">
          <CarruselCertificados />
        </div>
      </div>
    </div>
  );
}

export default MyVerticallyCenteredModal;
