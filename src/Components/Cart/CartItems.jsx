import { Counter, Button,Loader } from "../Reusable";
import { useCart,useLanguage } from "../../contexts";
import { useRemoveItemFromCart } from "../../hooks";
export const CartItems = () => {
  const { cartState } = useCart();
  const { removeItemFromCart,deleteItem } = useRemoveItemFromCart();
  const {languageState} = useLanguage()
  return (
    <>
      {cartState.cartItem.map((product) => {
        return (
          
          <div
            key={product._id}
            className="flex items-center justify-center w-full hover:bg-gray-100 -mx-8 px-6 py-5 mt-10"
          >
            <div className="flex w-2/5 ">
              <div className="w-20">
                <img className="h-24" src={product.image} alt="" />
              </div>
              <div className="flex flex-col  justify-center ml-4 flex-grow">
                <span className="font-bold text-sm ">{product.title}</span>
              </div>
            </div>
            <div className="flex  w-1/5">
              <Counter itemCount={product.qty} pid={product._id} />
            </div>
            <span className=" w-1/5  text-2xl">
              <i className="fas fa-rupee-sign"></i>&nbsp;{product.price}
            </span>
            <span className=" w-1/5  text-2xl">
              <i className="fas fa-rupee-sign"></i>&nbsp;
              {parseInt(product.price) * parseInt(product.qty)}
            </span>
          
            <Button
              nameClass={`bg-red-500 text-white p-2 rounded-md w-24`}
              text={languageState.data.remove||"REMOVE"}
              btnFunction={()=>{removeItemFromCart(product._id)}}
            />
            <Loader toggle={deleteItem?"opacity-50":"opacity-0"}/>
           
            
          </div>
        );
      })}
    </>
  );
};
