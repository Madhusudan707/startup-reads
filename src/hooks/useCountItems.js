import {useEffect } from "react";
import { useCart} from "../contexts";
export const useCountItems = () => {
  const { cartState,totalItemsInCart, setTotalItemsInCart} = useCart();

  useEffect(() => {
    (async()=>{
      const sumQty = cartState.cartItem.reduce(function (acc, curr) {
        return acc + curr.qty;
      }, 0);
      setTotalItemsInCart(sumQty);
    })()
    //Below Line remove the useEffect dependency warning
  //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartState]);
  return {totalItemsInCart}
};
