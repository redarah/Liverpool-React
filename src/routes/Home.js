import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Video from '../components/Video'
import {ShoppingCartProvider} from '../components/useShoppingCart'

const Home = () => {
  return (
    <div>
        
        <Navbar/>
        <Video />
        <Footer/>
        
    </div>
  )
}

export default Home
