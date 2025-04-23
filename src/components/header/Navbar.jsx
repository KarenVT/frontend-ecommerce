import { useState, useContext, useRef, useEffect } from 'react'
import { BsCart3 } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { FiChevronDown, FiLogOut, FiUser, FiSettings } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import MenuList from "./MenuList";
import ShoppingCart from '../Cart/ShoppingCart';
import { useCart } from '../../context/CartContext';
import { AuthContext } from '../../context/AuthContext';



const Navbar = () => {
   const [isCartOpen, setIsCartOpen] = useState(false);
   const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
   const { getCartItemCount } = useCart();
   const { user, isAuthenticated, logout } = useContext(AuthContext);
   const navigate = useNavigate();
   const userMenuRef = useRef(null);

   // Cerrar el menú de usuario cuando se hace clic fuera de él
   useEffect(() => {
     const handleClickOutside = (event) => {
       if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
         setIsUserMenuOpen(false);
       }
     };
     document.addEventListener("mousedown", handleClickOutside);
     return () => {
       document.removeEventListener("mousedown", handleClickOutside);
     };
   }, []);

   const handleLogout = () => {
     logout();
     setIsUserMenuOpen(false);
     navigate('/');
   };

  return (
    <header className="text-gray-600 body-font border-b-1 border-gray-200">
      <div className="container mx-auto w-full flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-2xl font-bold tracking-wide">
            Compu<span className="text-secondary">Tecno</span>
          </span>
        </a>
        <MenuList />
        <div className="flex flex-row items-center justify-center mt-4 gap-3">
          <button
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="text-white flex flex-row items-center bg-secondary font-bold border-0 py-1 px-3 focus:outline-none hover:bg-hover1 rounded text-base"
          >
            <BsCart3 className="text-white w-6 h-6 mx-1" />
            <span>({getCartItemCount()})</span>
          </button>

          {/* Menú de usuario */}
          <div className="relative" ref={userMenuRef}>
            <button
              className={`flex items-center py-1 px-2 rounded-md transition-colors ${
                isUserMenuOpen ? "bg-gray-100" : "hover:bg-gray-50"
              }`}
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            >
              {isAuthenticated ? (
                <>
                  <div className="w-8 h-8 rounded-full text-secondary flex items-center justify-center">
                    <CiUser className="w-6 h-6" />
                  </div>
                  <span className="text-sm hidden sm:inline font-medium mr-1">
                    {user?.name}
                  </span>
                  <FiChevronDown
                    className={`transition-transform duration-200 ${
                      isUserMenuOpen ? "transform rotate-180" : ""
                    }`}
                  />
                </>
              ) : (
                <>
                  <CiUser className="text-gray-700 w-6 h-6" />
                  <span className="ml-1 text-sm font-medium hidden sm:inline">
                    Cuenta
                  </span>
                  <FiChevronDown
                    className={`ml-1 transition-transform duration-200 ${
                      isUserMenuOpen ? "transform rotate-180" : ""
                    }`}
                  />
                </>
              )}
            </button>

            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 z-10 border border-gray-100">
                {isAuthenticated ? (
                  <>
                    <Link
                      to="/perfil"
                      className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      <FiUser className="mr-3 text-secondary w-4 h-4" />
                      Mi perfil
                    </Link>
                    {user?.role === "administrador" && (
                      <Link
                        to="/admin"
                        className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <FiSettings className="mr-3 text-secondary w-4 h-4" />
                        Panel de Administración
                      </Link>
                    )}
                    <div className="border-t border-gray-100 my-1"></div>
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      <FiLogOut className="mr-3 text-secondary w-4 h-4" />
                      Cerrar sesión
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/iniciosesion"
                      className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      <span className="mr-3 text-secondary">→</span>
                      Iniciar sesión
                    </Link>
                    <Link
                      to="/registro"
                      className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      <span className="mr-3 text-secondary">+</span>
                      Registrarse
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Carrito de compras */}
      <ShoppingCart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
    </header>
  );
}

export default Navbar