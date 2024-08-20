import React, { createContext, useState } from "react";

export const cartContext = createContext();
function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItemToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeItemFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div>
      <cartContext.Provider
        value={{ cart, addItemToCart, removeItemFromCart, clearCart }}
      >
        {children}
      </cartContext.Provider>
    </div>
  );
}

export default CartProvider;
