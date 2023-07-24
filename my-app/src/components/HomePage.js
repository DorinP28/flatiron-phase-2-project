import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const HomePage = () => {
  return (
    <div>
      <div className="hero">
        <h1>Welcome to Our Online Store!</h1>
        <p>Quality products at the best prices</p>
        <Link to="/products" className="cta">
          Shop Now
        </Link>
      </div>

      <div className="intro">
        <h2>About Us</h2>
        <p>
          At Our Online Store, we strive to offer our customers the best products at unbeatable prices. Our collection is carefully selected to ensure top
          quality and satisfaction. Start shopping today!
        </p>
      </div>
    </div>
  );
};

export default HomePage;
