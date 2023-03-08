import React from 'react'
import Footer from '../components/Footer'
import MyForm from '../components/MyForm'
import Herolmage from '../components/Herolmage'
import Navbar from '../components/Navbar'
import {ShoppingCartProvider} from '../components/useShoppingCart'

const Contact = () => {
  return (
    <div>
      
      <Navbar/>
      
      <Herolmage heading =" CONTACT " text="Contact Liverpool support ." />
      <MyForm />
      <Footer />
      
    </div>
  )
}

export default Contact
