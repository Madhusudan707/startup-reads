import React from "react";
import { Link } from "react-router-dom";
import { HOME, WISHLIST, CART, CHECKOUT } from "../../../routing/paths";
import { useCountItems, useCountWish } from "../../../Hooks/Hooks";
import "./sidenav.css";
const Sidenav = () => {
  const { totalItemsInWish } = useCountWish();
  const { totalItemsInCart } = useCountItems();

  return (
    <div id="sidebarMenu" className="sidenav">
      <ul className="sidebarMenuInner">
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

export default Sidenav;
