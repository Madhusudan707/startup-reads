import { HOME, WISHLIST, CART, CHECKOUT } from "./paths";

// import Product from "../../components/Product/Product"
import Main from "../components/Main/Main";
import Wishlist from "../components/WishList/Wishlist";
import Cart from "../components/Cart/Cart";
import Checkout from "../components/Checkout/Checkout";

const PRODUCT_ONE = {
  component: Main,
  path: HOME,
};

const WISHLIST_TWO = {
  component: Wishlist,
  path: WISHLIST,
};

const CART_THREE = {
  component: Cart,
  path: CART,
};

const CHECKOUT_FOUR = {
  component: Checkout,
  path: CHECKOUT,
};

const routes = [PRODUCT_ONE, WISHLIST_TWO, CART_THREE, CHECKOUT_FOUR];

export default routes;
