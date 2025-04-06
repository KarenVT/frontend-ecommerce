import React from 'react'
import { FaLocationArrow } from "react-icons/fa";

// Este componente es una sección de la página de inicio que muestra una lista de categorías
const Category = () => {
  return (
    <div className="mx-auto max-w-7xl p-6">
      <div className="flex items-center gap-3 mb-8">
        <FaLocationArrow className="text-secondary w-12 h-12" />
        <h2 className="text-4xl font-semibold font-['Inter'] leading-[48px] tracking-wider ">
          Explorar por categoría
        </h2>
      </div>
      <p>Lista de categorias</p>
    </div>
  );
};
export default Category