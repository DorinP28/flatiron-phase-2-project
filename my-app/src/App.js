import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import CheckoutForm from "./components/CheckoutForm";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const navigateTo = (path) => {
    window.history.pushState(null, null, path);
    window.dispatchEvent(new Event("popstate"));
  };

  return (
    <Router>
      <div>
        <Header navigateTo={navigateTo} />
        <Route exact path="/">
          <ProductList products={products} />
        </Route>
        <Route path="/checkout">
          <CheckoutForm navigateTo={navigateTo} />
        </Route>
      </div>
    </Router>
  );
};

export default App;
