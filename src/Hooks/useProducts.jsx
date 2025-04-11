import { useEffect, useState } from "react";
import Api from "../services/Api";

const useProducts = (category) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await Api.get("/products");
        const filteredProducts = category === "all"
          ? response.data
          : response.data.filter((product) => product.category === category);

        setProducts(filteredProducts);
      } catch (error) {
        setError(error.message || "Error al obtener productos");
      }
      setLoading(false);
    };

    fetchProducts();
  }, [category]); // Se ejecuta cuando cambia la categoría

  return { products, loading, error };
};

export default useProducts;