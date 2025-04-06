import Underline from "../common/Underline";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoIosMailOpen } from "react-icons/io";

// Este componente es la sección de contacto de la página web.
const Contact = () => {
  return (
    <div className="w-full flex flex-col items-center px-6 md:px-20 pt-12 md:pt-32 pb-8">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-semibold p-6 tracking-wide text-center">
          Contáctanos
        </h2>
        <div className="bg-white shadow-md rounded-lg p-8  w-full max-w-md">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nombre"
              className="w-full border-b border-gray-300 py-2 px-3 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Correo"
              className="w-full border-b border-gray-300 py-2 px-3 focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Teléfono"
              className="w-full border-b border-gray-300 py-2 px-3 focus:outline-none"
            />
            <textarea
              placeholder="Mensaje"
              className="w-full border-b border-gray-300 py-2 px-3 focus:outline-none h-24"
            ></textarea>
            <button className="w-full bg-secondary text-white p-3 rounded-lg font-semibold">
              Enviar
            </button>
          </form>
        </div>
      </div>
      <Underline />
      {/* Informacion de contacto */}
      <div className="w-full flex flex-col ">
        <div className="flex md:flex-row flex-col items-center md:justify-evenly gap-10 md:gap-0">
          <div className="flex flex-col items-start w-72 gap-1 p-2">
            <div className="flex flex-row items-center py-4 gap-2 justify-start">
              <BiSolidPhoneCall className="text-button1 w-10 h-10" />
              <h3 className="font-semibold text-lg">Llámanos</h3>
            </div>
            <p className="text-gray-500">Disponible las 24 horas al día</p>
            <p className="text-gray-500 font-semibold">+57 601 3456789</p>
          </div>

          <div className="flex flex-col items-start w-72 max-h-36 gap-1 p-2 ">
            <div className="flex flex-row items-center py-4 gap-2 justify-start">
              <IoIosMailOpen className="text-button1 w-10 h-10" />
              <h3 className="font-semibold text-lg">Escríbenos</h3>
            </div>
            <p className="text-gray-500">Contactanos en cualquier momento</p>
            <p className="text-gray-500 font-semibold">
              contacto@computecno.com.co
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
