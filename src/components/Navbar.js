import {React,useState} from 'react'
import {NavLink} from 'react-router-dom'
import {FaBars,FaTimes} from 'react-icons/fa'
import {Container,Button,Nav,Navbar as NavbarBs} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './NavbarStyles.css'
import { ShoppingCartProvider, useShoppingCart } from './useShoppingCart';



const Navbar = () => {

  const { cartQuantity, openCart } = useShoppingCart();

  return (
    
    <div className='header'>
        
        <div className="links-container" style={{ display: "flex", justifyContent: "flex-end",}}>
            <Link className='link' to='/'> Home</Link>
            <Link className='link' to='/pricing'>Players</Link>
            <Link className='link' to='/training'>About us </Link>
            <Link className='link' to='/contact'>Contact us </Link>
        </div>
         
  </div>
  )
}

export default Navbar
