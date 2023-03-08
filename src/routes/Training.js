import React from 'react'
import Footer from '../components/Footer'
import Herolmage from '../components/Herolmage'
import Navbar from '../components/Navbar'
import TrainingSection from '../components/Training'
import {ShoppingCartProvider} from '../components/useShoppingCart'

const Training = () => {
  return (
    <div>
        
        <Navbar />
        
        <Herolmage heading="About us " text ='More information about the training ' />
        <TrainingSection />
        <Footer />
        
    </div>
  )
}

export default Training
