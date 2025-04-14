import { useState } from 'react'
import { BsCart3 } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import MenuList from "./MenuList";
import ShoppingCart from '../Cart/ShoppingCart';
import { useCart } from '../../context/CartContext';


const Navbar = () => {
   const [isCartOpen, setIsCartOpen] = useState(false);
   const { getCartItemCount } = useCart();
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
          <button className=" py-1">
            <CiUser className="text-black w-6 h-6" />
          </button>
        </div>
      </div>
      {/* Carrito de compras */}
      <ShoppingCart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
    </header>
  );
}

export default Navbar