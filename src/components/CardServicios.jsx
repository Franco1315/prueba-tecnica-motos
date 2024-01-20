const CardServicios = ({imagenServicio, tituloServicio}) => {
  return (

    <div className='h-[8em]'>

        <div className="w-[16em] bg-indigo-500 flex items-center justify-center h-full bg-cover bg-center " style={{ backgroundImage: `url("${imagenServicio}")` }}>
          
          <h2 className="text-white text-2xl font-bold italic uppercase hover:text-yellow duration-500 cursor-pointer ">
            {tituloServicio}
          </h2>

        </div>

    </div>
  )
}

export default CardServicios
