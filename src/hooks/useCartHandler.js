import axios from 'axios'
import { useCart,useLibrary,useToast } from "../contexts";
import {useCountItems,useFetchLibrary,useAPI} from '../hooks'

export const useCartHandler = () => {
  const { cartState, cartDispatch,setProductId} = useCart();
  const {totalItemsInCart} = useCountItems()
  const {refresh,setRefresh} = useFetchLibrary()
  const {api}  = useAPI()
  const {setProduct} = useLibrary()
  const {setToastMsg,setToastColor,SUCCESS} = useToast()

  const cartHandler = async ({product }) => {
    setToastMsg(`${product.title} IS ADDED TO CART`)
    setToastColor(SUCCESS)
    const plusMinus = "+"
    const userId = await localStorage.getItem("_id")
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

  const  singleProduct = [{...product,cart:!product.cart}]
    setProduct(singleProduct[0])
    try{
      setProductId(product._id)
      const response = await axios.get(`${api.URL}${api.usersActivity.GET}user/${userId}`)
      if(response.data.data){
        await axios.post(`${api.URL}${api.usersActivity.POST}user/${userId}/cart/update/${plusMinus}/${product._id}`)
      }else{
        await axios.post(`${api.URL}${api.usersActivity.GETCARTITEMS}`,{
          _id:userId,
          cart:{count:1,productId:product._id}
        })
      }
    }catch(err){
      console.log(`${err}:unable to save cart activity`)
    }
    setRefresh(!refresh)
  };

  return { cartHandler,totalItemsInCart};
};
