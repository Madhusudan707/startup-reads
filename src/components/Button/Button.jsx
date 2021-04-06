import React from "react";
const Button = ({ id, text, btnClass, btnFunc, isDisabled }) => {
  return (
    <input
      type="button"
      id={id}
      value={text}
      className={btnClass}
      onClick={btnFunc}
      disabled={isDisabled}
    />
  );
};

export default Button;
