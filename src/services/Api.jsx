import axios from "axios";

const Api = axios.create({
  baseURL: "https://fake-api-nine-flame.vercel.app/", // Ajusta según tu configuración de json-server
  headers: {
    "Content-Type": "application/json",
  },
});




export default Api;