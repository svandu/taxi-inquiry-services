import React from 'react'
import CarDrive from '../../../public/assets/img/FacilityImage/car-drive.png'
import CarFinance from '../../../public/assets/img/FacilityImage/car-finance.png'
import CarService from '../../../public/assets/img/FacilityImage/car-service.png'
import ContactUs from '../../../public/assets/img/FacilityImage/contact-us.png'
import CurrentStock from '../../../public/assets/img/FacilityImage/current-stock.png'

import './facilitysection.css'

function FacilitySection() {
    const facilityCard = [
        {
            img: CarDrive,
            para: "Book A Test Drive",
        }, 
        {
            img: CarFinance,
            para: "Finance",
        },
        {
            img: CarService,
            para: "Car Service",
        },
        {
            img: ContactUs,
            para: "Contact Us",
        },
        {
            img: CurrentStock,
            para: "CurrentStock",
        }
    ]
  return (
    <div className='facility-section-main-container'>
        {facilityCard.map((singleCard, i) => (
            <div className='facility-card'>
                <img src={singleCard.img}/>
                <p className='facility-card-para'>{singleCard.para}</p>
            </div>
        ))}
    </div>
  )
}

export default FacilitySection