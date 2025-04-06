
import { FaLocationArrow } from "react-icons/fa";

// Este componente es una sección de la página de inicio que muestra una lista de productos
const Products = () => {
  return (
    <div id="seccion-destino" className="mx-auto max-w-7xl p-6">
      <div className="flex items-center gap-3 mb-8">
        <FaLocationArrow className="text-secondary w-12 h-12" />
        <h2 className="text-4xl font-semibold font-['Inter'] leading-[48px] tracking-wider">
          Descubre Nuestros Productos
        </h2>
      </div>

       {/* Aqui se muestra la lista de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 items-center justify-items-center">
        <p>Cards</p>
      </div>
    </div>
  );
}

export default Products