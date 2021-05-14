import axios from "axios";
import { useState } from "react";
import { useWishList, useLibrary} from "../contexts";

export const useWishListHandler = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [toastColor, setToastColor] = useState("#59D78B");
  const { wishListDispatch } = useWishList();
  const { libraryState, libraryDispatch } = useLibrary();
 

  const wishListHandler = async (wish,isbn,_id,toastMsgParam) => {
    const userId = localStorage.getItem("_id")
    wish ? setToastColor("#d34d32") : setToastColor("#59D78B");
    const newArr = libraryState.data.map((item) => {
      if (item.isbn === isbn) {
        return { ...item, wish: !wish };
      }
      return item;
    });
    libraryDispatch({ type: "ON_SUCCESS", payload: newArr });
    const newArr2 = newArr.filter((item) => (item.wish === true ? item : null));
    wishListDispatch({ type: "ADD_WISH", payload: { product: newArr2 } });


    try{
      const response = await axios.get(`http://localhost:3002/userActivity/user/${userId}`)
      if(response.data.data){
       
         const response = await axios.get(`http://localhost:3002/userActivity/user/${userId}/wish/${_id}`)
         if(response.data.success){
          await axios.delete(`http://localhost:3002/userActivity/user/${userId}/wish/${_id}`)
          
          }else{
            
          await axios.post(`http://localhost:3002/userActivity/user/${userId}/wish/update/${_id}`)
          }
      
      }else{
        await axios.post("http://localhost:3002/userActivity/wish",{
          _id:userId,
          wishlist:_id
        })
      }
     
    }catch(err){
      console.log(`${err}:unable to save wishlist activity`)
    }

   
   

    // setToastMsg(toastMsgParam);
    // setShowToast(true);
    // setTimeout(() => {
    //   setShowToast(false);
    // }, 2000);
  };

  return { wishListHandler, showToast, toastMsg, toastColor,wishListDispatch };
};
