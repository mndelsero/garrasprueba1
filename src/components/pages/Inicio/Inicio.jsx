import React from 'react'
import "./inicio.css"
import Carouselinicio from '../../carousel/Carouselinicio'





const Inicio = () => {
  return (
    <div className='inicio'>
      <div className='inicio-intro'>

        <h1>Los Garras</h1>
        <p>"Queremos que esta escuela sea Un espacio para que todos aprendan del respeto y la defensa personal, con los valores del Taekwondo"</p>
      </div>
      <Carouselinicio />
      <div className='fotos'>
        <h2>Fotos</h2>
        <p>Te mostramos algunos de los lindos momentos de nuestra escuela</p>
        <div className='grid-fotos'>
          <img src="src\assets\eventoviaje.jpeg" alt="" className='grid-fotos-img' />
          <img src="src\assets\fondo-inspiracion.jpeg" alt="" className='grid-fotos-img' />
          <img src="src\assets\foto graduado.jpeg" alt="" className='grid-fotos-img' />
          <img src="src\assets\grupo-pelea.jpeg" alt="" className='grid-fotos-img' />
        </div>





      </div>
      <div className='competencias'>
        <h2>Competencias</h2>
        <p>En Garras de Tigre somos activos para ir a torneos en toda Argentina y algunos internacionales.</p>
        <div className='grid-competencias'>
          <img src="src\assets\fondo-invitaciones.jpeg" alt="" className='grid-fotos-img' />
          <img src="src\assets\fondofight.jpeg" alt="" className='grid-fotos-img' />
          <img src="src\assets\descarga.jpeg" alt="" className='grid-fotos-img' />
        </div>
      </div>
      <div className="proximos-eventos">
        <h2>Proximos eventos</h2>
        <p>Aqui puedes ver las proximas propuestas y eventos de la escuela!</p>

      </div>



    </div>









  )
}

export default Inicio
