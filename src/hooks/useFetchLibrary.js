import { useEffect,useState} from "react";
import axios from 'axios'
import { useLibrary,useWishList,useCart} from "../contexts/";
import {useAPI} from '../hooks'
export const useFetchLibrary = () => {
  const { libraryState, libraryDispatch } = useLibrary();
  const { wishListState,wishListDispatch } = useWishList();
  const { cartDispatch } = useCart();
  const [refresh,setRefresh] = useState(false)
  const {api} = useAPI()


  useEffect(() => {
    (async()=>{
      try {
        const _id = localStorage.getItem("_id")
        const response = await axios.get(`${api.URL}${api.books.GET}`);
        const user = await axios.get(`${api.URL}${api.usersActivity.GET}user/${_id}`)
        let updateUserActivity
        if(user.data.data){
        updateUserActivity = response.data.data.map((item)=>{
            for(const value of user.data.data.wishlist){
              if(item._id ===value ){
                return { ...item, wish: true };
              }
            }
            return item
          })
          updateUserActivity = updateUserActivity.map((item)=>{
            for(const value of user.data.data.cart){
              if(item._id ===value.productId ){
                return { ...item, qty:value.count,cart: true };
              }
            }
            return item
          })
          libraryDispatch({ type: "ON_SUCCESS", payload: updateUserActivity });
           const newArr2 = updateUserActivity.filter((item) => (item.wish === true ? item : null));
          wishListDispatch({ type: "ADD_WISH", payload: { product: newArr2 } });
          const newArr3 = updateUserActivity.filter((item)=>(item.cart===true? item:null))
          cartDispatch({type:"ADD_TO_CART_REPEATED",payload:{product:newArr3}})
        }else{
          libraryDispatch({ type: "ON_SUCCESS", payload: response.data.data});
        }
      } catch (err) {
        libraryDispatch({ type: "ON_FAILURE", payload: "" });
      }
      
    })()
     //Below Line remove the useEffect dependency warning
  //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh]);
  return {libraryState,wishListState,refresh,setRefresh};
};