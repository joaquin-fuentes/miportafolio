import { useForm, Controller } from "react-hook-form";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { IoMdMail } from "react-icons/io";
import { RiContactsFill } from "react-icons/ri";
import { IoIosText } from "react-icons/io";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormularioContacto = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const onSubmit = (data) => {
    const templateParams = {
      user_name: data.name,
      email_id: data.email,
      message: `Hola, este es un msj de tu PORTAFOLIO  Mensaje adicional: ${data.message}`,
      to_name: "Joaquin",
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY).then(
      (response) => {
        Swal.fire(
          "Enviado!",
          "Su mensaje fue enviado correctamente",
          "success"
        );
        reset(); // Resetea el formulario después de enviarlo
      },
      (err) => {
        Swal.fire("Error!", "No se pudo procesar su petición", "error");
      }
    );
  };
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    return Swal.fire(
      "Error!",
      "Faltan claves de configuración de EmailJS",
      "error"
    );
  }

  return (
    <div className="bg-[#023047] text-white flex flex-col items-center justify-center pt-12 px-6">
      <h2
        data-aos="fade-up"
        className="text-4xl font-bold mb-8 relative inline-block after:content-[''] after:block after:h-1 after:w-16 after:bg-yellow-500 after:mt-2 mx-auto"
      >
        Envía tu feedback
      </h2>

      <form
        data-aos="fade-up"
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-3xl space-y-6"
      >
        {/* Nombre */}
        <div>
          <label className="block mb-2 font-semibold" htmlFor="name">
            <RiContactsFill className="inline-block mr-2 text-2xl" /> Nombre
          </label>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: "El nombre es obligatorio" }}
            render={({ field }) => (
              <input
                className={`w-full p-3 bg-[#193f52] text-white rounded-md outline-none focus:ring-2 focus:ring-yellow-500 transition ${
                  errors.name ? "border-yellow-500" : ""
                }`}
                placeholder="Ingrese su nombre"
                type="text"
                id="name"
                {...field}
              />
            )}
          />
          {errors.name && (
            <p className="text-yellow-500 text-sm mt-1">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 font-semibold" htmlFor="email">
            <IoMdMail className="inline-block mr-2 text-2xl" /> Email
          </label>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: "El email es obligatorio",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Email inválido",
              },
            }}
            render={({ field }) => (
              <input
                className={`w-full p-3 bg-[#193f52] text-white rounded-md outline-none focus:ring-2 focus:ring-yellow-500 transition ${
                  errors.email ? "border-yellow-500" : ""
                }`}
                placeholder="Ingrese su email"
                type="email"
                id="email"
                {...field}
              />
            )}
          />
          {errors.email && (
            <p className="text-yellow-500 text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Mensaje */}
        <div>
          <label className="block mb-2 font-semibold" htmlFor="message">
            <IoIosText className="inline-block mr-2 text-2xl" /> Mensaje
          </label>
          <Controller
            name="message"
            control={control}
            defaultValue=""
            rules={{ required: "El mensaje es obligatorio" }}
            render={({ field }) => (
              <textarea
                className={`w-full p-3 bg-[#193f52] text-white rounded-md outline-none focus:ring-2 focus:ring-yellow-500 transition ${
                  errors.message ? "border-yellow-500" : ""
                }`}
                placeholder="Escriba aquí su mensaje"
                id="message"
                rows="4"
                {...field}
              />
            )}
          />
          {errors.message && (
            <p className="text-yellow-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Botón enviar */}
        <div className="flex justify-center mt-4">
          <button className="bg-yellow-500 text-black font-semibold px-8 py-3 rounded-md hover:bg-yellow-600 transition">
            Enviar
          </button>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
};

export default FormularioContacto;
