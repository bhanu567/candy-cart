import React, { useState } from "react";
import cartContext from "./CartContext";

const CartContextProvider = (props) => {
  const [itemsInCart, setItemsInCart] = useState([]);
  const [totalCandyInCart, setTotalCandyInCart] = useState(0);

  const addItemsToCartHandler = (newCandy, noOfCandy) => {
    setItemsInCart((prevItems) => {
      for (let index = 0; index < prevItems.length; index++) {
        if (prevItems[index].id === newCandy.id) {
          prevItems[index].count += Number(noOfCandy);
          return [...prevItems];
        }
      }
      return [
        ...prevItems,
        {
          id: newCandy.id,
          name: newCandy.name,
          desc: newCandy.desc,
          count: Number(noOfCandy),
          price: newCandy.price,
        },
      ];
    });
    setTotalCandyInCart((totalCandyInCart) => totalCandyInCart + noOfCandy);
  };

  const removeItemsFromCartHandler = (candyTobeRemoved) => {
    setItemsInCart((prevItems) => {
      for (let index = 0; index < prevItems.length; index++) {
        if (prevItems[index].id === candyTobeRemoved.id) {
          if (prevItems[index].count > 1) {
            prevItems[index].count -= 1;
            return [...prevItems];
          } else {
            return prevItems.filter(
              (candy) => candy.id !== candyTobeRemoved.id
            );
          }
        }
      }
    });
    setTotalCandyInCart((totalCandyInCart) => totalCandyInCart - 1);
  };

  const CartContextValue = {
    cartItems: itemsInCart,
    totalItemsInCart: totalCandyInCart,
    addItemsToCart: addItemsToCartHandler,
    removeItemsFromCart: removeItemsFromCartHandler,
  };

  return (
    <cartContext.Provider value={CartContextValue}>
      {props.children}
    </cartContext.Provider>
  );
};
export default CartContextProvider;
