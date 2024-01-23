import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import 'boxicons'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import {Route, Routes, BrowserRouter} from "react-router-dom"
import Inicio from './components/pages/Inicio/Inicio'
import Nosotros from './components/pages/Nosotros/Nosotros'
import Contacto from './components/pages/Contacto/Contacto'
import Eventos from './components/pages/Eventos/Eventos'
import Indumentaria from './components/pages/Indumentaria/Indumentaria'
import Clases from './components/pages/Clases/Clases'



function App() {
 

  return (



    <>
    <BrowserRouter>

    <Header/>
    <Routes>
    <Route path="/"  element={<Inicio/>}/>
      <Route path="/nosotros"  element={<Nosotros/>}/>
      <Route path="/clases"  element={<Clases/>}/>
      <Route path="/indumentaria"  element={<Indumentaria/>}/>
      <Route path="/contacto"  element={<Contacto/>}/>
      <Route path="/eventos"  element={<Eventos/>}/>
      <Route/>
    </Routes>



    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
