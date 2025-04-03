import React from 'react'
import { FaLocationArrow } from "react-icons/fa"
import ButtonSearch from "./ButtonSearch"
import InputSearch from "./InputSearch"
import { useState } from "react"

const Search = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  return (
    <div className="mx-auto max-w-7xl p-6">
      <div className="w-[778px] h-14 flex flex-col md:flex-row justify-start items-start md:items-center gap-4 md:gap-2">
        <div className="w-64 flex justify-start items-start gap-5">
          <div className="w-12 h-12 relative">
            <FaLocationArrow className="w-12 h-12 text-secondary" />
          </div>
          <div className="justify-start text-black text-4xl font-semibold font-['Inter'] leading-[48px] tracking-wider">
            Búsqueda
          </div>
        </div>
        <div className="flex md:flex-row flex-col  justify-center items-center gap-3.5">
          <ButtonSearch
            nombre="Nombre"
            isSelected={selectedButton === "Nombre"}
            onSelect={() => setSelectedButton("Nombre")}
            // onSelect={}
          />
          <ButtonSearch
            nombre="Precio"
            isSelected={selectedButton === "Precio"}
            onSelect={() => setSelectedButton("Precio")}
          />
          <InputSearch />
        </div>
      </div>
    </div>
  );
}

export default Search