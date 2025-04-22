import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

// Componente de registro para crear una cuenta
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { register } = useContext(AuthContext);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    
    try {
      register(formData.name, formData.email, formData.password);
      navigate("/"); // Redirigir al inicio después del registro exitoso
    } catch (err) {
      setError(err.message);
    }
  };

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

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleChange}
            className="w-full border-b border-gray-300 py-2 px-3 focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border-b border-gray-300 py-2 px-3 focus:outline-none"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
            className="w-full border-b border-gray-300 py-2 px-3 focus:outline-none"
            required
            minLength={6}
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
