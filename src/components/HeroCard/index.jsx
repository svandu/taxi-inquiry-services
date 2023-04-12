import React from 'react'
import './herocard.css'

function HeroCard() {
  return (
    <div className='hero-card-main-container'>
    <p className='details-para'>We are known for our customer services and for offering them best services</p>
        <div className='details'>
            <div className='details-part-one'>
                <p className='up-para'>1M+</p>
                <p className='down-para-one'>miles cover</p>
            </div>
            <div className='details-part-two'>
                <p className='up-para'>13+</p>
                <p className='down-part-two'>experience</p>
            </div>
            <div className='details-part-three'>
                <p className='up-para'>10+</p>
                <p className='down-part-three'>location in perth</p>
            </div>
            <div className='details-part-four'>
                <p className='up-para'>25K+</p>
                <p className='down-part-four'>happy customers</p>
            </div>
        </div>
    </div>
  )
}

export default HeroCard