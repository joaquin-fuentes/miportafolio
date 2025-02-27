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
      {/* Título con subrayado decorativo */}
      <h2
        data-aos="fade-up"
        className="text-4xl font-bold mb-8 relative inline-block after:content-[''] after:block after:h-1 after:w-16 after:bg-yellow-500 after:mt-2 mx-auto text-center"
      >
        Experiencia
      </h2>

      {/* Experiencias laborales */}
      <div className="space-y-6">
        {/* RollingCode */}
        <div data-aos="fade-up" className="relative text-center">
          <div className="flex items-center justify-center space-x-1">
            <img
              src={logoRolling}
              alt="Logo RollingCode"
              className="h-[3em] w-[3em] object-contain rounded-full"
            />
            <h4 className="text-2xl font-semibold inline-block">RollingCode</h4>
          </div>
          <div>
            <h6 className="text-lg">Desarrollador Web Fullstack</h6>
            <h6 className="text-lg">Tutor en curso de Desarrollo Web</h6>
            <h6 className="text-lg">Mentor en curso de Desarrollo Web</h6>
          </div>
        </div>

        {/* Tucumán Kayak Club */}
        <div data-aos="fade-up" className="text-center">
          <div className="flex items-center justify-center space-x-1">
            <img
              src={logoTkc}
              alt="Logo RollingCode"
              className="h-[2em] w-[2em] object-contain rounded-full bg-red-600"
            />
            <h4 className="text-2xl font-semibold inline-block">
              Tucumán Kayak Club
            </h4>
          </div>{" "}
          <h6 className="text-lg">Desarrollo y mantenimiento de página web</h6>
        </div>

        {/* Trece Software */}
        <div data-aos="fade-up" className="text-center">
          <div className="flex items-center justify-center space-x-1">
            <img
              src={logoTrece}
              alt="Logo RollingCode"
              className="h-[3em] w-[3em] object-contain rounded-full"
            />
            <h4 className="text-2xl font-semibold inline-block">
              TreceSoftware
            </h4>
          </div>{" "}
          <h6 className="text-lg">Desarrollador Frontend con React</h6>
        </div>

        {/* Extras */}
        <div data-aos="fade-up" className="text-center">
          <h4 className="text-2xl font-semibold flex justify-center items-center space-x-2">
            <BiRocket className="text-yellow-400" /> {/* Ícono decorativo */}
            <span>Extras</span>
          </h4>{" "}
          <h6 className="text-lg">
            Desarrollos individuales y grupales para trabajos con fines
            educativos
          </h6>
        </div>
      </div>
    </section>
  );
};

export default Trabajo;
