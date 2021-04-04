import React from "react";
const Button = ({ text, btnClass, btnFunc, isDisabled }) => {
  return (
    <button className={btnClass} onClick={btnFunc} disabled={isDisabled}>
      {text}
    </button>
  );
};

export default Button;