import axios from "axios";

const Api = axios.create({
  baseURL: "/api", // Ajusta según tu configuración de json-server
  headers: {
    "Content-Type": "application/json",
  },
});

export default Api;
