import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-fuente p-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 className="text-xl font-bold mb-4 hover:scale-x-110 text-yellow transform origin-left transition-all duration-300 ease-in-out cursor-pointer">Sobre Nosotros</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet sit amet magna eu tincidunt.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 hover:scale-x-110 text-yellow transform origin-left transition-all duration-300 ease-in-out cursor-pointer">Enlaces Rápidos</h3>
            <ul>
              <li className='hover:underline'><a href="#">Inicio</a></li>
              <li className='hover:underline' ><a href="#">Catálogo</a></li>
              <li className='hover:underline'><a href="#">Servicios</a></li>
              <li className='hover:underline'><a href="#">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 hover:scale-x-110 text-yellow transform origin-left transition-all duration-300 ease-in-out cursor-pointer">Contacto</h3>
            <p className='mb-2'><span className='font-bold'>Dirección:</span>123 Calle Principal, Ciudad</p>
            <p><span className='font-bold'>Email:</span> info@motosweb.com</p>
            <p>Teléfono: +123 456 789</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

