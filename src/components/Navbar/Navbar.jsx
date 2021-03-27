import React from 'react'
import { Link } from "react-router-dom"
import { HOME, WISHLIST, CART,CHECKOUT} from "../../config/routing/paths"
import Brand from "../Brand/Brand"
// import styles from "./navbar.module.css"
const Navbar = () => {
    return (
        <div className="navbar nav-wrapper">
             <a href="/" className="brand-logo"><Brand/></a>
            <ul className="nav-ul">
                <li> <Link to={HOME}>HOME</Link></li>
                <li> <Link to={WISHLIST}>WISHLIST</Link></li>
                <li> <Link to={CART}>CART</Link></li>
                <li> <Link to={CHECKOUT}>CHECKOUT</Link></li>
            </ul>
        </div>
    )
}

export default Navbar
