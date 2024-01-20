const CardCatalogo = ({ imagenURL, nombre, mostrarTachado, precio, contenido, colores, etiqueta, contenidoEtiqueta }) => {


  return (
    <div className={`w-[20em] h-[30em] mx-auto bg-white border border-colorBordes mb-5 text-center ${etiqueta ? 'space-y-4' : 'space-y-8'}`}>

        {/* etiqueta personalizable */}
        <div className="flex justify-end">
            {etiqueta && (
            <span className="bg-dark text-white px-6 py-1 text-sm uppercase font-bold italic">
                {contenidoEtiqueta || 'Nueva'}
            </span>
        )}
        </div>

        {/* imagen */}
        <img className="w-full h-50 object-cover" src={imagenURL} alt="Producto" />


        {/* datos de la moto */}
        <div className="p-4">

            <h2 className="text-2xl font-bold text-dark mb-3">{nombre}</h2>

            {/* colores disponibles */}
            <div className="flex justify-center items-center space-x-2 mt-2 mb-4">
                 {colores.map((color, index) => (   
                     <div 
                        key={index} 
                        className={`w-4 h-4 rounded-full ${color} ${color === 'bg-white' ? 'border border-black' : ''}`}>
                     </div>
                ))}
         </div>

            {/* rebajas o titulo "desde" */}
            {contenido !== 'nada' ? (
            mostrarTachado ? (
                <p className="text-contenidoCatalogo fuente-light italic mt-2 line-through opacity-100">{contenido}</p>
            ) : (
                <p className="text-contenidoCatalogo fuente-light italic mt-2 uppercase opacity-100">{contenido}</p>
            )
            ) : (
            <div className="opacity-0">Contenido Vacío</div>
            )}

            {/* precio */}
            <p className="text-3xl text-dark font-bold italic mt-2">{precio}</p>

        </div>
</div>
  )
}

export default CardCatalogo
