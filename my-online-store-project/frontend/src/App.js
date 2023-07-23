import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";
import CheckoutForm from "./components/CheckoutForm";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/cart" component={ShoppingCart} />
          <Route path="/checkout" component={CheckoutForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
