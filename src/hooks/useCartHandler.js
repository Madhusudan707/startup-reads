import {useState} from 'react'
import axios from 'axios'
import { useCart,useLibrary,useToast } from "../contexts";
import {useCountItems,useFetchLibrary,useAPI} from '../hooks'

export const useCartHandler = () => {
  const { cartState, cartDispatch,setProductId} = useCart();
  const {totalItemsInCart} = useCountItems()
  const {refresh,setRefresh} = useFetchLibrary()
  const {api}  = useAPI()
  const {setProduct} = useLibrary()
  const {setToastMsg,setToastColor,SUCCESS,DANGER} = useToast()
  const [itemLoading,setItemLoading] = useState(false)

  const cartHandler = async (product) => {
    setItemLoading(true)
    let response = ""
    const plusMinus = "+"
    const userId = await localStorage.getItem("_id")
    try{
      setProductId(product._id)
      response = await axios.get(`${api.URL}${api.usersActivity.GET}user/${userId}`)
      if(response.data.data){
      response = await axios.post(`${api.URL}${api.usersActivity.POST}user/${userId}/cart/update/${plusMinus}/${product._id}`)
      }else{
     response = await axios.post(`${api.URL}${api.usersActivity.GETCARTITEMS}`,{
          _id:userId,
          cart:{count:1,productId:product._id}
        })
      }
      if(response.status===200){
        setToastMsg(`ITEM IS ADDED TO CART`)
        setToastColor(SUCCESS)
        cartItemAddedToContext(product)
        setItemLoading(false)
      }
     

    }catch(err){
      setToastMsg(`${err}:UNABLE TO ADD THE ITEM`)
      setToastColor(DANGER)
      setItemLoading(false)
    }

    const  singleProduct = [{...product,cart:!product.cart}]
    setProduct(singleProduct[0])
   
    setRefresh(!refresh)
  };

  const cartItemAddedToContext=(product)=>{
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
  }

  return { cartHandler,totalItemsInCart,itemLoading};
};
