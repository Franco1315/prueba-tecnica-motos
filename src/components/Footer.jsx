const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6">

      <div className="container mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Sobre nosotros */}
          <div className="flex flex-col lg:ml-10">
            <h3 className="text-xl font-bold mb-4 text-yellow transform cursor-pointer">Sobre Nosotros</h3>
            <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet sit amet magna eu tincidunt.</p>
            <img className="w-20" src="/logo.png" alt="" />
          </div>

          {/* Enlaces rápidos */}
          <div className="flex flex-col lg:ml-20">
            <h3 className="text-xl font-bold mb-4 text-yellow cursor-pointer">Enlaces Rápidos</h3>
            <ul>
              <li className='hover:underline'><a href="#">Inicio</a></li>
              <li className='hover:underline'><a href="#">Catálogo</a></li>
              <li className='hover:underline'><a href="#">Servicios</a></li>
              <li className='hover:underline'><a href="#">Contacto</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="flex flex-col lg:ml-20">
            <h3 className="text-xl font-bold mb-4 text-yellow cursor-pointer">Contacto</h3>
            <p className='mb-2'><span className='font-bold'>Dirección:</span> 123 Calle Principal, Ciudad</p>
            <p className='mb-2'><span className='font-bold'>Email:</span> info@motosweb.com</p>
            <p><span className='font-bold'>Teléfono:</span> +123 456 789</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
