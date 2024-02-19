import React, { Fragment, useContext} from "react";
import ReactDOM from "react-dom";
import "./CartItem.css";
import cartContext from "../../Cart-Conext/CartContext";

const Backdrop = (props) => {
  return <div id="backdropcss" onClick={props.displayCart}></div>;
};
const ListofItems = (props) => {
  const cartCtx = useContext(cartContext);
  const decreseItemInCartHandler = () => {
    cartCtx.removeItemsFromCart(props.item);
  };
  const increseItemInCartHandler = () => {
    cartCtx.addItemsToCart(props.item, 1);
  };
  return (
    <>
      <div id="overall">
        <div id="content">
          <div id="item_name">{props.item.name}</div>
          <div id="inner_contnt">
            <div id="item_price">$ {props.item.price}</div>
            <div id="item_count">X {props.item.count}</div>
          </div>
        </div>
        <div id="button_increase_decrease">
          <button id="button_decrease" onClick={decreseItemInCartHandler}>
            -
          </button>
          <button id="button_increase" onClick={increseItemInCartHandler}>
            +
          </button>
        </div>
      </div>
      <hr></hr>
    </>
  );
};
const BillSummary = (props) => {
  const cartCtx = useContext(cartContext);
  let totalPrice = 0;

  const Items = cartCtx.cartItems.map((item, index) => {
    totalPrice += Number(item.price) * Number(item.count);
    return <ListofItems key={index} item={item}></ListofItems>;
  });
  return (
    <div id="portal">
      {Items}
      <h2 id="h2">
        <div>Total Amount</div>
        <div id="total_price">$ {Math.floor(totalPrice)}</div>
      </h2>
      <div id="button">
        <button id="close" onClick={props.displayCart}>
          Close
        </button>
        <button id="order">Order</button>
      </div>
    </div>
  );
};
const CartItem = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop displayCart={props.hideCart}></Backdrop>,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <BillSummary displayCart={props.hideCart}></BillSummary>,
        document.getElementById("react_portal")
      )}
    </Fragment>
  );
};
export default React.memo(CartItem);
