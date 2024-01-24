import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./carousel.css"
const Carouselinicio = () => {
  return (
    <div>
      <Carousel className='carousel'>
      <Carousel.Item>
       <img src="src\assets\evento viaje.jpeg" alt="" className='carousel-img'/>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img src="src\assets\evento-viaje.jpeg" alt="" className='carousel-img'/>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="src\assets\foto graduado.jpeg" alt=""className='carouse-img' />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    </div>
  )
}

export default Carouselinicio

