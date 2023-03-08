import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Herolmage from '../components/Herolmage';
import MyCart from '../components/MyCart';
import Navbar from '../components/Navbar';
import PricingCards from '../components/PricingCards';


const Pricing = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch('../data/items.json')
    .then(response => response.json())
    .then(json => setData(json))
    .catch(error => console.log(error));
  }, []);

  return (
    <div>
        
        <Navbar />
        <MyCart />
        <Herolmage heading =" Searching " text="Search a player you want to train with !" />   
        <PricingCards />
        <Footer />
        
      
    </div>
  )
}

export default Pricing

