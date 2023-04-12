import React from 'react'
import ServiceImage from '../../../public/assets/img/SeviceImage/service-image.png'
import './servicesection.css'

function ServiceSection() {
  return (
    <div className='service-section-main-container'>
    <p className='service-content-para'>Our Sevices</p>
        <div className='service-content'>
            <div className='service-para'>
                <p>
                Airport transfers can be daunting, so much so that people often look for support from their families when arriving or departing from any airport terminal. But reliable taxi services are changing this scenario with their easy pick-up and drop services in the Perth suburban area. Whether someone is arriving early morning or later in the night, these fast taxi services can be trusted with hassle-free transportation to and from Perth city.
                </p>
            </div>
            <div className='service-image'>
                <img src={ServiceImage}/>
            </div>
        </div>
    </div>
  )
}

export default ServiceSection