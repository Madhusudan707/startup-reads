import { useCart } from "../contexts";
import {useAPI} from '../hooks'
import axios from 'axios'
export const useRemoveItemFromCart = () => {
  const { cartState, cartDispatch } = useCart();
  const userId = localStorage.getItem("_id")
  const {api} = useAPI()
  const removeItemFromCart = async(pid) => {
    try{
      await axios.delete(`${api.URL}${api.usersActivity.GET}user/${userId}/cart/${pid}`)
    }catch(err){
      console.log(`${err}:Unable to Remove Cart Item`)
    }

    const newArr2 = cartState.cartItem.filter((item) => item._id !== pid);
    cartDispatch({ type: "ADD_TO_CART_REPEATED", payload: { product: newArr2 } });
  };

  return { removeItemFromCart };
};
