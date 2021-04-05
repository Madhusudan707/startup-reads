import React, { useState } from "react";
import Button from "../Button/Button";
import { useCart } from "../../contexts/cart";
import { useCounter } from "../../contexts/contexts";

const Counter = ({ itemCount, isbn }) => {
  const { CounterDispatch } = useCounter();
  const [btnDisable, setBtnDisable] = useState(false);
  const { cartState, CartDispatch } = useCart();

  const counterHandler = (incDec) => {
    let newArr = cartState.cartItem.map((item) => {
      if (item.isbn === isbn) {
        switch (incDec) {
          case "+":
            CounterDispatch({ type: "increment" });
            setBtnDisable(false);
            return { ...item, qty: item.qty + 1 };

          case "-":
            if (itemCount > 1) {
              CounterDispatch({ type: "decrement" });
              setBtnDisable(false);
              return { ...item, qty: item.qty - 1 };
            } else {
              setBtnDisable(true);
            }
            break;

          default:
            throw new Error("custom error");
        }
      }
      return item;
    });
    CartDispatch({ type: "AddToCartRepeated", payload: { product: newArr } });
  };
  return (
    <>
      <Button
        text="+"
        btnClass="btn btn-default"
        btnFunc={() => {
          counterHandler("+");
        }}
      />

      <span>{itemCount}</span>

      <Button
        isDisabled={btnDisable}
        btnClass="btn btn-default"
        text="-"
        btnFunc={() => {
          counterHandler("-");
        }}
      />
    </>
  );
};

export default Counter;
