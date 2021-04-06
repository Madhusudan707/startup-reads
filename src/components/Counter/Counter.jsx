import React from "react";
import Button from "../Button/Button";
import { useCounterHandler } from "../../Hooks/Hooks.js";

const Counter = ({ itemCount,isbn}) => {
  const { counterHandler, btnDisable } = useCounterHandler();

  return (
    <>
      <Button
        text="+"
        btnClass="btn btn-default"
        btnFunc={() => {
          counterHandler({itemCount,isbn,incDec:"+"});
        }}
      />

      <span>{itemCount}</span>

      <Button
        isDisabled={btnDisable}
        btnClass="btn btn-default"
        text="-"
        btnFunc={() => {
          counterHandler({itemCount,isbn,incDec:"-"});
        }}
      />
    </>
  );
};

export default Counter;
