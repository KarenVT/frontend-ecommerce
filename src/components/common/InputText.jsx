import React from 'react'

const InputText = ({ value, onChange, placeholder, type, name }) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full border-b border-gray-300 py-2 px-3 focus:outline-none"
      />
    </div>
  );
}

export default InputText;
