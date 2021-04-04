import React from "react";
import Button from "../Button/Button";
import { useCart, useWishList, useProducts } from "../../contexts/contexts";

import "./card.css";

const Card = ({ productsList }) => {
  const { cartState, CartDispatch } = useCart();
  const { WishListDispatch } = useWishList();
  const { productsState, ProductsDispatch } = useProducts();

  /* 1 Wishlist Handler */
  const wishListHandler = (product) => {
    let newArr = productsState.data.map((item) => {
      if (item.isbn === product.isbn) {
        return { ...item, wish: !product.wish };
      }
      return item;
    });
    ProductsDispatch({ type: "OnSuccess", payload: newArr });

    let newArr2 = newArr.filter((item) => (item.wish === true ? item : null));
    WishListDispatch({ type: "AddWish", payload: { product: newArr2 } });
  };

  /* 2 Cart Handler */

  const cartHandler = (product) => {
    if (cartState.cartItem.length) {
      let flag = true;
      let newArr = cartState.cartItem.map((item) => {
        if (item.isbn === product.isbn) {
          flag = false;
          return { ...item, qty: item.qty + 1, cart: !product.cart };
        }
        return item;
      });

      if (flag) {
        CartDispatch({
          type: "AddToCart",
          payload: { ...product, qty: 1, cart: !product.cart },
        });
      } else {
        CartDispatch({
          type: "AddToCartRepeated",
          payload: { product: newArr },
        });
      }
    } else {
      CartDispatch({
        type: "AddToCart",
        payload: { ...product, qty: 1, cart: !product.cart },
      });
    }
  };

  return (
    <div className="card-main">
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
                onClick={() => wishListHandler(product)}
                className="wishlist_icon"
              />
              <Button
                btnClass="btn btn-primary"
                text="ADD TO CART"
                btnFunc={() => cartHandler(product)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
