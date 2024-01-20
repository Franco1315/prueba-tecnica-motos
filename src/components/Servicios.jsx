import CardServicios from './CardServicios'


const Servicios = () => {
  return (

    <div>
      <div className='text-center mt-16 max-w-[80%] mx-auto'>

        <h1 className='uppercase mb-2 text-yellow font-bold italic '>Concesionario oficial</h1>

        <h2 className='text-4xl text-dark uppercase font-bold italic mb-8'>Motos.Tech Valencia</h2>

        <p className='mb-6 text-dark'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi unde veniam dolor eveniet sapiente, quam
          officia distinctio similique reprehenderit error? Vitae odio nulla, alias, dicta, totam sequi beatae optio
          temporibus quis ducimus enim sapiente culpa? Cupiditate, perspiciatis totam consequuntur quod labore itaque
          iste vitae non cum est reprehenderit inventore dolorem.
        </p>

        <p className='mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, iste.</p>
      </div>

    <div className='flex flex-wrap justify-center gap-4 lg:justify-between mb-16 max-w-6xl mx-auto '>

      <CardServicios imagenServicio='/alquiler-s.png' tituloServicio='Alquiler' />
      <CardServicios imagenServicio='/renting-s.png' tituloServicio='Renting' />
      <CardServicios imagenServicio='/cita-taller-s.png' tituloServicio='Cita en taller' />
      <CardServicios imagenServicio='/motos-s.png' tituloServicio='Motos' />
      
    </div>
  </div>
  )
}

export default Servicios
