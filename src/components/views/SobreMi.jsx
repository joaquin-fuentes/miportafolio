import { useState } from "react";
import imgCV from "../../assets/JoaquinFuentes-CV3.png";

// eslint-disable-next-line react/prop-types
function MyVerticallyCenteredModal({ show, onHide }) {
  if (!show) return null;

  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-overlay") {
      onHide();
    }
  };

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleOutsideClick}
    >
      <div
        className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 max-h-[90vh] p-6 relative overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onHide}
        >
          ✕
        </button>

        <h2 className="text-lg font-bold mb-4 text-center">
          CV - Joaquin Fuentes
        </h2>
        <div className="overflow-auto">
          <img
            src={imgCV}
            alt="Imagen CV de Joaquin Fuentes"
            className="w-full max-h-[80vh] rounded-lg object-contain"
          />
        </div>

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
  const [verMas, setVerMas] = useState(false);

  return (
    <section
      className="scroll-mt-20 text-white p-8 text-center bg-[#023047]"
      id="sobremi"
    >
      <h2
        data-aos="fade-up"
        className="text-4xl font-bold mb-4 relative inline-block after:content-[''] after:block after:h-1 after:w-16 after:bg-yellow-500 after:mt-2 mx-auto lg:mx-0"
      >
        Sobre mí
      </h2>
      <h4 data-aos="fade-up" className="text-2xl mb-4">
        ¿Quién soy?
      </h4>

      <div className="flex justify-center">
        <p
          data-aos="fade-up"
          className="text-lg mb-6 lg:w-2/3 lg:leading-loose"
        >
          ¡Hola! Soy Joaquín Fuentes, tengo 31 años y soy desarrollador web
          fullstack. Me apasiona programar tanto en frontend como backend, y
          siempre busco crecer con cada nuevo proyecto.
          <br />
          Disfruto compartir lo que sé como mentor y me enfoco en escribir
          código limpio, eficiente y mantenible.
          <br />
          Me considero curioso, autodidacta y siempre listo para enfrentar
          nuevos desafíos.
          {verMas && (
            <>
              <br />
              Además, soy Técnico Universitario en Programación, lo que me dio
              una base sólida que complemento con experiencia práctica en el
              desarrollo de soluciones reales.
              <br />
              Me gusta trabajar en equipo, usar metodologías ágiles como Scrum y
              enfocarme en mejorar constantemente, tanto en lo profesional como
              en lo personal.
            </>
          )}
          <span
            onClick={() => setVerMas(!verMas)}
            className="block mt-3 text-yellow-400 cursor-pointer hover:underline"
          >
            {verMas ? "Ver menos" : "Ver más"}
          </span>
        </p>
      </div>

      <button
        data-aos="fade-up"
        className="bg-yellow-500 text-black font-semibold px-6 py-2 rounded-md hover:bg-yellow-600 transition my-2"
        onClick={() => setModalShow(true)}
      >
        Ver CV
      </button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </section>
  );
};

export default SobreMi;
