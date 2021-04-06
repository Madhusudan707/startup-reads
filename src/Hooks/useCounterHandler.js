import { useState } from "react";
import {useCounter,useCart} from '../contexts/contexts'

export const useCounterHandler = ()=>{
    const { counterDispatch } = useCounter();
    const [btnDisable, setBtnDisable] = useState(false);
    const { cartState, cartDispatch } = useCart();

    const counterHandler=({itemCount,isbn,incDec})=>{
        let newArr = cartState.cartItem.map((item) => {
            
            if (item.isbn === isbn) {
              switch (incDec) {
                 
                case "+":
                  counterDispatch({ type: "increment" });
                  setBtnDisable(false);
                  return { ...item, qty: item.qty + 1 };
      
                case "-":
                  if (itemCount > 1) {
                    counterDispatch({ type: "decrement" });
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
          cartDispatch({ type: "AddToCartRepeated", payload: { product: newArr } });
    }

    return {counterHandler,btnDisable}
}