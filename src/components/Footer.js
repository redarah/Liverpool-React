import React from 'react'
import "./FooterStyles.css"
import {FaFacebook,FaTwitter,FaLinkedin , FaMailBulk, FaPhone,FaSearchLocation} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>

            <div className='left'>
                <div className='location'>
                    <FaSearchLocation size={20} style={{color:'#ffffff' , marginRight:'2rem'}} />
                    <div>
                        <p>Williamson Square,</p> 
                        <h4>Liverpool L1 1EQ, Royaume-Uni</h4>
                    </div>
                </div>
                <div className='phone'>
                    <h4> <FaPhone size={20} style={{color:'#ffffff' , marginRight:'2rem'}}/> 343-456-8941</h4>
                </div>
                
                <div className='email'>
                    <h4> <FaMailBulk size={20} style={{color:'#ffffff' , marginRight:'2rem'}}/> 343-456-8941</h4>
                </div>
            </div>

            <div className='right'>
                <h4>About the company</h4>
                <p>
                    Discover the collections in the official LFC store. fast worldwide delivery. Buy our home and away kits!
                     See it all in the official LFC store. Souvenirs and fashion. Exclusive LFC products. World champions. 
                     Delivery in 1-2 days.
                </p>

                <div className='social'>
                    <FaFacebook  size={20} style={{color:'#ffffff' , marginRight:'2rem'}}/> 
                    <FaTwitter  size={20} style={{color:'#ffffff' , marginRight:'2rem'}}/> 
                    <FaLinkedin  size={20} style={{color:'#ffffff' , marginRight:'2rem'}}/> 
                </div>
            </div>

            
        </div>

      
    </div>
  )
}

export default Footer
