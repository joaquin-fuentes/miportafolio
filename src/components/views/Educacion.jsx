import { useState } from "react";
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

      <div className="space-y-8">
        {/* UTN */}
        <div data-aos="fade-up" className="space-y-2">
          <h4 className="text-2xl font-semibold">
            Universidad Tecnológica Nacional - FRT
          </h4>
          <h6 className="text-lg text-gray-300">
            Tecnicatura Universitaria en Programación
          </h6>
        </div>

        {/* RollingCode */}
        <div data-aos="fade-up" className="space-y-2">
          <h4 className="text-2xl font-semibold">RollingCode</h4>
          <ul className="text-lg text-gray-300 space-y-1">
            <li>Curso de Programación Web FullStack</li>
            <li>Curso de React Avanzado</li>
          </ul>
        </div>

        {/* Udemy */}
        <div data-aos="fade-up" className="space-y-2">
          <h4 className="text-2xl font-semibold">Udemy</h4>
          <ul className="text-lg text-gray-300 space-y-1">
            <li>Curso de SQL desde cero</li>
            <li>Curso de Node JS</li>
            <li>Curso de React JS</li>
            <li>Curso de Next JS</li>
          </ul>
        </div>

        {/* Platzi */}
        <div data-aos="fade-up" className="space-y-2">
          <h4 className="text-2xl font-semibold">Platzi</h4>
          <ul className="text-lg text-gray-300 space-y-1">
            <li>Curso de Desarrollo Web Front-end</li>
          </ul>
        </div>
      </div>

      <button
        data-aos="fade-up"
        className="bg-yellow-500 text-black font-semibold px-6 py-2 rounded-md hover:bg-yellow-600 transition my-8"
        onClick={() => setModalShow(true)}
      >
        Certificados
      </button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </section>
  );
};

export default Educacion;
