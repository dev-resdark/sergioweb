import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-950 text-white p-4 ">
      <div className="container mx-auto text-center space-y-4">
        <p>&copy; {new Date().getFullYear()} Sergio Resquin Bareiro. Todos los derechos reservados.</p>
        
        <div className="flex justify-center space-x-4">
          <a
            href="https://linkedin.com/in/sergioresquinbareiro" // Reemplaza con tu enlace de LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/sergioresquinbareiro" // Reemplaza con tu enlace de GitHub
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            GitHub
          </a>
          <a
            href="mailto:sergioresquinbareiro@example.com" // Reemplaza con tu correo electrónico
            className="hover:text-gray-300"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
