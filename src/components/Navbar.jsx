import React, { useState } from 'react';
import Button from './Button';

const Navbar = () => {
  const links = [
    { name: 'Home', link: '/' },
    { name: 'Catálogo', link: '/' },
    { name: 'Servicios', link: '/' },
    { name: 'Contacto', link: '/' },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className='shadow-md select-none w-full top-0 left-0'>
      <div className='md:flex items-center justify-between bg-dark md:px-10 '>

        <div className='cursor-pointer flex items-center'>
          <img className='w-26 h-16' src='/logo-2.png' alt='Logo' />
        </div>

        <div onClick={() => setOpen(!open)} className='text-4xl text-white absolute right-8 top-4 cursor-pointer md:hidden'>
          {open ? <ion-icon name='close'></ion-icon> : <ion-icon name='menu'></ion-icon>}
        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-transform duration-500 ease-in ${open ? 'transform top-20' : 'hidden md:block transform top-[-490px]'}`}>
          {links.map((link) => (
            <li key={link.name} className='md:ml-8 text-md md:my-0 my-7'>
              <a href={link.link} className='text-white hover:text-gray-400 duration-500'>{link.name}</a>
            </li>
          ))}
          <Button>Ver más</Button>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

