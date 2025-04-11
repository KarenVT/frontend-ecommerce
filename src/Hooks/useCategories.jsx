import { useState, useEffect } from "react";
import Api from "../services/Api"; // Asegúrate de tener configurado Axios

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Api.get("/categories")
      .then((response) => {
        setCategories(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message || "Error al obtener categorías");
        setLoading(false);
      });
  }, []);

  return { categories, loading, error };
};

export default useCategories;