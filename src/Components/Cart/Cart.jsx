import { Empty,Address } from "../Reusable";

import { useCart } from "../../contexts";
import {Main,ContinueShopping} from './index'
import {MobileCart} from './MobileCart/MobileCart'

export const Cart = () => {
  const { cartState } = useCart();
  return (
    <div className="container mx-auto lg:mt-32 mt-20">
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
