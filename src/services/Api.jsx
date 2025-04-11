import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:3000", // Ajusta según tu configuración de json-server
  headers: {
    "Content-Type": "application/json",
  },
});

export default Api;