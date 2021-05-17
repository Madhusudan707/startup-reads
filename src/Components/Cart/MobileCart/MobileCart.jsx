import {Counter,Button} from '../../Reusable'
import { useCart } from "../../../contexts";
import { useRemoveItemFromCart } from "../../../hooks";
import {Checkout} from '../index'
import '../cart.css'
export const MobileCart = () => {
    const { cartState,totalItemsInCart } = useCart();
    const { removeItemFromCart } = useRemoveItemFromCart();
    return (
      <>
        <div className='flex flex-col items-center justify-between w-full mobile-cart'>
            <div className='flex flex-row justify-between border w-full p-2 fixed bg-white'>
                <h1>Shopping Cart</h1>
                <h1>{totalItemsInCart} Items</h1>
            </div>
            <div className='flex flex-row items-center border w-full justify-evenly text-sm bg-white fixed top-28 left-0 text-center '>
                <span className='w-2/3 text-center'>ITEMS</span>
                <span className='w-1/3 text-center'>QTY</span>
                <span className='w-2/3 text-center'> PRICE</span>
                <span className='w-1/3 text-center'>TOTAL</span>
                <span className='w-1/3 text-center invisible'>REMOVE</span>
            </div>
            <div className='flex flex-col items-center mt-16 '>
            {cartState.cartItem.map((product) => {
                return (
                    <div
                    key={product._id}
                    className="flex items-center w-full hover:bg-gray-100 mx-10 px-6 py-5 shadow-sm "
                  >
                    <div className="flex w-1/5 ">
                      <div className="w-20">
                        <img className="h-24" src={product.image} alt="" />
                      </div>
                      {/* <div className="flex flex-col  justify-center ml-4 flex-grow">
                        <span className="font-bold text-sm ">{product.title}</span>
                      </div> */}
                    </div>
                    <div className="flex  justify-center w-3/5">
                      <Counter itemCount={product.qty} pid={product._id} />
                    </div>
                    <span className="text-center w-3/5  text-sm">
                      <i className="fas fa-rupee-sign"></i>&nbsp;{product.price}
                    </span>
                    <span className="text-center w-4/5  text-sm">
                      <i className="fas fa-rupee-sign"></i>&nbsp;
                      {parseInt(product.price) * parseInt(product.qty)}
                    </span>
                  
                    <Button
                      nameClass="bg-red-500 text-white p-2 rounded-md fas fa-trash-alt  "
                     
                      btnFunction={()=>{removeItemFromCart(product._id)}}
                    />

                  </div>
                )

        })}
      
        <Checkout/>
        
            </div>
        </div>
       
        </>
    )
}
