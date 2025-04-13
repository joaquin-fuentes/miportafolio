import logoTkc from "../../assets/logoTkc.png";
import logoTrece from "../../assets/logoTrece.png";
import logoRolling from "../../assets/logoRolling.png";
import { BiRocket } from "react-icons/bi";

const Trabajo = () => {
  return (
    <section
      className="scroll-mt-20 text-white p-8 bg-[#023047] text-center"
      id="experiencia"
    >
      <h2
        data-aos="fade-up"
        className="text-4xl font-bold mb-8 relative inline-block after:content-[''] after:block after:h-1 after:w-16 after:bg-yellow-500 after:mt-2 mx-auto"
      >
        Experiencia
      </h2>

      <div className="space-y-10">
        {/* RollingCode */}
        <div data-aos="fade-up">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <img
              src={logoRolling}
              alt="Logo RollingCode"
              className="h-[3em] w-[3em] rounded-full object-contain"
            />
            <h4 className="text-2xl font-semibold">RollingCode</h4>
          </div>

          {/* Desarrollador */}
          <div className="mb-4">
            <h6 className="text-lg font-semibold">
              Desarrollador Web Fullstack
            </h6>
            <p className="text-sm text-gray-300 italic">
              Ene. 2025 – Actualidad · Híbrido
            </p>
            <p className="text-base mt-1 text-gray-300">
              Desarrollo de funcionalidades con React, Next.js, Node.js y
              MongoDB. Participación en análisis técnico, optimización de
              rendimiento y trabajo en equipo bajo metodologías ágiles.
            </p>
          </div>

          {/* Mentor / Tutor */}
          <div>
            <h6 className="text-lg font-semibold">
              Mentor / Tutor en curso Fullstack
            </h6>
            <p className="text-sm text-gray-300 italic">
              Abr. 2024 – Actualidad · Presencial
            </p>
            <p className="text-base mt-1 text-gray-300">
              Capacitación a estudiantes en stack MERN, planificación de clases,
              resolución de dudas y fomento de buenas prácticas de programación
              con Git y SCRUM.
            </p>
          </div>
        </div>

        {/* Trece Software */}
        <div data-aos="fade-up">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <img
              src={logoTrece}
              alt="Logo Trece"
              className="h-[3em] w-[3em] rounded-full object-contain"
            />
            <h4 className="text-2xl font-semibold">Trece Software</h4>
          </div>
          <h6 className="text-lg font-semibold">
            Desarrollador Frontend con React
          </h6>
          <p className="text-sm text-gray-300 italic">
            Jul. 2024 – Nov. 2024 · Remoto
          </p>
          <p className="text-base text-gray-300">
            Desarrollo de interfaces para paneles administrativos, creación de
            componentes reutilizables, integración de APIs REST y diseño
            responsive centrado en la experiencia de usuario.
          </p>
        </div>

        {/* Tucumán Kayak Club */}
        <div data-aos="fade-up">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <img
              src={logoTkc}
              alt="Logo TKC"
              className="h-[2em] w-[2em] rounded-full object-contain bg-red-600"
            />
            <h4 className="text-2xl font-semibold">Tucumán Kayak Club</h4>
          </div>
          <h6 className="text-lg font-semibold">
            Desarrollo y mantenimiento de página web
          </h6>
          <p className="text-sm text-gray-300 italic">
            Mar. 2024 – Actualidad · Freelance
          </p>
          <p className="text-base text-gray-300">
            Desarrollo integral del sitio institucional en React y Node.js.
            Implementación de diseño responsive, mantenimiento técnico y
            colaboración directa con el cliente para cubrir necesidades
            digitales.
          </p>
        </div>

        {/* Extras */}
        <div data-aos="fade-up">
          <h4 className="text-2xl font-semibold flex justify-center items-center gap-2">
            <BiRocket className="text-yellow-400" />
            Extras
          </h4>
          <p className="text-base text-gray-300">
            Proyectos personales y grupales con fines educativos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Trabajo;
