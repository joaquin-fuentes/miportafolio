import imgPerfil from "../../assets/sinfondo.png";
import imgFondo from "../../assets/fondop1.jpg"; // Carga la imagen de fondo

const Portada = () => {
  return (
    <section
      id="home"
      className="bg-cover bg-center bg-no-repeat text-white min-h-screen flex items-center justify-center pt-8 md:pt-0"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${imgFondo})`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Imagen de perfil */}
        <div className="flex justify-center lg:justify-start">
          <img
            src={imgPerfil}
            alt="Imagen de perfil de Joaquin Fuentes, Desarrollador Web Full Stack"
            className="w-3/4 lg:w-3/4 rounded-full shadow-lg"
            data-aos="fade-up"
          />
        </div>

        {/* Texto de la portada */}
        <div className="text-center lg:text-left" data-aos="fade-up">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4">
            Joaquín Fuentes
          </h1>
          <h2 className="text-[#8ecae6] text-xl lg:text-3xl font-semibold mb-6">
            Desarrollador Web Full Stack
          </h2>
          <pre className="text-white py-4 rounded-md max-w-full text-center lg:text-left">
            <code className="text-xs sm:text-sm lg:text-base break-words">
              {`const saludar =()=>console.log("Hola Mundo!")\nsaludar()`}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
};

export default Portada;
