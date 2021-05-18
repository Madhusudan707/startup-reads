import { Button } from "./";
import {
  useWishListHandler,
  useCartHandler,
  useProductDetails,
} from "../../hooks";
import { CART } from "../../routing/paths";
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts";

export const Card = ({
  imageURL,
  bookTitle,
  price,
  wish,
  isbn,
  _id,
  isHide,
  product,
}) => {
  const { wishListHandler,wishLoading } = useWishListHandler();
  const { languageState } = useLanguage();
  const { cartHandler, itemLoading } = useCartHandler();
  const { productDetailsHandler } = useProductDetails();

  return (
    <>
      <div className="card w-full lg:w-96 border p-2  flex flex-row flex-nowrap  justify-center items-center mb-5 lg:m-5 shadow-sm hover:shadow-md">
        <div className="card-content w:72 lg:w-96 flex flex-col rounded justify-center items-center ">
          <img
            src={imageURL}
            alt={bookTitle}
            className=" cursor-pointer w-72 lg:w-96 lg:h-96"
            onClick={() => {
              productDetailsHandler(_id);
            }}
          />

          <div className="grid grid-cols-2  p-2 w-full relative">
            <span className="justify-self-start">₹{price}</span>
            {!isHide && (
              <>
                <Button
                  nameClass={`fas fa-heart text-3xl justify-self-end hover:text-red-500 focus:outline-none ${wishLoading ? "hidden" : null} ${
                    wish ? "text-red-500" : ""
                  }`}
                  btnFunction={() => {
                    wishListHandler(wish, isbn, _id);
                  }}
                />
               
              </>
            )}
             <i
                  className={`absolute top-2 right-2   fas fa-sync fa-spin fa-2x ${
                    wishLoading ? null : "hidden"
                  }`}
                ></i>
          </div>

          {product.cart ? (
            <Link to={CART} className="w-full">
              <Button
                nameClass="bg-gray-600 text-white p-4 rounded-md hover:bg-blue-400 w-full"
                text={languageState.data.go_to_cart || "GO TO CART"}
              />
            </Link>
          ) : (
            <>
              <Button
                nameClass={`bg-blue-400 text-white p-4 rounded-md hover:bg-gray-600 w-full ${
                  itemLoading ? "hidden" : null
                }`}
                text={languageState.data.add_to_cart || "ADD TO CART"}
                btnFunction={() => cartHandler(product)}
              />
              <i
                className={`fas fa-sync fa-spin ${
                  itemLoading ? null : "hidden"
                }`}
              ></i>
            </>
          )}
        </div>
      </div>
    </>
  );
};
