import React from "react";

const cartContext = React.createContext({
  cartItems: [],
  totalItemsInCart: 0,
  addItemsToCart: (newCandy, noOfCandy) => {},
  removeItemsFromCart: (candyTobeRemoved) => {},
});
export default cartContext;
