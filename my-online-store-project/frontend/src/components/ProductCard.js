import React from "react";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      {/* Add a button to add the product to the shopping cart */}
      {/* <button onClick={() => addToCart(product)}>Add to Cart</button> */}
    </div>
  );
}

export default ProductCard;
