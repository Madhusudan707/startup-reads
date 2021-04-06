import { useState } from "react";
import { useCart } from "../contexts/contexts";

export const useCartHandler = () => {
  const [showToast2, setShowToast2] = useState(false);
  const [toastMsg2, setToastMsg2] = useState("");
  const [toastColor2, setToastColor2] = useState("#59D78B");
  const { cartState, cartDispatch } = useCart();

  const cartHandler = ({ e, product }) => {
    setToastColor2("#59D78B");
    setToastMsg2("Product Has Been Added To Cart");
    setShowToast2(true);
    setTimeout(() => {
      setShowToast2(false);
    }, 2000);

    if (cartState.cartItem.length) {
      let flag = true;
      let newArr = cartState.cartItem.map((item) => {
        if (item.isbn === product.isbn) {
          flag = false;
          return { ...item, qty: item.qty + 1, cart: !product.cart };
        }
        return item;
      });

      if (flag) {
        cartDispatch({
          type: "ADD-TO-CART",
          payload: { ...product, qty: 1, cart: !product.cart },
        });
      } else {
        cartDispatch({
          type: "ADD-TO-CART-REPEATED",
          payload: { product: newArr },
        });
      }
    } else {
      cartDispatch({
        type: "ADD-TO-CART",
        payload: { ...product, qty: 1, cart: !product.cart },
      });
    }
  };

  return { cartHandler, showToast2, toastMsg2, toastColor2 };
};
