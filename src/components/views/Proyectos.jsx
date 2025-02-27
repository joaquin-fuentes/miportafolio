// Importación de imágenes de los proyectos
import portadaPortafolio from "../../assets/imgPortadaPortafolio.png";
import portadaTKC from "../../assets/portadatkc.png";
import portadaLJ from "../../assets/portadalj.png";
import portadaBonDia from "../../assets/portadaproyectogrupal.png";
import portadaCopaAmerica from "../../assets/portadaCopaAmerica.png";
import portadaHospedajes from "../../assets/portadaHospedajes.png";
import portadaRollingCode from "../../assets/portadaRollingCode.png";
import portadaRollingCodeKids from "../../assets/portadaRollingCodeKids.png";

// Definimos el array con la información de cada proyecto
const proyectosData = [
  {
    titulo: "Mi Portafolio",
    imagen: portadaPortafolio,
    githubUrl: "https://github.com/joaquin-fuentes/nuevoportafolio",
    demoUrl: "https://joaquinfuentes.site/",
    descripcion:
      "Este es un portafolio personal donde muestro mis proyectos y habilidades técnicas.",
    etiqueta: "Reactjs / Tailwind",
  },
  {
    titulo: "Tucumán Kayak Club",
    imagen: portadaTKC,
    githubUrl: "https://github.com/joaquin-fuentes/TKC-Front",
    demoUrl: "https://tucumankayakclub.netlify.app",
    descripcion:
      "Landing page para una empresa de turismo aventura con toda la información necesaria.",
    etiqueta: "Reactjs / Tailwind / Nodejs / Mongodb",
  },
  {
    titulo: "LJ Indumentaria",
    imagen: portadaLJ,
    githubUrl: "https://github.com/joaquin-fuentes/leo-indumentaria",
    demoUrl: "https://lj-indumentaria.netlify.app",
    descripcion:
      "E-commerce para una tienda de ropa con diseño responsivo y panel de administración.",
    etiqueta: "Reactjs / Bootstrap / Nodejs / Mongodb",
  },
  {
    titulo: "Bon Dia",
    imagen: portadaBonDia,
    githubUrl: "https://github.com/MauroDiazSantilli/ProyectoFinal-Grupo3",
    demoUrl: "https://bondia-restaurant.netlify.app/",
    descripcion:
      "Sitio web para un restaurante, desarrollado como proyecto grupal.",
    etiqueta: "Reactjs / Bootstrap / Nodejs / Mongodb",
  },
  {
    titulo: "Copa América 2024",
    imagen: portadaCopaAmerica,
    githubUrl: "https://github.com/joaquin-fuentes/copa-america-info",
    demoUrl: "https://copa-america-info.netlify.app/",
    descripcion:
      "Aplicación informativa sobre la Copa América 2024 con detalles y estadísticas.",
    etiqueta: "Html / Css",
  },
  {
    titulo: "Hospedajes Cadillal",
    imagen: portadaHospedajes,
    githubUrl: "https://github.com/joaquin-fuentes/hospedajes-cadillal-front",
    demoUrl: "https://www.hospedajescadillal.com/",
    descripcion:
      "Página web con hospedajes verificados para mayor seguridad de las personas.",
    etiqueta: "Reactjs / Tailwind / Nodejs / Mongodb",
  },
  {
    titulo: "RollingCode School",
    imagen: portadaRollingCode,
    githubUrl: "",
    demoUrl: "https://web.rollingcodeschool.com/",
    descripcion: "Página web institucional de RollingCode school.",
    etiqueta: "NextJs / Tailwind",
  },
  {
    titulo: "RollingCode Kids",
    imagen: portadaRollingCodeKids,
    githubUrl: "",
    demoUrl: "https://kids.rollingcodeschool.com/",
    descripcion: "Página web de RollingCode Kids.",
    etiqueta: "React / Tailwind",
  },
];

const Proyectos = () => {
  return (
    <section
      className="scroll-mt-20 py-12 bg-[#023047] text-white text-center"
      id="proyectos"
    >
      <h2
        data-aos="fade-up"
        className="text-4xl font-bold mb-12 relative inline-block after:content-[''] after:block after:h-1 after:w-16 after:bg-yellow-500 after:mt-2 mx-auto"
      >
        Proyectos
      </h2>

      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 px-4">
        {proyectosData.map((proyecto, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 w-[85%] md:w-[40%] lg:w-[30%] flex flex-col"
          >
            <div className="relative">
              <img
                src={proyecto.imagen}
                alt={`Imagen del proyecto ${proyecto.titulo}`}
                className="w-full h-40 object-cover rounded-t-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 hover:opacity-30 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 opacity-90">
                {proyecto.etiqueta && (
                  <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    {proyecto.etiqueta}
                  </span>
                )}
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow justify-between bg-gray-900 hover:bg-gray-700 transition-colors duration-300">
              <div>
                <h4 className="text-2xl font-semibold text-white mb-2">
                  {proyecto.titulo}
                </h4>
                <p className="text-gray-400 text-sm">{proyecto.descripcion}</p>
              </div>
              <div className="flex justify-center space-x-4 mt-4">
                {proyecto.githubUrl && (
                  <a
                    href={proyecto.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-400 hover:text-yellow-300 font-semibold text-sm tracking-wide border border-yellow-400 hover:border-yellow-300 px-4 py-2 rounded-lg transition-all duration-300 shadow-lg"
                  >
                    Ver en Github
                  </a>
                )}
                <a
                  href={proyecto.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold text-sm tracking-wide px-4 py-2 rounded-lg transition-all duration-300 shadow-lg"
                >
                  Ver Página Web
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Proyectos;
