import Routers from "./routers/Routers";
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";
import { useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "./context/AuthContext";
import { useNavigate } from "react-router-dom";

function App() {
  const location = useLocation();
  const { isAuthenticated, user } = useContext(AuthContext);
  const navigate = useNavigate();

  // Redirigir al perfil o al panel de administración si el usuario ya está autenticado
  // y está intentando acceder a páginas de login o registro
  useEffect(() => {
    if (isAuthenticated && ["/iniciosesion", "/registro"].includes(location.pathname)) {
      navigate("/");
    }
  }, [isAuthenticated, location.pathname, navigate, user]);

  // Definir las rutas donde no queremos mostrar Navbar y Footer
  const hideElements = ["/iniciosesion", "/registro"].includes(
    location.pathname
  );

  return (
    <>
      {!hideElements && <Navbar />}
      <Routers />
      {!hideElements && <Footer />}
    </>
  );
}

export default App;
