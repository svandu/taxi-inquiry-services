import React from 'react'
import './featuredvehicles.css'

function FeaturedVehicles() {
    const featuredVehiclesDetails = [
        {
            img: './public/assets/img/CardImage/taxi-1.png',
            para: "2015 Volkaswagen Polo 6R MY16",
            price: "$17,490",
            details: "Drive Away"
        },
        {
            img: './public/assets/img/CardImage/taxi-2.jfif',
            para: "2016Volkswagen Golf AU MY16",
            price: "Please Call",
            details: "For Price",
        },
        {
            img: './public/assets/img/CardImage/taxi-3.jfif',
            para : "2016 Volkswagen Amarok 2H MY15",
            price: "$38,990",
            details: "Drive Away"
        },
        {
            img: './public/assets/img/CardImage/Taxi-4.png',
            para: "2016 Volkswagen Passat 3C MY16",
            price:" $53038",
            details: "Drive Away"
        }
    ]
  return (
    <div className='featured-vehicles-main-container'>
        {featuredVehiclesDetails.map((singleDetails, i) => (
            <div className='card'>
                <img src={singleDetails.img} />
                <p>{singleDetails.para}</p>
            </div>
        ))}
    </div>
  )
}

export default FeaturedVehicles