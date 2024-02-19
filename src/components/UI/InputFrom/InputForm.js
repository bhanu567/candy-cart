import React, { useRef } from "react";
import "./InputForm.css";

const InputForm = (props) => {
  const CandyNameref = useRef();
  const Descriptionref = useRef();
  const Priceref = useRef();

  const SubmitHandler = (e) => {
    e.preventDefault();
    const candyName = CandyNameref.current.value;
    const desc = Descriptionref.current.value;
    const price = Priceref.current.value;
    if (
      candyName.trim().length === 0 ||
      desc.trim().length === 0 ||
      price.trim().length === 0
    ) {
      prompt("Please, Enter a Valid Value");
    } else {
      const newCandy = {
        name: candyName,
        desc: desc,
        price: price,
      };
      props.onAddNewCandy(newCandy);
      CandyNameref.current.value = "";
      Descriptionref.current.value = "";
      Priceref.current.value = "";
    }
  };
  return (
    <React.Fragment>
      <form onSubmit={SubmitHandler}>
        <label htmlFor="CN">Candy Name : </label>
        <input id="CN" type="text" ref={CandyNameref}></input>

        <label htmlFor="CD">Description : </label>
        <input id="CD" type="text" ref={Descriptionref}></input>
        
        <label htmlFor="P">Price : </label>
        <input id="P" type="number" ref={Priceref}></input>

        <button type="submit">Add Candy</button>
      </form>
    </React.Fragment>
  );
};
export default InputForm;
