import React from 'react'
import Clients from './clients/Clients'
import Download from './download/Download'
import Header from './header/Header'
import Minutes from './minutes_features/Minutes'
import Navbarr from './navbar/Navbar'
import Plans from './plans/Plans'
import Purpose from './purpose/Purpose'
import Testimonial from './testimonials/Testimonial'
import Footer from './footer/Footer'
import Retina from './retina_responsive/Retina'
import Design from './design/Design'
import Feature from './features/Feature'


const HomePage = () => {
  return (
    <>
      <Navbarr/>
     <Header/> 
     <Clients/>
     <Feature/>
     <Design/>
     <Retina/>
    <Purpose/>
    <Minutes/>
    <Testimonial/>
    <Plans/>
    <Download/>
    <Footer/>
    </>
  )
}

export default HomePage