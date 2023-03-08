import {React,useState,useEffect} from 'react'
import { Offcanvas , Stack} from "react-bootstrap";
import { useShoppingCart } from "./useShoppingCart";
import { MyCart } from "./MyCart";
import Data from "../data/items.json";

const ShoppingCart = ({ isOpen }) => {
  const { closeCart, cartItems } = useShoppingCart();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // mettre à jour le prix total à chaque fois que les items dans le panier changent
    let total = 0;
    cartItems.forEach(item => {
      total += item.value;
    });
    setTotalPrice(total);
  }, [cartItems]);
  

  Data.map((item)=>{
  return ( 
      
          <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          <MyCart key={item.id} {...item} />
          <div className='ms-auto fw-bold fs-5'>
            Total price: {totalPrice} $
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
    )
  })
};


export default ShoppingCart;

