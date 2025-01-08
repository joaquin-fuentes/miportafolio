import React, { useState } from "react";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal"; 

const Educacion = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <section
      className="scroll-mt-20 text-white py-12 bg-[#023047] text-center"
      id="educacion"
    >
      <h2
        data-aos="fade-up"
        className="text-4xl font-bold mb-8 relative inline-block after:content-[''] after:block after:h-1 after:w-16 after:bg-yellow-500 after:mt-2 mx-auto"
      >
        Educación
      </h2>

      <div className="space-y-6">
        <div data-aos="fade-up">
          <h4 className="text-2xl font-semibold">
            Universidad Tecnológica Nacional-FRT
          </h4>
          <h6 className="text-lg">Tecnicatura Universitaria en Programación</h6>
        </div>

        <div data-aos="fade-up">
          <h4 className="text-2xl font-semibold">RollingCode</h4>
          <h6 className="text-lg">Curso de Programación Web FullStack</h6>
          <h6 className="text-lg">Curso de React Avanzado</h6>
        </div>

        <div data-aos="fade-up">
          <h4 className="text-2xl font-semibold">Udemy</h4>
          <h6 className="text-lg">Curso de SQL desde cero</h6>
          <h6 className="text-lg">Curso de Node JS</h6>
          <h6 className="text-lg">Curso de REACT Js</h6>
          <h6 className="text-lg">Curso de Next Js</h6>

        </div>

        <div data-aos="fade-up">
          <h4 className="text-2xl font-semibold">Platzi</h4>
          <h6 className="text-lg">Curso de Desarrollo Web Front-end</h6>
        </div>
      </div>

      <button
        data-aos="fade-up"
        className="bg-yellow-500 text-black font-semibold px-6 py-2 rounded-md hover:bg-yellow-600 transition my-6"
        onClick={() => setModalShow(true)} // Abrimos el modal al hacer clic en el botón
      >
        Certificados
      </button>

      {/* Modal */}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)} // Cerramos el modal
      />
    </section>
  );
};

export default Educacion;
