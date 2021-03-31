import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HOME, WISHLIST, CART, CHECKOUT } from "../../config/routing/paths";
import { useCart, useWishList } from "../../contexts/contexts";
import './navbar.css'
import Brand from "../Brand/Brand";
const Navbar = () => {
  const { itemsInCart } = useCart();
  const { itemsInWishList } = useWishList();
  const [totalItemsInCart, setTotalItemsInCart] = useState(0);
  const [totalItemsInWish, setTotalItemsInWish] = useState(0);
  useEffect(() => {
    totalItems();
  }, [itemsInCart]);

  useEffect(() => {
    totalWish();
  }, [itemsInWishList]);

  const totalItems = () => {
    let sumQty = itemsInCart.reduce(function (acc, curr) {
      return acc + curr.qty;
    }, 0);
    setTotalItemsInCart(sumQty);
  };

  const totalWish = () => {
    let sumWish = itemsInWishList.reduce(function (acc, curr) {
      return curr.wish === true ? acc + curr.wish : 0;
    }, 0);
    setTotalItemsInWish(sumWish);
  };

  return (
    <div className="navbar nav-wrapper">
      <a href="/" className="brand-logo">
        <Brand />
      </a>
      <ul className="nav-ul">
        <li>
          {" "}
          <Link to={HOME}>HOME</Link>
        </li>
        <li>
          {" "}
          <Link to={WISHLIST}>
            <i className="fa fa-heart" aria-hidden="true"></i>
            <sup style={{ fontSize: "1rem" }}>
              <b>{totalItemsInWish > 0 ? `${totalItemsInWish}` : ""}</b>
            </sup>
          </Link>
        </li>
        <li>
          {" "}
          <Link to={CART}>
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>

            <sup style={{ fontSize: "1rem" }}>
              <b>{totalItemsInCart > 0 ? `${totalItemsInCart}` : ""}</b>
            </sup>
          </Link>
        </li>
        <li>
          {" "}
          <Link to={CHECKOUT}>CHECKOUT</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
