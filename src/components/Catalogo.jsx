import CardCatalogo from './CardCatalogo'

const Catalogo = () => {

  return (

    <div className='mx-auto flex flex-col justify-center max-w-[90%]'>

        {/* texto de la sección */}
          <div className='flex justify-between mt-16 mb-8'>
              <h1 className='text-4xl font-bold italic uppercase select-none'>Modelos destacados</h1>      
              <button className='bg-yellow p-2 font-bold italic uppercase hover:bg-dark hover:text-yellow duration-500'>Ver más modelos</button>
          </div>

          <div className='flex flex-row overflow-y-auto justify-start scrollbar-thin scrollbar-thumb-black scrollbar-thumb-rounded-full scrollbar-track-gray-100  scrollbar'>

           {/* Cards */}
           <div className='flex gap-4 text-white mb-4'>
               <CardCatalogo
                   etiqueta={true}
                   contenidoEtiqueta='Nueva'
                   imagenURL="/moto-1.png"
                   nombre="ZONTES E350 2024"
                   mostrarTachado={true}
                   contenido="5.999€"
                   precio="4.999€"
                   colores={['bg-black', 'bg-white' ]}
               />
               <CardCatalogo
                   etiqueta={false}
                   imagenURL="/moto-2.png"
                   nombre="ZONTES ZT 125 2024"
                   mostrarTachado={false}
                   contenido="Desde"
                   precio="5.999€"
                   colores={['bg-black', 'bg-white']}
                
               />

                <CardCatalogo
                  etiqueta={false}
                  imagenURL="/moto-3.png"
                  nombre="ZONTES Z2 125 2024"
                  contenido="nada"
                  precio="6.250€"
                  colores={['bg-blue-600', 'bg-yellowMoto']}
                />

                <CardCatalogo
                  etiqueta={true}
                  contenidoEtiqueta='Nueva'
                  imagenURL="/moto-4.png"
                  nombre="ZONTES T350 X 2024"
                  contenido="nada"
                  precio="4.430€"
                  colores={['bg-redMotos', 'bg-black']}
                />

                <CardCatalogo
                  etiqueta={false}
                  imagenURL="/moto-1.png"
                  nombre="ZONTES T620 X 2024"
                  mostrarTachado={true}
                  contenido="4360€"
                  precio="3.999€"
                  colores={['bg-black', 'bg-white', 'bg-red-600']}
                />

                <CardCatalogo
                  etiqueta={true}
                  contenidoEtiqueta='Pronto'
                  etiquetaNueva='Pronto'
                  imagenURL="/moto-3.png"
                  nombre="ZONTES T150 X 2024"
                  contenido="nada"
                  precio="5.999€"
                  colores={['bg-black', 'bg-white', 'bg-indigo-600']}
                />

                <CardCatalogo
                  etiqueta={true}
                  contenidoEtiqueta='Nueva'
                  imagenURL="/moto-2.png"
                  nombre="ZONTES T450 X 2024"
                  mostrarTachado={false}
                  contenido="Desde"
                  precio="7.999€"
                  colores={['bg-black', 'bg-white', 'bg-orange-600','bg-blue-600' ]}
                />

           </div>
    
      </div>
  </div>
  
  )
}

export default Catalogo
