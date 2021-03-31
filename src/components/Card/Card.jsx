import React from "react";
import Button from "../../components/Button/Button";
import { useProducts, useCart, useWishList } from "../../contexts/contexts";
import "./card.css";

const Card = ({ products }) => {
  const { itemsInCart, setItemsInCart } = useCart();
  const { setItemsInWishList } = useWishList();
  const { productList, setProductList } = useProducts();

  const cartHandler = (product) => {
    if (itemsInCart.length) {
      let flag = true;
      let newArr = itemsInCart.map((item) => {
        if (item.isbn === product.isbn) {
          flag = false;
          return { ...item, qty: item.qty + 1 };
        }
        return item;
      });
      if (!flag) {
        setItemsInCart(newArr);
      }
      if (flag) {
        setItemsInCart((itemsInCart) => [
          ...itemsInCart,
          { ...product, qty: 1 },
        ]);
      }
    } else {
      setItemsInCart((itemsInCart) => [...itemsInCart, { ...product, qty: 1 }]);
    }
  };

  const wishListHandler = (product) => {
    let newArr = productList.map((item) => {
      if (item.isbn === product.isbn) {
        return { ...item, wish: !product.wish };
      }
      return item;
    });
    setProductList(newArr);

    let newArr2 = newArr.filter((item) => item.wish===true ? item : null)
    setItemsInWishList(newArr2);
  };

  return (
    <>
      {products.map((product) => {
        return (
          <div className="card card-main" key={product.isbn}>
            <div className="card-title">
              <h4>
                {product.title}
              </h4>
            </div>
            <div className="card-img">
              <img src={product.image} alt="product_img" loading="lazy" />
            </div>
            <div className="card-content">
              <span> ₹{product.price}</span>
              <img
                src={product.wish ? "/heart_red.svg" : "/heart.svg"}
                alt="heart"
                onClick={() => {
                  wishListHandler(product);
                }}
                className="wishlist_icon"
               
              />
              <Button
                btnClass="btn btn-primary"
                text="ADD TO CART"
                btnFunc={() => {
                  cartHandler(product);
                }}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
