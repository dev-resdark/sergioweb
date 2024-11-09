import React, { useState } from 'react';
import { Link } from 'react-scroll';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-950 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">SergioCode</h1>
        
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
        <nav className={`lg:flex lg:items-center lg:space-x-4 ${isOpen ? "block" : "hidden"}`}>
            <ul className="flex flex-col lg:flex-row lg:space-x-4 space-y-2 lg:space-y-0">
                <li><Link to="about" smooth={true} duration={500} className="cursor-pointer hover:underline">Sobre Mí</Link></li>
                <li><Link to="services" smooth={true} duration={500} className="cursor-pointer hover:underline">Servicios</Link></li>
                <li><Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:underline">Proyectos</Link></li>
                <li><Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:underline">Contacto</Link></li>
            </ul>
        </nav>

      </div>
    </header>
  );
}

export default Header;
