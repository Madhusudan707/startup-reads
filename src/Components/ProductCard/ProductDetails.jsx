import { Button } from "../Reusable";
import { useLibrary } from "../../contexts";
import { useCartHandler } from "../../hooks";
import { Link } from "react-router-dom";
import { CART } from "../../routing/paths";
export const ProductDetails = () => {
  const { product } = useLibrary();
  const { cartHandler } = useCartHandler();
  return (
    <div className="flex flex-row justify-center items-center lg:mt-52 mt-52 p-4   ">
      <div className="shadow-lg  lg:p-5 lg:m-5 lg:w-3/6 flex flex-row   lg:border-b-4 border-gray-600">
        <div className="2/4">
          <img
            className="lg:w-72 lg:h-80 w-72 h-72 p-1 shadow-lg border-2"
            src={product.image}
            alt={product.title}
          />
          {product.cart ? (
            <Link to={CART} className=" ">
              <Button
                nameClass="bg-gray-600 text-white p-4  rounded-md hover:bg-red-500 lg:w-full w-12"
                text="GO TO CART"
                btnFunction={(e) => cartHandler({ e, product })}
              />
            </Link>
          ) : (
            <Button
              nameClass="bg-blue-500 text-white p-4 rounded-md hover:bg-red-500 w-full"
              text="ADD TO CART"
              btnFunction={(e) => cartHandler({ e, product })}
            />
          )}
        </div>
        <div className="w-4/4 px-4">
          <span className='lg:text-2xl text-sm '>{product.title}({product.author})</span>
         
          <ul className='lg:text-2xl py-5 text-sm text-gray-600 '>
            <li>Language: English</li>
            <li>Binding: Paperback</li>
            <li>Publisher: {product.publisher}</li>
            <li>Genre: {product.genre}</li>
            <li>ISBN: {product.isbn}</li>
            <li>Pages: {product.pages}</li>
          </ul>
          <div className='flex flex-row'>
            <span className='border p-2 bg-green-500 text-white font-bold rounded-md mr-2'>Best Value</span>
            <span className='border p-2 bg-red-500 text-white font-bold rounded-md mr-2'><i className="fas fa-rupee-sign"></i>{product.price}</span>
            <span className='border p-2 bg-green-500 text-white font-bold rounded-md'>{product.ratings}<sup ><i className="fas fa-star"></i></sup>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
