import React from "react";
import { Link } from "react-router-dom";

// Componente de registro para crear una cuenta
const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-3xl font-bold mb-6">
        Compu<span className="text-secondary">Tecno</span>
      </h1>

      <div className="bg-white shadow-lg p-8 rounded-lg w-full max-w-md">
        <h2 className="text-xl font-semibold text-center mb-2">
          Crea una cuenta
        </h2>
        <p className="text-gray-500 text-sm text-center mb-4">
          Ingrese sus datos
        </p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Nombre"
            className="w-full border-b border-gray-300 py-2 px-3 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border-b border-gray-300 py-2 px-3 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full border-b border-gray-300 py-2 px-3 focus:outline-none"
          />

          <button
            type="submit"
            className="w-full bg-secondary text-white py-2 rounded-md hover:text-secondary hover:bg-hover1 transition"
          >
            Crea tu cuenta
          </button>
        </form>

        <p className="text-sm text-gray-600 text-center mt-4">
          ¿Ya tienes una cuenta?{" "}
          <Link
            to="/iniciosesion"
            className="text-secondary font-medium hover:underline"
          >
            Iniciar Sesión
          </Link>
        </p>
      </div>

      <hr className="w-full mt-16 border-gray-300" />

      <footer className=" text-gray-500 mt-2 text-sm opacity-70">
        © Copyright 2025. CompuTecno
      </footer>
    </div>
  );
};

export default Register;
