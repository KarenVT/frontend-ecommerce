import React from 'react'
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="text-white mt-22 bg-button1">
      <div className="container px-5 py-24 mx-auto flex flex-col md:flex-row items-center justify-center text-center gap-10 md:gap-96">
        <div className="w-64flex-shrink-0">
          <span className="text-2xl font-bold text-white">
            Compu<span className="text-secondary">Tecno</span>
          </span>
          <p className="mt-2 px-4 py-2">Pagos seguros con</p>
          <div className="w-40 mx-auto py-2 flex flex-row gap-1.5 flex-wrap justify-center">
            <div className="w-10 h-7 relative bg-white">
              <img
                className="w-10 h-7 absolute"
                src="https://placehold.co/42x28"
              />
            </div>
            <div className="w-10 h-7 relative bg-white">
              <img
                className="w-10 h-6 absolute"
                src="https://placehold.co/39x25"
              />
            </div>
            <div className="w-10 h-7 relative">
              <img
                className="w-10 h-6 absolute"
                src="https://placehold.co/39x25"
              />
            </div>
            <div className="w-10 h-7 relative bg-white">
              <img
                className="w-10 h-6 absolute"
                src="https://placehold.co/39x25"
              />
            </div>
            <div className="w-10 h-7 relative">
              <img
                className="w-10 h-7 absolute"
                src="https://placehold.co/39x28"
              />
            </div>
            <div className="w-10 h-7 relative bg-white">
              <img
                className="w-10 h-6 absolute"
                src="https://placehold.co/39x25"
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-auto flex flex-col items-center justify-center md:items-start md:text-start">
          <h2 className="title-font font-medium tracking-widest mb-3">
            Contácto
          </h2>
          <nav className="list-none text-white">
            <li>
              <p className="py-2">Calle 45 #12-34, Bogotá, Colombia</p>
            </li>
            <li>
              <p className="py-2">contacto@computecno.com.co</p>
            </li>
            <li>
              <p className="py-2">+57 601 3456789</p>
            </li>
          </nav>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="md:w-[1170px] w-[300px] h-0 relative">
          <div className="md:w-[1170px] w-[300px] h-0 left-0 top-0 absolute outline-1 outline-offset-[-0.50px] outline-gray-300 opacity-20"></div>
        </div>

        <p className="inline-flex justify-center items-center gap-1 p-2 text-white opacity-40">
          <span>
            <FaRegCopyright className="text-white w-4 h-4" />
          </span>
          Copyright 2025 CompuTecno.
        </p>
      </div>
    </footer>
  );
}

export default Footer