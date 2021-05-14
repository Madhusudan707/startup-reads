import { useState } from "react";
import axios from 'axios'
import { useCart } from "../contexts";
import {useCountItems,useFetchLibrary} from '../hooks'

export const useCartHandler = () => {
  const [showToast2, setShowToast2] = useState(false);
  const [toastMsg2, setToastMsg2] = useState("");
  const [toastColor2, setToastColor2] = useState("#59D78B");
  const { cartState, cartDispatch,setProductId} = useCart();
  const {totalItemsInCart} = useCountItems()
  const {refresh,setRefresh} = useFetchLibrary()


  const cartHandler = async ({ e, product }) => {
    
    const plusMinus = "+"
    const userId = await localStorage.getItem("_id")
    // setToastColor2("#59D78B");
    // setToastMsg2("Product Has Been Added To Cart");
    // setShowToast2(true);
    // setTimeout(() => {
    //   setShowToast2(false);
    // }, 2000);

    if (cartState.cartItem.length) {
      let flag = true;
      const newArr = cartState.cartItem.map((item) => {
        if (item.isbn === product.isbn) {
          flag = false;
          return { ...item, qty: item.qty + 1, cart: !product.cart };
        }
        return item;
      });

      if (flag) {
        cartDispatch({
          type: "ADD_TO_CART",
          payload: { ...product, qty: 1, cart: !product.cart },
        });
      } else {
        cartDispatch({
          type: "ADD_TO_CART_REPEATED",
          payload: { product: newArr },
        });
      }
    } else {
      cartDispatch({
        type: "ADD_TO_CART",
        payload: { ...product, qty: 1, cart: !product.cart },
      });
    }
    try{
      setProductId(product._id)
      const response = await axios.get(`http://localhost:3002/userActivity/user/${userId}`)
      if(response.data.data){
        await axios.post(`http://localhost:3002/userActivity/user/${userId}/cart/update/${plusMinus}/${product._id}`)
      }else{
        await axios.post("http://localhost:3002/userActivity/cart",{
          _id:userId,
          cart:{count:1,productId:product._id}
        })
      }
    }catch(err){
      console.log(`${err}:unable to save cart activity`)
    }
    setRefresh(!refresh)
  };

  return { cartHandler, showToast2, toastMsg2, toastColor2,totalItemsInCart };
};
