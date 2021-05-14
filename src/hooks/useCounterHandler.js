import { useState } from "react";
import {useCounter,useCart} from '../contexts'
import { useRemoveItemFromCart,useAPI} from "../hooks";
import axios from 'axios'
export const useCounterHandler = ()=>{
    const { counterDispatch } = useCounter();
    const [btnDisable, setBtnDisable] = useState(false);
    const { cartState, cartDispatch } = useCart();
    const { removeItemFromCart } = useRemoveItemFromCart();
    const {api} = useAPI()

    const counterHandler=async ({itemCount,incDec,pid})=>{
     
      const userId = localStorage.getItem("_id")
        const newArr = cartState.cartItem.map((item) => {
            
            if (item._id === pid) {
              if(incDec === "+"){
                counterDispatch({ type: "INCREMENT" });
                setBtnDisable(false);
                return { ...item, qty: item.qty + 1 };
              }else{
                if (itemCount > 1) {
                  counterDispatch({ type: "DECREMENT" });
                  setBtnDisable(false);
                  return { ...item, qty: item.qty - 1 };
                } else {
                  removeItemFromCart(item._id)
                }
              }
            }
            return item;
          });
          
            try{
              await axios.post(`${api.URL}${api.usersActivity.POST}user/${userId}/cart/update/${incDec}/${pid}`)
            }catch(err){
                console.log(`${err}:Unable to update cart`)
            }
         
          cartDispatch({ type: "ADD_TO_CART_REPEATED", payload: { product: newArr } });
    }

    return {counterHandler,btnDisable}
}