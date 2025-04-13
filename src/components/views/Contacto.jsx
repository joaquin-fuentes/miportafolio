import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const url = `https://api.whatsapp.com/send?phone=3816097754&text=${encodeURIComponent(
  "Hola Joaquin!"
)}`;

const Contacto = () => {
  return (
    <section
      className="scroll-mt-20 py-12 bg-[#023047] text-white text-center"
      id="contacto"
    >
      <h2
        data-aos="fade-up"
        className="text-4xl font-bold mb-6 relative inline-block after:content-[''] after:block after:h-1 after:w-16 after:bg-yellow-500 after:mt-2 mx-auto"
      >
        Contacto
      </h2>

      {/* Texto introductorio */}
      <p className="text-gray-300 mb-8 max-w-xl mx-auto" data-aos="fade-up">
        ¿Querés ponerte en contacto conmigo? <br /> Te dejo mis redes y formas
        directas para que podamos hablar.
      </p>

      <div className="flex flex-col items-center space-y-6 md:space-y-12">
        {/* WhatsApp */}
        <a
          data-aos="fade-up"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-lg font-semibold hover:text-yellow-400 transition-colors"
        >
          <FaWhatsapp className="text-2xl sm:text-3xl text-green-500 mr-3 animate-pulse" />
          381-6097754
        </a>

        {/* Email */}
        <a
          data-aos="fade-up"
          href="mailto:joaquin.fuentes1327@gmail.com"
          className="flex items-center text-lg font-semibold hover:text-yellow-400 transition-colors"
        >
          <FiMail className="text-2xl sm:text-3xl text-yellow-400 mr-3" />
          joaquin.fuentes1327@gmail.com
        </a>

        {/* LinkedIn */}
        <a
          data-aos="fade-up"
          href="https://www.linkedin.com/in/joaqu%C3%ADn-fuentes/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-lg font-semibold hover:text-yellow-400 transition-colors"
        >
          <FaLinkedin className="text-2xl sm:text-3xl text-blue-600 mr-3" />
          Perfil de LinkedIn
        </a>

        {/* GitHub */}
        <a
          data-aos="fade-up"
          href="https://github.com/joaquin-fuentes"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-lg font-semibold hover:text-yellow-400 transition-colors"
        >
          <FaGithub className="text-2xl sm:text-3xl text-gray-300 mr-3" />
          Perfil de GitHub
        </a>
      </div>
    </section>
  );
};

export default Contacto;
