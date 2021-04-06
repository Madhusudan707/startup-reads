import { useState } from "react";
import { useWishList, useProducts } from "../contexts/contexts";

export const useWishListHandler = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [toastColor, setToastColor] = useState("#59D78B");
  const { wishListDispatch } = useWishList();
  const { productsState, productsDispatch } = useProducts();

  const wishListHandler = ({ product, toastMsgParam}) => {
    product.wish ? setToastColor("#d34d32") : setToastColor("#59D78B");
    const newArr = productsState.data.map((item) => {
      if (item.isbn === product.isbn) {
        return { ...item, wish: !product.wish };
      }
      return item;
    });
    productsDispatch({ type: "OnSuccess", payload: newArr });

    const newArr2 = newArr.filter((item) => (item.wish === true ? item : null));
    wishListDispatch({ type: "AddWish", payload: { product: newArr2 } });

    setToastMsg(toastMsgParam);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  return { wishListHandler, showToast, toastMsg, toastColor };
};
