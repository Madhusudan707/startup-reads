import React,{useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import { HOME, WISHLIST, CART, CHECKOUT } from '../../../config/routing/paths'
import {useWishList} from '../../../contexts/wishlist'
import  {useCart} from '../../../contexts/cart'
import './sidenav.css'
const Sidenav = () => {
    const {wishListState} = useWishList()
    const {cartState} = useCart()
  
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
        <div id="sidebarMenu" className='sidenav'>
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
              <b>{totalItemsInWish > 0 ? `${wishListState.wishes.length}` : ""}</b>
            </sup>
          </Link>
        </li>
        <li>
          {" "}
          <Link to={CART}>
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>

            <sup style={{ fontSize: "1rem" }}>
              <b>{totalItemsInCart > 0 ? `${cartState.cartItem.length}` : ""}</b>
            </sup>
          </Link>
        </li>
        <li>
          {" "}
          <Link to={CHECKOUT}>CHECKOUT</Link>
        </li>
            </ul>
        </div>
    )
}

export default Sidenav
