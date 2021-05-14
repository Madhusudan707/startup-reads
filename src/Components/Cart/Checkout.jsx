import { useCart,useLanguage } from "../../contexts";
import { useFinalBill } from "../../hooks";
import {Address} from '../Reusable'
export const Checkout = () => {
  const {languageState} = useLanguage()
  const { totalItemsInCart } = useCart();
  const { final } = useFinalBill();
  return (
    <>
      <div id="summary" className="lg:w-1/4 px-8 py-10 w-full">
        <h1 className=" text-2xl border-b pb-8">Order Summary</h1>
        <div className="flex justify-between mt-10 mb-5">
          <span className=" text-sm uppercase">
          {languageState.data.items||"Items"}&nbsp;{totalItemsInCart}
          </span>
          <span className=" text-sm">
            <i className="fas fa-rupee-sign"></i>&nbsp;{final}
          </span>
        </div>
        <div>
          <label className="font-medium inline-block mb-3 text-sm uppercase">
          {languageState.data.shipping||"Shipping"} 
          </label>
          <select className="block p-2 text-gray-600 w-full text-sm">
            <option> ₹ 60.00</option>
          </select>
        </div>
        {/* <div className="py-10">
          <label
            htmlFor="promo"
            className=" inline-block mb-3 text-sm uppercase"
          >
            Promo Code
          </label>
          <input
            type="text"
            id="promo"
            placeholder="Enter your code"
            className="p-2 text-sm w-full"
          />
        </div>
        <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
          Apply
        </button> */}
        <div className="border-t mt-8">
          <div className="flex  justify-between py-6 text-sm uppercase">
            <span>{languageState.data.total_cost||" Total cost"}</span>
            <span>
              <i className="fas fa-rupee-sign"></i>&nbsp;{final + 60}
            </span>
          </div>
         <a href="#address"> <button className="bg-blue-500  hover:bg-gray-600 py-3 text-sm text-white uppercase w-full">
         {languageState.data.checkout||"Checkout"} 
          </button></a>
        </div>
      </div>
      <Address/>
    </>
  );
};
