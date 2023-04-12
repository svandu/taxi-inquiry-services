import React from 'react'
import ContainerNav from '../ContainerNav'
import HeroCard from '../HeroCard'
import './herosection.css'
import HeroImage from '../../../public/assets/img/HeroImage/taxi-image.jfif'
import FeaturedVehicles from '../FeaturedVehicles'
import ServiceSection from '../SeviceSection'

function HeroSection() {
  return (
    <div className='hero-main-container'>
      <img src={HeroImage} />
      <div className='cover-page'></div>
      <div className='nav-container'>
        <ContainerNav />
      </div>
      <div className='hero-para'>
        <p className='para-one'>your ride, your demand</p>
        <p className='para-two'>your car. your move.</p>
        <button className='book-now'>Book now</button>
      </div>
      <div className='hero-card-container'>
        <HeroCard />
      </div>
      <div className='featured-vehicles-container'>
        <FeaturedVehicles />
      </div>
      <div className='service-section-container'>
        <ServiceSection />
      </div>
      
    </div>
  )
}

export default HeroSection