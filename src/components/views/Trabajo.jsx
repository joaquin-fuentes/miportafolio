import React from "react";

const Trabajo = () => {
  return (
    <section
      className="text-white p-8 bg-[#023047] text-center"
      id="experiencia"
    >
      {/* Título con subrayado decorativo */}
      <h2
        data-aos="fade-up"
        className="text-4xl font-bold mb-8 relative inline-block after:content-[''] after:block after:h-1 after:w-16 after:bg-yellow-500 after:mt-2 mx-auto text-center"
      >
        Trabajo
      </h2>

      {/* Experiencias laborales */}
      <div className="space-y-6">
        {/* RollingCode */}
        <div data-aos="fade-up" className="text-center">
          <h4 className="text-2xl font-semibold">RollingCode</h4>
          <h6 className="text-lg">Tutor en curso de Desarrollo Web</h6>
        </div>

        {/* Tucumán Kayak Club */}
        <div data-aos="fade-up" className="text-center">
          <h4 className="text-2xl font-semibold">Tucumán Kayak Club</h4>
          <h6 className="text-lg">Desarrollo y mantenimiento de página web</h6>
        </div>

        {/* Trece Software */}
        <div data-aos="fade-up" className="text-center">
          <h4 className="text-2xl font-semibold">Trece Software</h4>
          <h6 className="text-lg">Desarrollador Frontend con React</h6>
        </div>

        {/* Extras */}
        <div data-aos="fade-up" className="text-center">
          <h4 className="text-2xl font-semibold">Extras</h4>
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
