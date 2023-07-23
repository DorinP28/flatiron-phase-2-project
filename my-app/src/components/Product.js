import React from "react";

const Product = ({ product }) => {
  return (
    <div className="product">
      <img src={`./product images/${product.image}`} alt={product.title} />
      <h2>{product.title}</h2>
      <p>${product.price}</p>
    </div>
  );
};

export default Product;
