import { useState, useEffect } from "react";
import { useCart } from "../contexts/contexts";

export const useFinalBill = () => {
  const { cartState } = useCart();
  const [final, setFinal] = useState(0);
  useEffect(() => {
    finalBill();
  }, [cartState]);
  const finalBill = () => {
    let price = cartState.cartItem.reduce(
      (acc, curr) => acc + curr.qty * curr.price,
      0
    );
    setFinal(price);
  };

  return { finalBill, final, cartState };
};
