import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const productExists = cart.find((item) => item.id === product.id);
    if (productExists) {
      productExists.quantity += 1;
      setCart([...cart]);
    } else {
      product.quantity = 1;
      setCart([...cart, product]);
    }
  };

  const updateQuantity = (product, quantity) => {
    setCart(cart.map((item) => (item.id === product.id ? { ...item, quantity: parseInt(quantity) } : item)));
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  return <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart }}>{children}</CartContext.Provider>;
};
