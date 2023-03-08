import React, { useState } from "react";
import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "./useShoppingCart";
import Data from "../data/items.json";

const MyCart = ({ id, quantity })  => {
  const { selectedItems, removeFromSelectedItems } = useShoppingCart();
  /*
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {selectedItems.map(item => (
          <li key={item.id}>
            {item.name} - {item.value} 
            <button onClick={() => removeFromSelectedItems(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );*/
  

    Data.map((item)=>{
        if (!item) return null;
        return(
            <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
                <li key={item.id}>
            {item.name} - {item.value} 
            <button onClick={() => removeFromSelectedItems(item.id)}>Remove</button>
          </li>
            </Stack>
        )

    })
  
    

}

export default MyCart;

