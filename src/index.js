import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CartContextProvider from "./components/Cart-Conext/CartContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartContextProvider>
    <App />
  </CartContextProvider>
);
