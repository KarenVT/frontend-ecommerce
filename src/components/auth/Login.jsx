import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import laptop from "../../assets/images/laptop.png";
import InputText from "../common/InputText";

// Componente de inicio de sesión para acceder a la cuenta
const Login = () => {
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  // Estado que almacena el error de inicio de sesión
  const [error, setError] = useState("");
  // Navegación para redirigir al usuario
  const navigate = useNavigate();
  // Contexto de autenticación para iniciar sesión
  const { login } = useContext(AuthContext);

  // Función para manejar los cambios en el formulario
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // iniciar sesión con los datos del formulario
    try {
      login(formData.email, formData.password);
      navigate("/"); // Redirigir al inicio después del login exitoso
    } catch (err) {
      setError(err.message);
    }
  };

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

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <InputText
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <InputText
              type="password"
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
              required
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
