import React, { useContext } from "react";
import cartContext from "../../Cart-Conext/CartContext";
import cartImage from './cart_icon.png';
import "./Header.css"

const Header = (props) => {
    const cartCtx=useContext(cartContext);
  return (
    <div id="top">
      <h1 id="h1">Candy Shop</h1>
      <div id="rightIcon" onClick={props.showCart}><img id="img" src={cartImage} alt="logo"></img><sup>{cartCtx.totalItemsInCart}</sup></div>
    </div>
  );
};
export default Header;
