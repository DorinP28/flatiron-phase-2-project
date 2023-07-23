import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import CheckoutForm from "./components/CheckoutForm";
import ShoppingCard from "./components/ShoppingCard";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/checkout">Checkout</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<CheckoutForm />} />
      </Routes>
      <ShoppingCard />
    </div>
  );
}

function Home() {
  return <h1>Welcome to the Home Page</h1>;
}

export default App;
