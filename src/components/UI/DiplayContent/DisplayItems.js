import React, { useContext } from "react";
import cartContext from "../../Cart-Conext/CartContext";
import "./DisplayItems.css"

const ListItems = (props) => {
  const cartCtx = useContext(cartContext);
  const addOneCandyHandler = () => {
    cartCtx.addItemsToCart(props.item, 1);
  };
  const addTwoCandyHandler = () => {
    cartCtx.addItemsToCart(props.item, 2);
  };
  const addThreeCandyHandler = () => {
    cartCtx.addItemsToCart(props.item, 3);
  };
  return (
    <li className="DIli">
      {props.item.name} - {props.item.desc} - {props.item.price}
      <button onClick={addOneCandyHandler}>Add 1</button>
      <button onClick={addTwoCandyHandler}>Add 2</button>
      <button onClick={addThreeCandyHandler}>Add 3</button>
    </li>
  );
};

const DisplayItem = (props) => {
  return (
    <React.Fragment>
      <h1 id="DIh1">Items : </h1>
      <ul>
        {props.candies.map((candy, index) => (
          <ListItems key={index} item={candy}></ListItems>
        ))}
      </ul>
    </React.Fragment>
  );
};
export default React.memo(DisplayItem);
