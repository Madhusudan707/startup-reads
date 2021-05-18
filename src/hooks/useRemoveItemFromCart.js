import {useState} from 'react'
import { useCart,useToast } from "../contexts";
import {useAPI} from '../hooks'
import axios from 'axios'
export const useRemoveItemFromCart = () => {
  const { cartState, cartDispatch } = useCart();
  const userId = localStorage.getItem("_id")
  const {api} = useAPI()
  const {setToastMsg,setToastColor,DANGER} = useToast()
  const [deleteItem,setDeleteItem] = useState(false)

 
  const removeItemFromCart = async(pid) => {

    setDeleteItem(true)

    let response

    try{
      response= await axios.delete(`${api.URL}${api.usersActivity.GET}user/${userId}/cart/${pid}`)
      if(response.data.status){
        setToastMsg(`ITEM REMOVED FROM CART`)
        setToastColor(DANGER)
        cartItemDeleteToContext(pid)
        setDeleteItem(false)
       
       }
     }catch(err){
     
      setToastMsg(`${err}:Unable to Remove Cart Item`)
      setToastColor(DANGER)
      setDeleteItem(false)
       
     }
    
  };

  const cartItemDeleteToContext = (pid)=>{
    const newArr2 = cartState.cartItem.filter((item) => item._id !== pid);
    cartDispatch({ type: "ADD_TO_CART_REPEATED", payload: { product: newArr2 } });
  }

  return { removeItemFromCart,deleteItem };
};
