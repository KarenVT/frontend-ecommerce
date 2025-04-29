// usa ES modules
import jsonServer from "json-server";
import process from 'node:process';

const server = jsonServer.create();
const router = jsonServer.router("api/db/db.json");
const middlewares = jsonServer.defaults({
  static: "./dist", // Apunta a la carpeta de salida de tu build
});

server.use(middlewares);
server.use("/api", router); // Montamos json-server en /api
server.listen(process.env.PORT || 3000, () => {
  console.log("JSON Server está ejecutándose");
});
