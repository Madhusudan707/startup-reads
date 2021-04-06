import Toast from "../Toast/Toast";
import Button from "../Button/Button";
import { useWishListHandler, useCartHandler } from "../../Hooks/Hooks";

import "./card.css";

const Card = ({ productsList }) => {
  const {wishListHandler,showToast,toastMsg,toastColor} = useWishListHandler();
  const { cartHandler,showToast2,toastMsg2,toastColor2} = useCartHandler();

  return (
    <div className="card-main">
      {showToast ? <Toast msg={toastMsg} msgDel={toastColor} /> : null}
      {showToast2 ? <Toast msg={toastMsg2} msgDel={toastColor2} /> : null}

      {productsList.map((product) => {
        return (
          <div className="card" key={product.isbn}>
            <div className="card-title">
              <h4>{product.title}</h4>
            </div>
            <div className="card-img">
              <img src={product.image} alt="product_img" loading="lazy" />
            </div>
            <div className="card-content">
              <span> ₹{product.price}</span>
              <img
                src={product.wish ? "/heart_red.svg" : "/heart.svg"}
                alt="heart"
                onClick={() =>
                  wishListHandler({
                    product,
                    toastMsgParam:
                      product.wish === true
                        ? "Your Wish Has Been Removed"
                        : "Your Wish Has Been Added",
                  })
                }
                className="wishlist_icon"
              />
              <Button
                id={product.isbn}
                btnClass="btn btn-primary"
                text={"ADD TO CART"}
                btnFunc={(e) => cartHandler({e, product})}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
