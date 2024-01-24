import React from 'react'
import "./inicio.css"
import Carouselinicio from '../../carousel/Carouselinicio'
import eventoviaje from "/src/assets/eventoviaje.jpeg"
import fondoisnpiracion from "/src/assets/fondo-inspiracion.jpeg"
import  fotograduado     from "/src/assets/fotograduado.jpeg"
import grupopelea from "/src/assets/grupo-pelea.jpeg"
import fondoinvitaciones from "/src/assets/fondo-invitaciones.jpeg"
import fondofight from "/src/assets/fondofight.jpeg"
import descarga from "/src/assets/descarga.jpeg"

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
          <img src={eventoviaje} alt="" className='grid-fotos-img' />
          <img src={fondoisnpiracion} alt="" className='grid-fotos-img' />
          <img src={fotograduado} alt="" className='grid-fotos-img' />
          <img src={grupopelea} alt="" className='grid-fotos-img' />
        </div>





      </div>
      <div className='competencias'>
        <h2>Competencias</h2>
        <p>En Garras de Tigre somos activos para ir a torneos en toda Argentina y algunos internacionales.</p>
        <div className='grid-competencias'>
          <img src={fondoinvitaciones} alt="" className='grid-fotos-img' />
          <img src={fondofight} alt="" className='grid-fotos-img' />
          <img src={descarga} alt="" className='grid-fotos-img' />
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
