import { useState, useContext, useRef, useEffect } from 'react'
import { BsCart3 } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
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
        <div className="flex flex-row items-center justify-center mt-4 gap-1">
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
              className="py-1 flex items-center" 
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            >
              <CiUser className="text-black w-6 h-6" />
              {isAuthenticated && (
                <span className="ml-1 text-sm hidden sm:inline">{user?.name}</span>
              )}
            </button>
            
            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                {isAuthenticated ? (
                  <>
                    <div className="px-4 py-2 text-sm text-gray-700 border-b">
                      Hola, {user?.name}
                    </div>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Cerrar sesión
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/iniciosesion"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      Iniciar sesión
                    </Link>
                    <Link
                      to="/registro"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
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