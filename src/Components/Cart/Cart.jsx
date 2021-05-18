import { Empty,Address,Toast } from "../Reusable";

import { useCart,useToast } from "../../contexts";
import {Main,ContinueShopping} from './index'
import {MobileCart} from './MobileCart/MobileCart'

export const Cart = () => {
  const { cartState } = useCart();
  const {toastMsg,toastColor} = useToast()
  return (
    <div className="container mx-auto lg:mt-32 mt-20">
       {toastMsg?<Toast toastClass="fixed top-32 right-8" bgColor={toastColor} msg={toastMsg}/>:null} 
      {cartState.cartItem.length === 0 ? (
        <>
        <Empty
          imageSrc="empty_cart.svg"
          nameClass="lg:w-2/4 lg:h-2/4 lg:mt-32 lg:p-12 w-12/12"
          altText="empty cart"
          text=" Your Cart is Empty"
          h1Class = "lg:text-4xl absolute left-64 text-red-600 top-0 m-96 self-center"
        />
        <ContinueShopping nameClass = "absolute text-blue-500 left-72 top-12 m-96 text-2xl"/>
        </>
      ) : (
        <>
          <Main/>
          <MobileCart/>
          <Address/>
          
        </>
       
      )}
    </div>
  );
};
