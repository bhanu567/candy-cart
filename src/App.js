import React, { useState } from "react";
import InputForm from "./components/UI/InputFrom/InputForm";
import DisplayItem from "./components/UI/DiplayContent/DisplayItems";
import Header from "./components/UI/Header/Header";
import CartItem from "./components/UI/CartItem/CartItem";

function App() {
  const [candies, setCandies] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };
  const addNewCandyHandler = (newCandy) => {
    setCandies((prevCandies) => {
      for (let index = 0; index < prevCandies.length; index++) {
        if (prevCandies[index].name === newCandy.name) {
          return [...prevCandies];
        }
      }
      return [
        ...prevCandies,
        {
          id: prevCandies.length + 1,
          name: newCandy.name,
          desc: newCandy.desc,
          price: newCandy.price,
        },
      ];
    });
  };
  return (
    <div>
      <Header showCart={showCartHandler}></Header>
      <InputForm onAddNewCandy={addNewCandyHandler}></InputForm>
      {candies.length > 0 && <DisplayItem candies={candies}></DisplayItem>}
      {showCart && <CartItem hideCart={hideCartHandler}></CartItem>}
    </div>
  );
}

export default App;
