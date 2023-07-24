import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cart, updateQuantity } = useContext(CartContext);

  const incrementQuantity = (product) => {
    updateQuantity(product, product.quantity + 1);
  };

  const decrementQuantity = (product) => {
    if (product.quantity > 1) {
      updateQuantity(product, product.quantity - 1);
    }
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.map((item, index) => (
        <div key={index}>
          <img src={`../product images/${item.image}`} alt={item.title} style={{ width: "100px" }} />
          <h3>{item.title}</h3>
          <p>${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => decrementQuantity(item)}>-</button>
          <button onClick={() => incrementQuantity(item)}>+</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
