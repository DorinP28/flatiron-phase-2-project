import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useContext(CartContext);

  const incrementQuantity = (product) => {
    updateQuantity(product, product.quantity + 1);
  };

  const decrementQuantity = (product) => {
    if (product.quantity > 1) {
      updateQuantity(product, product.quantity - 1);
    }
  };

  const handleCheckout = () => {
    alert("Thank you for Shopping with us!");
    clearCart();
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>
      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          <img src={`../product images/${item.image}`} alt={item.title} style={{ width: "100px" }} />
          <h3>{item.title}</h3>
          <p>${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <div className="cart-item-buttons">
            <button onClick={() => decrementQuantity(item)}>-</button>
            <button onClick={() => incrementQuantity(item)}>+</button>
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </div>
        </div>
      ))}
      <h2 className="cart-total">Total: ${calculateTotal().toFixed(2)}</h2>
      <button onClick={handleCheckout} className="checkout-button">
        Checkout
      </button>
    </div>
  );
};

export default Cart;
