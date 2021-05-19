import { useState } from "react";
import { useCounter, useCart, useToast } from "../contexts";
import { useRemoveItemFromCart, useAPI } from "../hooks";
import axios from "axios";

export const useCounterHandler = () => {
  const { counterDispatch } = useCounter();
  const [btnDisable, setBtnDisable] = useState(false);
  const { cartState, cartDispatch } = useCart();
  const { removeItemFromCart } = useRemoveItemFromCart();
  const { api } = useAPI();
  const { setToastMsg, setToastColor, SUCCESS, DANGER } = useToast();
  const [counterLoading, setCounterLoading] = useState(false);

  const counterHandler = async ({ itemCount, incDec, pid }) => {
    setCounterLoading(true);

    let response = "";
    const userId = localStorage.getItem("_id");

    try {
      response = await axios.post(
        `${api.URL}${api.usersActivity.POST}user/${userId}/cart/update/${incDec}/${pid}`
      );

      if (response.status === 200) {
        const newArr = cartState.cartItem.map((item) => {
          if (item._id === pid) {
            if (incDec === "+") {
              setToastMsg(`ITEM ADDED TO CART`);
              setToastColor(SUCCESS);
              counterDispatch({ type: "INCREMENT" });
              return { ...item, qty: item.qty + 1 };
            } else {
              if (itemCount > 1) {
                counterDispatch({ type: "DECREMENT" });
                setBtnDisable(false);
                setToastMsg(`ITEM REMOVED FROM CART`);
                setToastColor(DANGER);
                return { ...item, qty: item.qty - 1 };
              } else {
                setToastMsg(`ITEM REMOVED FROM CART`);
                setToastColor(DANGER);
                removeItemFromCart(item._id);
              }
            }
          }
          return item;
        });

        cartDispatch({
          type: "ADD_TO_CART_REPEATED",
          payload: { product: newArr },
        });

        setCounterLoading(false);

      }
    } catch (err) {
      setToastMsg(`${err}:UNABLE TO UPDATE CART`);
      setToastColor(DANGER);
      setCounterLoading(false);
    }
  };

  return { counterHandler, btnDisable,counterLoading };
};
