import { BsCart4 } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { IoMdTrash } from "react-icons/io";

const ShoppingCart = ({ isCartOpen, setIsCartOpen }) => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
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

      {/* Contenido del carrito */}
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-6 text-gray-500">
          <p className="text-lg mt-2">Tu carrito está vacío</p>
        </div>
      ) : (
        <div className="mt-4 flex-1 overflow-y-auto">
          {cartItems.map((item) => (
            <div key={item.id} className="flex border-b border-gray-200 py-2">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-16 h-16 object-contain"
              />
              <div className="ml-2 flex-1">
                <h3 className="text-sm font-medium">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.price}</p>
                <div className="flex items-center mt-1">
                  <button 
                    onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    -
                  </button>
                  <span className="mx-2 text-sm">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    +
                  </button>
                </div>
              </div>
              <button 
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                <IoMdTrash />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Total y Botón de Pagar */}
      <div className="absolute bottom-6 left-0 w-full px-6">
        <p className="text-lg font-semibold text-gray-800">
          Total: <span className="text-primary">{getCartTotal().toFixed(2)} US$</span>
        </p>
        <Link to="/pago">
          <button 
            className="w-full bg-secondary text-white py-3 mt-3 rounded-lg font-semibold text-lg shadow-lg hover:text-secondary hover:bg-hover1 transition-all"
            disabled={cartItems.length === 0}
          >
            Pagar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ShoppingCart;
