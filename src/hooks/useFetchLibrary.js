import { useEffect, useState } from "react";
import axios from "axios";
import { useLibrary, useWishList, useCart, useToast } from "../contexts/";
import { useAPI } from "../hooks";
export const useFetchLibrary = () => {
  const { libraryState, libraryDispatch } = useLibrary();
  const { wishListState, wishListDispatch } = useWishList();
  const { cartDispatch } = useCart();
  const [refresh, setRefresh] = useState(false);
  const { api } = useAPI();
  const [libraryLoading, setLibraryLoading] = useState(false);
  const { setToastMsg, setToastColor, SUCCESS, DANGER } = useToast();

  useEffect(() => {
    (async () => {
      setLibraryLoading(true);
      try {
        const response = await axios.get(`${api.URL}${api.books.GET}`);

        if (response.status === 200) {
          const _id = await localStorage.getItem("_id");
          const user = await axios.get(
            `${api.URL}${api.usersActivity.GET}user/${_id}`
          );
          let updateUserActivity;
          if (user.data.data) {
            updateUserActivity = response.data.data.map((item) => {
              for (const value of user.data.data.wishlist) {
                if (item._id === value) {
                  return { ...item, wish: true };
                }
              }
              return item;
            });
            updateUserActivity = updateUserActivity.map((item) => {
              for (const value of user.data.data.cart) {
                if (item._id === value.productId) {
                  return { ...item, qty: value.count, cart: true };
                }
              }
              return item;
            });
            libraryDispatch({
              type: "ON_SUCCESS",
              payload: updateUserActivity,
            });
            const newArr2 = updateUserActivity.filter((item) =>
              item.wish === true ? item : null
            );
            wishListDispatch({
              type: "ADD_WISH",
              payload: { product: newArr2 },
            });
            const newArr3 = updateUserActivity.filter((item) =>
              item.cart === true ? item : null
            );
            cartDispatch({
              type: "ADD_TO_CART_REPEATED",
              payload: { product: newArr3 },
            });
          } else {
            libraryDispatch({
              type: "ON_SUCCESS",
              payload: response.data.data,
            });
          }
        }
        setLibraryLoading(false);
      } catch (err) {
        setToastMsg(`${err} UNABLE TO LOAD LIBRARY, TRY AGAIN`)
        libraryDispatch({ type: "ON_FAILURE", payload: "" });
        setLibraryLoading(false);
      }
    })();
    //Below Line remove the useEffect dependency warning
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh]);
  return { libraryState, wishListState, refresh, setRefresh, libraryLoading };
};
