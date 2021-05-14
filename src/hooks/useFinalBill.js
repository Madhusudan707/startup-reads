import { useState, useEffect } from "react";
import { useCart } from '../contexts'

export const useFinalBill = () => {
  const { cartState } = useCart();
  const [final, setFinal] = useState(0);
  useEffect(() => {
    (()=>{
      const price = cartState.cartItem.reduce(
        (acc, curr) => acc + curr.qty * curr.price,
        0
      );
      setFinal(price);
    })()
   
     //Below Line remove the useEffect dependency warning
  //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartState]);
 

  return {final};
};
