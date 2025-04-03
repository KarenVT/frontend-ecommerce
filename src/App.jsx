import Routers from "./routers/Routers";
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

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
