import React from "react";
import { Link } from "react-router-dom";
import { WISHLIST, CART } from "../../../routing/paths";
import { useCountItems, useCountWish } from "../../../Hooks/Hooks";
import "./navbar.css";
const Navbar = () => {
  const { totalItemsInWish } = useCountWish();
  const { totalItemsInCart } = useCountItems();

  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to={WISHLIST}>
            <i className="fa fa-heart" aria-hidden="true"></i>
            <sup style={{ fontSize: "1rem" }}>
              <b>{totalItemsInWish > 0 ? `${totalItemsInWish}` : ""}</b>
            </sup>
          </Link>
        </li>
        <li>
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
