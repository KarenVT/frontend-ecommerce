import { Routes, Route } from "react-router-dom";
import Inicio from "../components/pages/Inicio";
import Contact from "../components/pages/Contact";
import About from "../components/pages/AboutUs";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="/nosotros" element={<About />} />
      <Route path="/iniciosesion" element={<Login />} />
      <Route path="/registro" element={<Register />} />
    </Routes>
  );
};

export default Routers;
