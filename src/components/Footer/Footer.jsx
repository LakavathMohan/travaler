import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='top'>
            <div className='top-1'>
                <h1>Toure and Travel</h1>
                <p>Choose Your Favourite Destination</p>
            </div>
            <div className='top-2'>
                <a href="/">
                    <i className='fa-brands fa-facebook-square'></i>
                </a>
                <a href="/">
                    <i className='fa-brands fa-instagram-square'></i>
                </a>
                <a href="/">
                    <i className='fa-brands fa-twitter-square'></i>
                </a>
                <a href="/">
                    <i className='fa-brands fa-behance-square'></i>
                </a>
            </div>
        </div>
        <div className='bottom'>
            <div className='bottom-1'>
                <h4>Projects</h4>
                <a href="/">Changelog</a>
                <a href="">Status</a>
                <a href="">Licence</a>
                <a href="">All Version</a>
            </div>
            <div className='bottom-1'>
                <h4>Community</h4>
                <a href="/">Github</a>
                <a href="">Issuse</a>
                <a href="">Project</a>
                <a href="">Twitter</a>
            </div>
            <div className='bottom-1'>
                <h4>Help</h4>
                <a href="/">Support</a>
                <a href="">TroubleShooting</a>
                <a href="">Contact us</a>
                
            </div>
            <div className='bottom-1'>
                <h4>Other</h4>
                <a href="/">Term of Service</a>
                <a href="">Privacy Policy</a>
               
            </div>
        </div>
    </div>
  )
}

export default Footer