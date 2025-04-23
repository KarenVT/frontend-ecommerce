import React from 'react'
import { FaLocationArrow } from "react-icons/fa"
import ButtonSearch from "./ButtonSearch"
import InputSearch from "../common/InputSearch"
import { useState, useEffect } from "react"
import useProducts from "../../Hooks/useProducts"
import Card from "../productsList/Card"

// Este componente es el que contiene el buscador de la página principal
const Search = () => {
  const [selectedButton, setSelectedButton] = useState("Nombre");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { products } = useProducts();

  // Filtrar productos basado en el término de búsqueda y criterio seleccionado
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredProducts([]);
      return;
    }

    let results = [];
    if (selectedButton === "Nombre") {
      results = products.filter(product => 
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else if (selectedButton === "Precio") {
      // Para precio, ahora buscamos productos cuyo precio contenga los dígitos introducidos
      results = products.filter(product => {
        // Convertir precio a string para hacer búsqueda por contenido
        const priceAsString = typeof product.price === 'number' 
          ? product.price.toString() 
          : product.price;
          
        // Buscar si el precio contiene los dígitos ingresados
        return priceAsString.includes(searchTerm);
      });
    }
    
    setFilteredProducts(results);
  }, [searchTerm, selectedButton, products]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="mx-auto max-w-7xl p-6">
      <div className="w-full flex flex-col md:flex-row justify-start items-start md:items-center gap-4 md:gap-2">
        <div className="w-64 flex justify-start items-start gap-5">
          <div className="w-12 h-12 relative">
            <FaLocationArrow className="w-12 h-12 text-secondary" />
          </div>
          <div className="justify-start text-black text-4xl font-semibold font-['Inter'] leading-[48px] tracking-wider">
            Búsqueda
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-center items-center gap-3.5">
          {/* Los dos botones permiten al usuario seleccionar entre buscar por nombre o por precio. */}
          <ButtonSearch
            nombre="Nombre"
            isSelected={selectedButton === "Nombre"}
            onSelect={() => setSelectedButton("Nombre")}
          />
          <ButtonSearch
            nombre="Precio"
            isSelected={selectedButton === "Precio"}
            onSelect={() => setSelectedButton("Precio")}
          />
          {/*un input para encontrar el producto. */}
          <InputSearch 
            placeholder={selectedButton === "Nombre" ? "Búsca un producto..." : "Buscar por precio..."} 
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {/* Mostrar los productos filtrados */}
      {filteredProducts.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Resultados de la búsqueda:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 items-center justify-items-center">
            {filteredProducts.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
      
      {searchTerm.trim() !== "" && filteredProducts.length === 0 && (
        <div className="mt-8 text-center">
          <p className="text-lg">No se encontraron resultados para tu búsqueda.</p>
        </div>
      )}
    </div>
  );
}

export default Search