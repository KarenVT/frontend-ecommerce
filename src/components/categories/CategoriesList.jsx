import React from 'react'
import {
  FaLaptop,
  FaMobileAlt,
  FaThLarge,
} from "react-icons/fa";
import { MdMonitor } from "react-icons/md";
import { BsPcDisplay } from "react-icons/bs";
import { PiOfficeChairBold } from "react-icons/pi";
import useCategories from "../../Hooks/useCategories";

const iconMap = {
  FaLaptop: <FaLaptop />,
  MdMonitor: <MdMonitor />,
  BsPcDisplay: <BsPcDisplay />,
  FaMobileAlt: <FaMobileAlt />,
  PiOfficeChairBold: <PiOfficeChairBold />,
};

const CategoriesList = ({ selected, setSelected }) => {
  const { categories } = useCategories();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4 justify-center items-center">
      
      <button
        onClick={() => setSelected(null)}
        className={`relative flex items-center justify-start p-4 border rounded-lg
        ${
          selected === null
            ? "border-secondary text-secondary"
            : "border-gray-300 text-gray-700"
        }
        transition-all`}
      >
        <span className="mr-3 text-3xl"><FaThLarge /></span>
        <span className="text-md">Todo</span>
      </button>

      {/* Botones de categorías dinámicas */}
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setSelected(category.id)}
          className={`relative flex items-center justify-start p-4 border rounded-lg
          ${
            selected === category.id
              ? "border-secondary text-secondary"
              : "border-gray-300 text-gray-700"
          } transition-all`}
        >
          <span className="mr-3 text-3xl">{iconMap[category.icon]}</span>
          <span className="text-md">{category.name}</span>
        </button>
      ))}
    </div>
  );
};

export default CategoriesList;
