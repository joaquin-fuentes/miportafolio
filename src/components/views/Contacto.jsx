import React from "react";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const url = `https://api.whatsapp.com/send?phone=${3816097754}&text=${encodeURIComponent(
  "Hola Joaquin!"
)}`;

const Contacto = () => {
  return (
    <section
      className="py-12 bg-[#023047] text-white text-center"
      id="contacto"
    >
      <h2
        data-aos="fade-up"
        className="text-4xl font-bold mb-8 relative inline-block after:content-[''] after:block after:h-1 after:w-16 after:bg-yellow-500 after:mt-2 mx-auto"
      >
        Contacto
      </h2>

      <div className="flex flex-col items-center space-y-6">
        {/* WhatsApp */}
        <a
          data-aos="fade-up"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-lg font-semibold hover:text-yellow-400 transition-colors"
        >
          <FaWhatsapp className="text-3xl text-green-500 mr-3" />
          381-6097754
        </a>

        {/* Email */}
        <div
          data-aos="fade-up"
          className="flex items-center text-lg font-semibold"
        >
          <FiMail className="text-3xl text-yellow-400 mr-3" />
          JOAQUIN.FUENTES1327@GMAIL.COM
        </div>

        {/* LinkedIn */}
        <a
          data-aos="fade-up"
          href="https://www.linkedin.com/in/joaqu%C3%ADn-fuentes/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-lg font-semibold hover:text-yellow-400 transition-colors"
        >
          <FaLinkedin className="text-3xl text-blue-600 mr-3" />
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
          <FaGithub className="text-3xl text-gray-800 mr-3" />
          Perfil de GitHub
        </a>
      </div>
    </section>
  );
};

export default Contacto;
