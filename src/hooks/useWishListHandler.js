import axios from "axios";
import { useWishList, useLibrary, useToast } from "../contexts";
import { useAPI } from "../hooks";

export const useWishListHandler = () => {
  const { wishListDispatch } = useWishList();
  const { libraryState, libraryDispatch } = useLibrary();
  const { api } = useAPI();
  const { setToastMsg, setToastColor, toastColor, SUCCESS, DANGER } =
    useToast();

  const wishListHandler = async (wish, isbn, _id) => {
    const userId = localStorage.getItem("_id");
    wish
      ? setToastMsg("ITEM IS  REMOVED FROM WISHLIST")
      : setToastMsg("ITEM IS ADDED TO WISHLIST");

    wish ? setToastColor(DANGER) : setToastColor(SUCCESS);
    
    const newArr = libraryState.data.map((item) => {
      if (item.isbn === isbn) {
        return { ...item, wish: !wish };
      }
      return item;
    });
    libraryDispatch({ type: "ON_SUCCESS", payload: newArr });
    const newArr2 = newArr.filter((item) => (item.wish === true ? item : null));
    wishListDispatch({ type: "ADD_WISH", payload: { product: newArr2 } });

    try {
      const response = await axios.get(
        `${api.URL}${api.usersActivity.GET}user/${userId}`
      );
      if (response.data.data) {
        const response = await axios.get(
          `${api.URL}${api.usersActivity.GET}user/${userId}/wish/${_id}`
        );
        if (response.data.success) {
          await axios.delete(
            `${api.URL}${api.usersActivity.POST}user/${userId}/wish/${_id}`
          );
        } else {
          await axios.post(
            `${api.URL}${api.usersActivity.POST}user/${userId}/wish/update/${_id}`
          );
        }
      } else {
        await axios.post(`${api.URL}${api.usersActivity.POSTWISH}`, {
          _id: userId,
          wishlist: _id,
        });
      }
    } catch (err) {
      console.log(`pw:${api.URL}${api.usersActivity.POSTWISH}`);
      console.log(`${err}:unable to save wishlist activity`);
    }
  };

  return { wishListHandler, wishListDispatch, toastColor };
};
