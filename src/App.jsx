import "./App.css";

import Menu from "./components/views/Menu";
import Footer from "./components/views/Footer";
import Portada from "./components/views/Portada";
import SobreMi from "./components/views/SobreMi";
import Trabajo from "./components/views/Trabajo";
import Conocimientos from "./components/views/Conocimientos";
import Contacto from "./components/views/Contacto";
import Educacion from "./components/views/Educacion";
import Proyectos from "./components/views/Proyectos";
import FormularioContacto from "./components/views/FormularioContacto";
import Laberinto from "./components/views/juegos/Laberinto";
import Cartas from "./components/views/juegos/Cartas";
import WhatsappButton from "./components/WhatsappButton";

function App() {
  return (
    <>
      <Menu />
      <div className="main bg-dark m-0">
        <Portada />

        {/* Contenedor principal con Tailwind */}
        <div className="">
          {/* Sobre mí y Trabajo en columnas en pantallas pequeñas, en filas en grandes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 ">
            <SobreMi />
            <Trabajo />
          </div>

          {/* Sección de Conocimientos */}
          <Conocimientos />

          {/* Contacto y Educación */}
          <div className="grid grid-cols-1 lg:grid-cols-2 ">
            <Contacto />
            <Educacion />
          </div>

          {/* Proyectos */}
          <Proyectos />

          <div className="hidden lg:block">
            {/* Laberinto */}
            <Laberinto />
          </div>
          {/* Cartas */}
          <Cartas />
          {/* Formulario de Contacto */}
          <FormularioContacto />
        </div>
      </div>
      <WhatsappButton />
      <Footer />
    </>
  );
}

export default App;
