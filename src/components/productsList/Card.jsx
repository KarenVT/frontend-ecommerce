import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { IoMdInformationCircleOutline } from "react-icons/io";

// prop viene de Products.jsx
const Card = ({ product }) => {
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
        <div className="w-14 h-14 left-52 absolute top-[-10px] bg-bg2 text-white p-2 rounded-bl-full flex justify-center items-center">
          <IoMdInformationCircleOutline className="w-5 h-5" />
        </div>
      </div>

      <div className="bg-gray-200 p-2 flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <h3 className="text-sm font-bold text-black">{product.title}</h3>
          <p className="text-xs text-black">{product.price}</p>

          <div className="flex items-center gap-2">
            <span className="text-xs text-black">Cantidad</span>
            <input
              type="number"
              min={1}
              defaultValue={1}
              max={product.stock}
              className="w-10 h-6 text-center border rounded"
            />
          </div>
        </div>

        <button className="border-l px-4 h-16 text-white flex items-center">
          <FaCartShopping className="w-6 h-6 text-button1" />
        </button>
      </div>
    </div>
  );
};

export default Card;

