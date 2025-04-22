import React from "react";
import { CiSearch } from "react-icons/ci";

const Input = ({ icon, placeholder, value, onChange }) => {
  return (
    <div className="w-full border-b border-gray-300 py-1 pr-3 focus:outline-none flex justify-start items-center gap-2.5">
      
      {icon ?? <CiSearch className="w-6 h-6 text-text2" />}
      
      <input
        type="text"
        placeholder={placeholder}
        className="outline-none"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
