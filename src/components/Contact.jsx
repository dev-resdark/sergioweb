import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-blue-800 text-center">
      <h2 className="text-3xl font-bold mb-4 text-white">Contacto</h2>
      <p className=' text-white'>¿Te interesa trabajar conmigo o tienes alguna pregunta?</p>
      <a
        href="mailto:sergioresquinbareiro@example.com"
        className="text-white hover:underline"
      >
        sresquin@outlook.com
      </a>
    </section>
  );
}

export default Contact;
