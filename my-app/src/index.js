import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = document.getElementById("root");
const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

createRoot(root).render(app);
