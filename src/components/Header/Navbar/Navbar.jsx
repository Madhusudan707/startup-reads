import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { WISHLIST, CART} from "../../../routing/paths";
import { useWishList, useCart } from "../../../contexts/contexts";
import "./navbar.css";
const Navbar = () => {
  const { wishListState } = useWishList();
  const { cartState } = useCart();

  const [totalItemsInCart, setTotalItemsInCart] = useState(0);
  const [totalItemsInWish, setTotalItemsInWish] = useState(0);
  useEffect(() => {
    const totalItems = () => {
      let sumQty = cartState.cartItem.reduce(function (acc, curr) {
        return acc + curr.qty;
      }, 0);
      setTotalItemsInCart(sumQty);
    };
    totalItems();
  }, [cartState]);

  useEffect(() => {
    const totalWish = () => {
      let sumWish = wishListState.wishes.reduce(function (acc, curr) {
        return curr.wish === true ? acc + curr.wish : 0;
      }, 0);
      setTotalItemsInWish(sumWish);
    };
    totalWish();
  }, [wishListState]);

  return (
    <div className="navbar">
      <ul>
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
      </ul>
    </div>
  );
};

export default Navbar;
