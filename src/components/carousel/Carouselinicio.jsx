import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./carousel.css"
import imagencarousel1 from "/src/assets/evento viaje.jpeg"
import imagencarousel2 from "/src/assets/evento-viaje2.jpeg"
import imagencarousel3 from "/src/assets/fotograduado.jpeg"
const Carouselinicio = () => {
  return (
    <div>
      <Carousel className='carousel'>
      <Carousel.Item>
       <img src={imagencarousel1} alt="" className='carousel-img'/>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img src={imagencarousel2} alt="" className='carousel-img'/>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={imagencarousel3} alt=""className='carousel-img' />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    </div>
  )
}

export default Carouselinicio

