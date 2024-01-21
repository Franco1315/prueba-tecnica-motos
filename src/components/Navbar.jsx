import React, { useState } from 'react'
import Button from './Button';

const Navbar = () => {
    let Links =[
      {name:"Home",link:"/"},
      {name:"Catálogo",link:"/"},
      {name:"Servicios",link:"/"},
      {name:"Contácto",link:"/"},
    ];

    const [open,setOpen]=useState(false);

  return (
    <div className='shadow-md select-none w-full top-0 left-0'>
      <div className='md:flex items-center justify-between bg-dark py-4 md:px-10 '>

      <div className='font-bold up text-2xl cursor-pointer flex items-center text-white'>
        <img className='w-26 h-16' src='/logo-2.png'/>
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
         <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <a href={link.link} className='text-white hover:text-gray-400 duration-500'>{link.name}</a>
            </li>
          ))
        }
        <Button>
          Ver más
        </Button>
      </ul>
      </div>
    </div>
  )
}

export default Navbar
