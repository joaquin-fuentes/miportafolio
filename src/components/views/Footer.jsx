import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-[#023047] text-white text-center py-8">
      <h3 className="text-lg h-full border-t border-gray-600 pt-8">
        &copy; {new Date().getFullYear()} Todos los derechos reservados
      </h3>
    </footer>
  );
};

export default Footer;
