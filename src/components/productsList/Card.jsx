import React, { useState, useRef } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useCart } from '../../context/CartContext';

// prop viene de Products.jsx
const Card = ({ product }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const quantityRef = useRef(null);
  const { addToCart, removeFromCart } = useCart();
  
  const incrementQuantity = (e) => {
    e.preventDefault();
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };
  
  const decrementQuantity = (e) => {
    e.preventDefault();
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div
      key={product.id}
      className="w-[253px] bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
    >
      <div className="relative">
        <img
          className="w-full h-[253px] object-contain"
          src={product.image}
          alt={product.title}
        />
        <div
          className={`absolute top-[-10px] right-[-10px] bg-button1 text-white p-2 rounded-bl-full flex justify-center items-center transition-all overflow-hidden ${
            showInfo
              ? "w-max-content h-[265px] rounded-bl-none opacity-90"
              : "w-14 h-14"
          }`}
          onMouseEnter={() => setShowInfo(true)}
          onMouseLeave={() => setShowInfo(false)}
        >
          {showInfo ? (
            <div className="p-4 flex flex-col h-full w-full">
              <h3 className="font-bold mb-2">{product.title}</h3>
              <p className="text-sm overflow-y-auto">{product.description}</p>
              <p className="mt-auto">Stock: {product.stock} unidades</p>
            </div>
          ) : (
            <IoMdInformationCircleOutline className="w-5 h-5" />
          )}
        </div>
      </div>

      <div className="bg-gray-200 flex justify-between items-center">
        <div className="flex flex-col gap-1 p-2">
          <h3 className="text-sm font-bold text-black">{product.title}</h3>
          <p className="text-sm text-black">{product.price}</p>

          <div className="flex items-center gap-2">
            <span className="text-sm text-black">Cantidad</span>
            <div className="flex items-center">
              <button
                onClick={decrementQuantity}
                className="text-gray-500 hover:text-gray-700"
              >
                -
              </button>
              <input
                type="text"
                min={1}
                value={quantity}
                max={product.stock}
                className=" text-sm w-6 ml-3 flex justify-center items-center text-center"
                ref={quantityRef}
                readOnly
              />
              <button
                onClick={incrementQuantity}
                className="text-gray-500 hover:text-gray-700"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <button
          className="border-l px-4 h-16 text-white flex items-center"
          onClick={() => {
            if (!addedToCart) {
              addToCart(product, quantity);
              setAddedToCart(true);
            } else {
              removeFromCart(product.id);
              setAddedToCart(false);
            }
          }}
        >
          <FaCartShopping className="w-6 h-6 text-button1" />
        </button>
      </div>
    </div>
  );
};

export default Card;

