import React from 'react'
import './containernav.css'

function ContainerNav() {
  return (
    <div className='nav-main-container'>
        <div className='logo-sec'>
            logo
        </div>
        <div className='nav-link-sec'>
            <div className='nav-links'>
                <ul className='links'>
                    <li className='home'><a href="#">Home</a></li>
                    <li className='services'><a href="#">Services</a></li>
                    <li className='about'><a href="#">About</a></li>
                    <li className='contact-us'><a href="#">Contact Us</a></li>
                </ul>
            </div>
            <button className='login-signup'>LogIn/SignUp</button>
        </div>
    </div>
  )
}

export default ContainerNav