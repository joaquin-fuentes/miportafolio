import React from "react";

// Importación de imágenes de los proyectos
import portadaPortafolio from "../../assets/portadamiportafolio.png";
import portadaTKC from "../../assets/portadatkc.png";
import portadaLJ from "../../assets/portadalj.png";
import portadaBonDia from "../../assets/portadaproyectogrupal.png";
import portadaCopaAmerica from "../../assets/portadaCopaAmerica.png";

// Definimos el array con la información de cada proyecto
const proyectosData = [
  {
    titulo: "Mi Portafolio",
    imagen: portadaPortafolio,
    githubUrl: "https://github.com/joaquin-fuentes/nuevoportafolio",
    demoUrl: "https://joaquin-fuentes.github.io/miportafolio/",
  },
  {
    titulo: "Tucumán Kayak Club",
    imagen: portadaTKC,
    githubUrl: "https://github.com/joaquin-fuentes/TKC-Front",
    demoUrl: "https://tucumankayakclub.netlify.app",
  },
  {
    titulo: "LJ Indumentaria",
    imagen: portadaLJ,
    githubUrl: "https://github.com/joaquin-fuentes/leo-indumentaria",
    demoUrl: "https://lj-indumentaria.netlify.app",
  },
  {
    titulo: "Bon Dia",
    imagen: portadaBonDia,
    githubUrl: "https://github.com/MauroDiazSantilli/ProyectoFinal-Grupo3",
    demoUrl: "https://bondia-restaurant.netlify.app/",
  },
  {
    titulo: "Copa América 2024",
    imagen: portadaCopaAmerica,
    githubUrl: "https://github.com/joaquin-fuentes/copa-america-info",
    demoUrl: "https://copa-america-info.netlify.app/",
  },
];

const Proyectos = () => {
  return (
    <section
      className="py-12 bg-[#023047] text-white text-center"
      id="proyectos"
    >
      <h2
        data-aos="fade-up"
        className="text-4xl font-bold mb-12 relative inline-block after:content-[''] after:block after:h-1 after:w-16 after:bg-yellow-500 after:mt-2 mx-auto"
      >
        Proyectos
      </h2>

      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 px-6">
        {/* Recorremos el array para generar una tarjeta por cada proyecto */}
        {proyectosData.map((proyecto, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 w-full sm:w-1/3 lg:w-1/4"
          >
            <img
              src={proyecto.imagen}
              alt={`Imagen del proyecto ${proyecto.titulo}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h4 className="text-2xl font-semibold mb-2">{proyecto.titulo}</h4>
              <div className="flex justify-center space-x-2">
                <a
                  href={proyecto.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-yellow-300"
                >
                  Github
                </a>
                <span>|</span>
                <a
                  href={proyecto.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-yellow-300"
                >
                  Página web
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
