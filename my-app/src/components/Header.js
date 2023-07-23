import React from "react";

const Header = ({ navigateTo, cardItemsCount }) => {
  const handleNavigate = (path) => {
    navigateTo(path);
  };

  return (
    <header>
      <nav>
        <button onClick={() => handleNavigate("/")}>Home</button>
        <button onClick={() => handleNavigate("/checkout")}>Checkout</button>
      </nav>
      <div>Cart Items: {cardItemsCount}</div>
    </header>
  );
};

export default Header;
