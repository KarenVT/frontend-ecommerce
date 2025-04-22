import { Routes, Route } from "react-router-dom";
import Inicio from "../components/pages/Inicio";
import Contact from "../components/pages/Contact";
import About from "../components/pages/AboutUs";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Payment from "../components/pages/payment";
import Profile from "../components/pages/Profile";
import AdminPanel from "../components/admin/AdminPanel";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import AdminRoute from "../components/auth/AdminRoute";

const Routers = () => {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/" element={<Inicio />} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="/nosotros" element={<About />} />
      <Route path="/iniciosesion" element={<Login />} />
      <Route path="/registro" element={<Register />} />
      
      {/* Rutas protegidas (requieren autenticación) */}
      <Route element={<ProtectedRoute />}>
        <Route path="/pago" element={<Payment />} />
        <Route path="/perfil" element={<Profile />} />
      </Route>
      
      {/* Rutas para administradores */}
      <Route element={<AdminRoute />}>
        <Route path="/admin" element={<AdminPanel />} />
      </Route>
    </Routes>
  );
};

export default Routers;
