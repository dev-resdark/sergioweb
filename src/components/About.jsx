import React from 'react';

function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-8 md:px-12 lg:px-20 bg-indigo-700">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">Sobre Mí</h2>
        
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Sección de la Foto */}
        <div className="flex justify-center">
            <img
            src="/img/profile.jpg"  // Reemplaza esta ruta con la ruta real de tu foto
            alt="Foto de Sergio Resquin Bareiro"
            className="w-40 h-40 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full object-cover shadow-lg"
            />
        </div>
        
        {/* Sección de Texto */}
        <div className="text-center md:text-left">
            <p className="text-sm md:text-base text-gray-100">
            ¡Hola! Soy Sergio Resquin Bareiro, un desarrollador Jr. apasionado por la tecnología y el desarrollo web.
            Mi objetivo es crear aplicaciones innovadoras y de alto rendimiento que mejoren la experiencia del usuario.
            En este portafolio podrás encontrar mis proyectos y logros en el ámbito de la programación. ¡Gracias por visitarlo!
            </p>
        </div>
        </div>
    </section>
    // <section id="about" className="py-20 bg-indigo-400 text-center">
    //   <h2 className="text-3xl font-bold mb-4 text-white">Sobre Mí</h2>
    //   <p className="max-w-2xl mx-auto text-white">
    //     Soy Sergio Resquin Bareiro, un desarrollador Jr. capaz de crear y mantener sitios y apps creadas con la libreria React.
    //   </p>
    //   <p className="max-w-2xl mx-auto text-white">
    //     Adicional tengo proyectos creados con TypeScript, Zod, Zustand, React Query, Next.js, React Router.
    //   </p>
    //   <p className="max-w-2xl mx-auto text-white">
    //     Stack conocidos: MERN & PERN.
    //   </p>
    //   <p className="max-w-2xl mx-auto text-white">
    //     Fecha Nacimiento: 22/12/1995 <br />
    //     Nacionalidad: Paraguaya
    //   </p>
    // </section>
  );
}

export default About;
