import React, { useEffect } from 'react';
import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartContextProvider({ children }) {
  const getProductsFromLocalStorage = () =>
    localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : [];

  const [cart, setCart] = useState(getProductsFromLocalStorage);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
