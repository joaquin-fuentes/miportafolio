import React, { useState, useEffect, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import logoOscuro from "../../assets/logo1.png";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500 ease-in-out
        ${
          scrolled
            ? "bg-[#023047] shadow-lg"
            : "lg:bg-transparent bg-[#023047] lg:shadow-none"
        }
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#home">
          <img
            src={logoOscuro}
            alt="Logo de Joaquín Fuentes - Desarrollador Web Full Stack"
            className="w-20"
          />
        </a>

        {/* Menú hamburguesa en móviles */}
        <div className="lg:hidden" onClick={toggleMenu}>
          {menuOpen ? (
            <IoClose className="text-white text-4xl cursor-pointer" />
          ) : (
            <GiHamburgerMenu className="text-white text-4xl cursor-pointer" />
          )}
        </div>

        {/* Links de navegación para pantallas grandes */}
        <nav className="hidden lg:flex space-x-6">
          <a
            href="#sobremi"
            className="text-white hover:text-yellow-400 transition font-medium"
          >
            Sobre mí
          </a>
          <a
            href="#experiencia"
            className="text-white hover:text-yellow-400 transition font-medium"
          >
            Experiencia
          </a>
          <a
            href="#conocimientos"
            className="text-white hover:text-yellow-400 transition font-medium"
          >
            Stack Tecnológico
          </a>
          <a
            href="#contacto"
            className="text-white hover:text-yellow-400 transition font-medium"
          >
            Contacto
          </a>
          <a
            href="#educacion"
            className="text-white hover:text-yellow-400 transition font-medium"
          >
            Educación
          </a>
          <a
            href="#proyectos"
            className="text-white hover:text-yellow-400 transition font-medium"
          >
            Proyectos
          </a>
        </nav>
      </div>

      {/* Menú móvil con enlaces */}
      <nav
        ref={menuRef}
        className={`lg:hidden bg-[#023047] transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4">
          <li>
            <a
              href="#sobremi"
              className="text-white hover:text-yellow-400 transition font-medium"
              onClick={handleLinkClick}
            >
              Sobre mí
            </a>
          </li>
          <li>
            <a
              href="#experiencia"
              className="text-white hover:text-yellow-400 transition font-medium"
              onClick={handleLinkClick}
            >
              Experiencia
            </a>
          </li>
          <li>
            <a
              href="#conocimientos"
              className="text-white hover:text-yellow-400 transition font-medium"
              onClick={handleLinkClick}
            >
              Stack Tecnológico
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              className="text-white hover:text-yellow-400 transition font-medium"
              onClick={handleLinkClick}
            >
              Contacto
            </a>
          </li>
          <li>
            <a
              href="#educacion"
              className="text-white hover:text-yellow-400 transition font-medium"
              onClick={handleLinkClick}
            >
              Educación
            </a>
          </li>
          <li>
            <a
              href="#proyectos"
              className="text-white hover:text-yellow-400 transition font-medium"
              onClick={handleLinkClick}
            >
              Proyectos
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
