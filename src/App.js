import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { CartProvider } from "./components/CartContext";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Router>
        <CartProvider>
          <Header />
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;
