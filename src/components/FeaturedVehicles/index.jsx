import React from 'react'
import './featuredvehicles.css'

function FeaturedVehicles() {
    const featuredVehiclesDetails = [
        {
            img: '../../../public/assets/img/CardImage/taxi-1.png',
            para: "2015 Volkaswagen Polo 6R MY16",
            price: "$17,490",
            details: "Drive Away"
        },
        {
            img: './public/assets/img/CardImage/taxi-2.png',
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
        <p className='vehicles-para'>
            Choose your ride.
        </p>
        <div className='cards'>
            {featuredVehiclesDetails.map((singleDetails, i) => (
                    <div className='card'>
                        <img src={singleDetails.img} />
                        <div className='card-content'>
                            <p className='card-para'>{singleDetails.para}</p>
                            <p className='card-price'>{singleDetails.price}</p>
                            <p className='card-details'>{singleDetails.details}</p>
                            <button className='card-button'>View More Details</button>
                        </div>
                    </div>
                ))}
        </div>
    </div>
  )
}

export default FeaturedVehicles