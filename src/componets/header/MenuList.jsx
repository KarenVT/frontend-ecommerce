import React from 'react'

const MenuList = () => {
  return (
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-hover1">
        Inicio
      </a>
      <a className="mr-5 hover:text-hover1">
        Contacto
      </a>
      <a  className="mr-5 hover:text-hover1">
        Nosotros
      </a>
      <a className="mr-5 hover:text-hover1">
        Ingresar
      </a>
    </nav>
  );
}

export default MenuList