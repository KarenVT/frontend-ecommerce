import { Routes, Route } from "react-router-dom";
import Inicio from "../components/pages/Inicio";
import Contact from "../components/pages/Contact";
import About from "../components/pages/AboutUs";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Payment from "../components/pages/payment";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="/nosotros" element={<About />} />
      <Route path="/iniciosesion" element={<Login />} />
      <Route path="/registro" element={<Register />} />
      <Route path="/pago" element={<Payment />} />
    </Routes>
  );
};

export default Routers;
