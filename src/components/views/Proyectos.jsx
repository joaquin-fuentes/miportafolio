import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Importación de imágenes de los proyectos
import portadaPortafolio from "../../assets/imgPortadaPortafolio.png";
import portadaTKC from "../../assets/portadatkc.png";
import portadaLJ from "../../assets/portadalj.png";
import portadaBonDia from "../../assets/portadaproyectogrupal.png";
import portadaCopaAmerica from "../../assets/portadaCopaAmerica.png";
import portadaHospedajes from "../../assets/portadaHospedajes.png";
import portadaRollingCode from "../../assets/portadaRollingCode.png";
import portadaRollingCodeKids from "../../assets/portadaRollingCodeKids.png";
import portadaStudio from "../../assets/portadaStudio.png";
import portadaUnaje from "../../assets/portadaUnaje.png";

// Definimos el array con la información de cada proyecto
const proyectosData = [
  {
    titulo: "Mi Portafolio",
    imagen: portadaPortafolio,
    tipo: "propio",
    githubUrl: "https://github.com/joaquin-fuentes/nuevoportafolio",
    demoUrl: "https://joaquinfuentes.site/",
    descripcion:
      "Este es un portafolio personal donde muestro mis proyectos y habilidades técnicas.",
    etiqueta: "Reactjs / Tailwind",
  },
  {
    titulo: "Tucumán Kayak Club",
    imagen: portadaTKC,
    tipo: "propio",
    githubUrl: "https://github.com/joaquin-fuentes/TKC-Front",
    demoUrl: "https://tucumankayakclub.netlify.app",
    descripcion:
      "Landing page para una empresa de turismo aventura con toda la información necesaria.",
    etiqueta: "Reactjs / Tailwind / Nodejs / Mongodb",
  },
  {
    titulo: "Hospedajes Cadillal",
    imagen: portadaHospedajes,
    tipo: "propio",
    githubUrl: "https://github.com/joaquin-fuentes/hospedajes-cadillal-front",
    demoUrl: "https://www.hospedajescadillal.com/",
    descripcion:
      "Página web con hospedajes verificados para mayor seguridad de las personas.",
    etiqueta: "Reactjs / Tailwind / Nodejs / Mongodb",
  },
  {
    titulo: "LJ Indumentaria",
    imagen: portadaLJ,
    tipo: "propio",
    githubUrl: "https://github.com/joaquin-fuentes/leo-indumentaria",
    demoUrl: "https://lj-indumentaria.netlify.app",
    descripcion:
      "E-commerce para una tienda de ropa con diseño responsivo y panel de administración.",
    etiqueta: "Reactjs / Bootstrap / Nodejs / Mongodb",
  },
  {
    titulo: "Copa América 2024",
    imagen: portadaCopaAmerica,
    tipo: "propio",
    githubUrl: "https://github.com/joaquin-fuentes/copa-america-info",
    demoUrl: "https://copa-america-info.netlify.app/",
    descripcion:
      "Aplicación informativa sobre la Copa América 2024 con detalles y estadísticas.",
    etiqueta: "Html / Css",
  },
  {
    titulo: "RollingCode School",
    imagen: portadaRollingCode,
    tipo: "colaborativo",
    githubUrl: "",
    demoUrl: "https://web.rollingcodeschool.com/",
    descripcion: "Página web institucional de RollingCode school.",
    etiqueta: "NextJs / Tailwind",
  },
  {
    titulo: "RollingCode Kids",
    tipo: "colaborativo",
    imagen: portadaRollingCodeKids,
    githubUrl: "",
    demoUrl: "https://kids.rollingcodeschool.com/",
    descripcion: "Página web de RollingCode Kids.",
    etiqueta: "React / Tailwind",
  },
  {
    titulo: "RollingCode Studio",
    imagen: portadaStudio,
    tipo: "colaborativo",
    githubUrl: "",
    demoUrl: "https://rollingcodestudio.com/",
    descripcion:
      "Sitio web de RollingCode Studio. Donde muestran servicios, proyectos, clientes, etc.",
    etiqueta: "Next JS / Tailwind",
  },
  {
    titulo: "Liderando Futuro",
    imagen: portadaUnaje,
    tipo: "colaborativo",
    githubUrl: "",
    demoUrl: "https://unaje.org.ar/liderandofuturo/",
    descripcion: "Sitio web para evento Liderando Futuro",
    etiqueta: "Reactjs / Tailwind",
  },
  {
    titulo: "Bon Dia",
    imagen: portadaBonDia,
    tipo: "colaborativo",
    githubUrl: "https://github.com/MauroDiazSantilli/ProyectoFinal-Grupo3",
    demoUrl: "https://bondia-restaurant.netlify.app/",
    descripcion:
      "Sitio web para un restaurante, desarrollado como proyecto grupal.",
    etiqueta: "Reactjs / Bootstrap / Nodejs / Mongodb",
  },
];

const ProyectosSection = ({ titulo, proyectos }) => (
  <div className="mb-16">
    <h3 className="text-3xl font-bold mb-8 relative inline-block after:content-[''] after:block after:h-1 after:w-16 after:bg-blue-500 after:mt-2 mx-auto">
      {titulo}
    </h3>
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      loop={true}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 2000 }}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="relative h-full rounded-xl"
    >
      {proyectos.map((proyecto, index) => (
        <SwiperSlide key={index} className="h-full flex rounded-xl">
          <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 flex flex-col min-h-[350px]">
            <div className="relative">
              <img
                src={proyecto.imagen}
                alt={proyecto.titulo}
                className="w-full h-40 object-cover"
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
                <h4 className="text-2xl font-semibold mb-2">
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
                    className="text-yellow-400 border border-yellow-400 hover:border-yellow-300 hover:text-yellow-300 px-4 py-2 rounded-lg transition-all shadow-lg text-sm"
                  >
                    Ver en Github
                  </a>
                )}
                <a
                  href={proyecto.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-400 hover:bg-yellow-300 text-black px-4 py-2 rounded-lg transition-all shadow-lg text-sm"
                >
                  Ver Página Web
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

const Proyectos = () => {
  const propios = proyectosData.filter((p) => p.tipo === "propio");
  const colaborativos = proyectosData.filter((p) => p.tipo === "colaborativo");

  return (
    <section
      id="proyectos"
      className="scroll-mt-20 py-12 bg-[#023047] text-white text-center"
    >
      <h2 className="text-4xl font-bold mb-12 relative inline-block after:content-[''] after:block after:h-1 after:w-16 after:bg-yellow-500 after:mt-2 mx-auto">
        Proyectos
      </h2>
      <div className="max-w-7xl mx-auto px-4">
        <ProyectosSection titulo="Proyectos individuales" proyectos={propios} />
        <ProyectosSection
          titulo="Proyectos colaborativos"
          proyectos={colaborativos}
        />
      </div>
    </section>
  );
};

export default Proyectos;
