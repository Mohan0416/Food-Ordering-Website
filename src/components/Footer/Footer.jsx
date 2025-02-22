import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-content">
            <div className="footer-left">
                <img className='dot'src="/src/assets/logo2.png"/>
                <p>Bringing delicious flavors to your doorstep with fresh ingredients and fast delivery. Savor every bite, anytime, anywhere! </p>
                <div className="footer-icon">
                    <img src={assets.facebook_icon}/>
                    <img src={assets.twitter_icon}/>
                    <img src={assets.linkedin_icon}/>
                </div>
            </div>
            <div className="footer-center">
                <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
            </div>
            <div className="footer-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 12345 67890</li>
                    <li>contact@foodfusion.com</li>
                </ul>
            </div>
        </div>
    <hr />
    <p className='footer-copyright'>Copyright 2025 @ Food Fusion.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer
