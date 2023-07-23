import React, { useState } from "react";

const CheckoutForm = ({ navigateTo }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send the form data to the server
    const configObj = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };

    fetch("http://localhost:3000/orders", configObj)
      .then((res) => res.json())
      .then((data) => {
        // Assuming the server returns the newly created order object with an ID
        console.log("Order submitted successfully:", data);
        setFormData({ name: "", email: "", address: "" });
        navigateTo("/");
      })
      .catch((error) => {
        console.error("Error submitting order:", error);
      });
  };

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" required />
      <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" required />
      <input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="Address" required />
      <button type="submit">Place Order</button>
    </form>
  );
};

export default CheckoutForm;
