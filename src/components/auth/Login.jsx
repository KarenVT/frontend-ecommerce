import React from "react";
import { Link } from "react-router-dom";
import laptop from "../../assets/images/laptop.png";

// Componente de inicio de sesión para acceder a la cuenta
const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Logo */}
      <h1 className="text-3xl font-bold mb-6">
        Compu<span className="text-secondary">Tecno</span>
      </h1>

      <div className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg w-full max-w-4xl">
        {/* Formulario */}
        <div className="w-full md:w-1/2 p-6 m-6">
          <h2 className="text-2xl font-semibold mb-2">Inicia Sesión</h2>
          <p className="text-gray-500 text-sm mb-6">Ingrese sus datos</p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Email"
              className="w-full border-b border-gray-300 py-2 px-3 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="w-full border-b border-gray-300 py-2 px-3 focus:outline-none"
            />

            <p className="text-sm text-secondary hover:underline cursor-pointer text-right">
              ¿Olvidaste la contraseña?
            </p>

            <button
              type="submit"
              className="w-full bg-button2 text-white py-2 rounded-md hover:bg-hover1 hover:text-secondary transition"
            >
              Inicio Sesión
            </button>
          </form>

          <p className="text-sm text-center mt-2">
            ¿No tienes Cuenta?
            <Link
              to="/registro"
              className="text-secondary hover:underline ml-1"
            >
              Crear una cuenta
            </Link>
          </p>
        </div>

        {/* Imagen */}
        <div className="hidden md:block w-1/2">
          <img src={laptop} alt="Laptop" className="rounded-r-lg" />
        </div>
      </div>

      <hr className="w-full mt-16 border-gray-300" />

      <footer className="mt-6 text-gray-500 text-sm">
        © Copyright 2025. CompuTecno
      </footer>
    </div>
  );
};

export default Login;
