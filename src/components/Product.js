import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";

const Product = ({ product }) => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  const isInCart = cart.find((item) => item.id === product.id) !== undefined;

  const [isZoomed, setIsZoomed] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="product">
      <img src={`../product images/${product.image}`} alt={product.title} onClick={toggleZoom} className={isZoomed ? "zoomed" : ""} />
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      {isInCart ? (
        <div>
          <button className="in-cart">In Cart</button>
          <button onClick={handleRemoveFromCart} className="cancel">
            Cancel
          </button>
        </div>
      ) : (
        <button onClick={handleAddToCart} className="add-to-cart">
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default Product;
