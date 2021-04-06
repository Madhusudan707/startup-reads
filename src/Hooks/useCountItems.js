import { useState,useEffect } from "react";
import { useCart } from "../contexts/contexts";

export const useCountItems = () => {
  const { cartState } = useCart();
  const [totalItemsInCart, setTotalItemsInCart] = useState(0);

  useEffect(() => {
    totalItems();
  }, [cartState]);

  const totalItems = () => {
    const sumQty = cartState.cartItem.reduce(function (acc, curr) {
      return acc + curr.qty;
    }, 0);
    setTotalItemsInCart(sumQty);
  };

  return {totalItemsInCart}
};
