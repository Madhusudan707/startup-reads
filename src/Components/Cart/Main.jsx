import { CartHeading, CartItems, ContinueShopping, Checkout } from "./index";
import './cart.css'
export const Main = () => {
  return (
    <>
      <div className="flex shadow-md my-10 w-full main">
        <div className="w-full bg-white px-10 py-10">
          <CartHeading />
          <CartItems />
          <ContinueShopping nameClass="flex text-blue-500  mt-10" />
        </div>
        <Checkout />
      </div>
    </>
  );
};
