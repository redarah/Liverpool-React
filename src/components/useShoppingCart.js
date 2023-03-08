import { useState } from 'react';

export const useShoppingCart = () => {
const [cartItems, setCartItems] = useState([]);
const [cartOpen, setCartOpen] = useState(false);
const [selectedItems, setSelectedItems] = useState([]);
const getItemQuantity = (itemId) => {
  const item = cartItems.find(i => i.id === itemId);
  return item ? item.quantity : 0;
}

const addToSelectedItems = (itemId, itemTitle, itemPrice) => {
  const existingItem = selectedItems.find(i => i.id === itemId);
  if(existingItem) {
    existingItem.quantity += 1;
    existingItem.totalPrice = itemPrice * existingItem.quantity;
    setSelectedItems([...selectedItems]);
  } else {
    const newItem = { id: itemId, title: itemTitle, price: itemPrice, quantity: 1, totalPrice: itemPrice };
    setSelectedItems([...selectedItems, newItem]);
  }
}
const removeFromSelectedItems = (itemId) => {
  setSelectedItems(selectedItems.filter(i => i.id !== itemId));
}

const increaseCartQuantity = (itemId,itemTitle,itemPrice) => {
  const existingItem = cartItems.find(i => i.id === itemId);
  if(existingItem) {
      existingItem.quantity += 1;
      setCartItems([...cartItems]);
  } else {
      const newItem = { id: itemId, quantity: 1 };
      setCartItems([...cartItems, newItem]);
  }
  addToSelectedItems(itemId, itemTitle, itemPrice);
}

const decreaseCartQuantity = (itemId) => {
  const existingItem = cartItems.find(i => i.id === itemId);
  if(existingItem) {
      existingItem.quantity -= 1;
      if(existingItem.quantity === 0) {
          setCartItems(cartItems.filter(i => i.id !== itemId));
      } else {
          setCartItems([...cartItems]);
      }
      removeFromSelectedItems = (itemId)
  }
}

const removeFromCart = (itemId) => {
  setCartItems(cartItems.filter(i => i.id !== itemId));
}

const openCart = () => {
  setCartOpen(true);
}

const closeCart = () => {
  setCartOpen(false);
}

const cartQuantity = cartItems.reduce((acc, item) => {
  return acc + item.quantity;
}, 0);

return {
  getItemQuantity,
  cartItems,
  cartQuantity,
  openCart,
  closeCart,
  increaseCartQuantity,
  decreaseCartQuantity,
  removeFromCart,
  addToSelectedItems,
  removeFromSelectedItems

};
}


    
  

