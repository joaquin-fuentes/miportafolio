import React, { useState } from "react";
import imgCV from "../../assets/JoaquinFuentes-CV.png";

function MyVerticallyCenteredModal({ show, onHide }) {
  if (!show) return null; // No renderizamos el modal si no está visible.

  // Maneja el cierre del modal al hacer clic fuera del mismo
  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-overlay") {
      onHide(); // Cerrar modal si se hace clic fuera del contenedor
    }
  };

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleOutsideClick} // Escucha clics fuera del modal para cerrarlo
    >
      <div
        className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 max-h-[90vh] p-6 relative overflow-auto"
        onClick={(e) => e.stopPropagation()} // Evita que los clics dentro del modal lo cierren
      >
        {/* Botón de cerrar */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onHide}
        >
          ✕
        </button>

        {/* Contenido del modal */}
        <h2 className="text-lg font-bold mb-4 text-center">
          CV - Joaquin Fuentes
        </h2>
        <div className="overflow-auto">
          <img
            src={imgCV}
            alt="Imagen CV de Joaquin Fuentes"
            className="w-full rounded-lg object-contain"
          />
        </div>

        {/* Footer */}
        <div className="flex justify-end mt-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            onClick={onHide}
          >
            Volver
          </button>
        </div>
      </div>
    </div>
  );
}

const SobreMi = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <section className="text-white p-8 text-center bg-[#023047]" id="sobremi">
      {/* Título con subrayado decorativo */}
      <h2
        data-aos="fade-up"
        className="text-4xl font-bold mb-4 relative inline-block after:content-[''] after:block after:h-1 after:w-16 after:bg-yellow-500 after:mt-2 mx-auto lg:mx-0"
      >
        Sobre mí
      </h2>
      <h4 data-aos="fade-up" className="text-2xl mb-4">
        ¿Quién soy?
      </h4>
      <p data-aos="fade-up" className="text-lg mb-6">
        Hola! Mi nombre es Joaquin Fuentes! Tengo 30 años. Me considero un joven
        apasionado de la tecnología y la programación.
        <br />
        Me gusta aprender nuevas tecnologías, solucionar problemas y adaptarme a
        nuevos conocimientos o lenguajes.
      </p>
      <button
        data-aos="fade-up"
        className="bg-yellow-500 text-black font-semibold px-6 py-2 rounded-md hover:bg-yellow-600 transition my-2"
        onClick={() => setModalShow(true)} // Abre el modal al hacer clic
      >
        Ver CV
      </button>
      {/* Modal */}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)} // Cierra el modal
      />
    </section>
  );
};

export default SobreMi;
