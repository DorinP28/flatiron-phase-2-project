import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, addToCard }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCard={addToCard} />
      ))}
    </div>
  );
};

export default ProductList;
