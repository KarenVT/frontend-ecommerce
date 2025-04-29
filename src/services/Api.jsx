import axios from "axios";

const Api = axios.create({
  baseURL: "/api", // URL relativa para producción en Azure
  headers: {
    "Content-Type": "application/json",
  },
});

export default Api;