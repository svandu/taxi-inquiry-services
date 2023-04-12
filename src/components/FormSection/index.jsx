import React from 'react'
import TaxiImage from '../../../public/assets/img/taxi-image.png'
import './formsection.css'

function FormSection() {
  return (
    <div className='form-section-main-conatiner'>
    <p className='form-title'>Book Your Cab</p>
        <form>
            <label for="name">Name</label><br/>
            <input text="text" className='name' name='name'></input>
            <label for="email">Email Id</label>
            <input type='email' name='email'></input>
            <label for="pickup">PickUp Location</label>
            <input type="text"></input>
            <label for="dropoff">DropOff Location</label>
            <input type="text"></input><br/>
            <label for="date">Date Of PickUp</label>
            <input type='date'></input>
            <label for="time">Time</label>
            <input type="time"></input>
        </form>
        <button type='submit' className='book-now'>Book Now</button>
    </div>
  )
}

export default FormSection