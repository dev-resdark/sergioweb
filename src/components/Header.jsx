import React, { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-950 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mi Página Informativa</h1>
        
        {/* Botón de menú hamburguesa para móviles */}
        <button
          className="text-white lg:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {/* Menú de navegación */}
        <nav
          className={`lg:flex lg:items-center lg:space-x-4 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-4 space-y-2 lg:space-y-0">
            <li><a href="#home" className="hover:underline">Inicio</a></li>
            <li><a href="#about" className="hover:underline">Sobre Nosotros</a></li>
            <li><a href="#services" className="hover:underline">Servicios</a></li>
            <li><a href="#contact" className="hover:underline">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
