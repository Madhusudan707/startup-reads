import { useState } from "react";
import {useCounter,useCart} from '../contexts/contexts'

export const useCounterHandler = ()=>{
    const { counterDispatch } = useCounter();
    const [btnDisable, setBtnDisable] = useState(false);
    const { cartState, cartDispatch } = useCart();

    const counterHandler=({itemCount,isbn,incDec})=>{
        const newArr = cartState.cartItem.map((item) => {
            
            if (item.isbn === isbn) {
              switch (incDec) {
                 
                case "+":
                  counterDispatch({ type: "INCREMENT" });
                  setBtnDisable(false);
                  return { ...item, qty: item.qty + 1 };
      
                case "-":
                  if (itemCount > 1) {
                    counterDispatch({ type: "DECREMENT" });
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
          cartDispatch({ type: "ADD-TO-CART-REPEATED", payload: { product: newArr } });
    }

    return {counterHandler,btnDisable}
}