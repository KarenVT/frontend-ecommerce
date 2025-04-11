import React from 'react'
import Card from './Card';
import { FaLocationArrow } from "react-icons/fa";
import useProducts from "../../Hooks/useProducts";

// prop viene de Inicio.jsx
const Products = ({ selectedCategory }) => {
  const { products } = useProducts();

  const filteredProducts =
    selectedCategory === null || selectedCategory === "0"
      ? products
      : products.filter(
          (product) => product.category_id === parseInt(selectedCategory)
        );

  return (
    <div id="seccion-destino" className="mx-auto max-w-7xl p-6">
      <div className="flex items-center gap-3 mb-8">
        <FaLocationArrow className="text-secondary w-12 h-12" />
        <h2 className="text-4xl font-semibold font-['Inter'] leading-[48px] tracking-wider">
          Descubre Nuestros Productos
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 items-center justify-items-center">
        {filteredProducts.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;