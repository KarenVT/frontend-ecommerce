import { BsCart4 } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";

const ShoppingCart = ({ isCartOpen, setIsCartOpen }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-96 h-full bg-white shadow-lg border-l border-gray-200 p-4 transition-transform z-10 ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header del carrito */}
      <div className="flex justify-between items-center border-b border-gray-300 p-2">
        <h2 className="text-xl font-bold flex flex-row items-center">
          <span className="pr-2">
            <BsCart4 />
          </span>
          Carrito de Compras
        </h2>
        <button
          onClick={() => setIsCartOpen(false)}
          className="text-gray-500 hover:text-gray-800"
        >
          <IoIosClose size={26} />
        </button>
      </div>

      {/* Contenido vacío por ahora */}
      <div className="flex flex-col items-center justify-center mt-6 text-gray-500">
        <p className="text-lg mt-2">Tu carrito está vacío</p>
      </div>

      {/* Total y Botón de Pagar */}
      <div className="absolute bottom-6 left-0 w-full px-6">
        <p className="text-lg font-semibold text-gray-800">
          Total: <span className="text-primary">$0</span>
        </p>
        <Link to="/pago">
          <button className="w-full bg-secondary text-white py-3 mt-3 rounded-lg font-semibold text-lg shadow-lg hover:text-secondary hover:bg-hover1 transition-all">
            Pagar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ShoppingCart;
