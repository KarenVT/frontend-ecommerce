import React from 'react'
import { Link } from "react-router-dom"

const MenuList = () => {
  return (
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link to="/" className="mr-5 hover:text-hover1">
        Inicio
      </Link>
      <Link to="/contacto" className="mr-5 hover:text-hover1">
        Contacto
      </Link>
      <Link to="/nosotros" className="mr-5 hover:text-hover1">
        Nosotros
      </Link>
      <Link to="/registro" className="mr-5 hover:text-hover1">
        Ingresar
      </Link>
    </nav>
  );
}

export default MenuList