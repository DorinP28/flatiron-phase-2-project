import React from "react";

const Header = ({ navigateTo }) => {
  const handleNavigate = (path) => {
    navigateTo(path);
  };

  return (
    <header>
      <nav>
        <button onClick={() => handleNavigate("/")}>Home</button>
        <button onClick={() => handleNavigate("/checkout")}>Checkout</button>
      </nav>
    </header>
  );
};

export default Header;
