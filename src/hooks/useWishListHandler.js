import { useState } from "react";
import axios from "axios";
import { useWishList, useLibrary, useToast } from "../contexts";
import { useAPI } from "../hooks";

export const useWishListHandler = () => {
  const { wishListDispatch } = useWishList();
  const { libraryState, libraryDispatch } = useLibrary();
  const { api } = useAPI();
  const [wishLoading, setWishLoading] = useState(false);
  const { setToastMsg, setToastColor, SUCCESS, DANGER } =
    useToast();

  const wishListHandler = async (wish, isbn, _id) => {
    setWishLoading(true);
    const userId = localStorage.getItem("_id");
    let response = "";

    try {
      response = await axios.get(
        `${api.URL}${api.usersActivity.GET}user/${userId}`
      );

      if (response.data.data) {
        response = await axios.get(
          `${api.URL}${api.usersActivity.GET}user/${userId}/wish/${_id}`
        );

        if (response.data.success) {
          response = await axios.delete(
            `${api.URL}${api.usersActivity.POST}user/${userId}/wish/${_id}`
          );
        } else {
          response = await axios.post(
            `${api.URL}${api.usersActivity.POST}user/${userId}/wish/update/${_id}`
          );
        }
      } else {
        response = await axios.post(`${api.URL}${api.usersActivity.POSTWISH}`, {
          _id: userId,
          wishlist: _id,
        });
      }
      if (response.data.status === 200) {
        wish
          ? setToastMsg("ITEM IS  REMOVED FROM WISHLIST")
          : setToastMsg("ITEM IS ADDED TO WISHLIST");
        wish ? setToastColor(DANGER) : setToastColor(SUCCESS);
        wishAddedToContext(wish, isbn, _id);
        setWishLoading(false);
      }
    } catch (err) {
      console.log("err", err);
      setToastMsg(`${err}:UNABLE TO ADD YOUR WISH`);
      setToastColor(DANGER);
      setWishLoading(false);
    }
  };

  const wishAddedToContext = (wish, isbn, _id) => {
    const newArr = libraryState.data.map((item) => {
      if (item.isbn === isbn) {
        return { ...item, wish: !wish };
      }
      return item;
    });
    libraryDispatch({ type: "ON_SUCCESS", payload: newArr });
    const newArr2 = newArr.filter((item) => (item.wish === true ? item : null));
    wishListDispatch({ type: "ADD_WISH", payload: { product: newArr2 } });
  };

  return { wishListHandler, wishListDispatch, wishLoading };
};
