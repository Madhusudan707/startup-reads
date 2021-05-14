import { LANDING,HOME,WISHLIST,CART,PROFILE,PRODUCT_PAGE} from "./paths";
import {LandingPage,HomePage,WishlistPage,CartPage,ProfilePage,ProductPage} from '../pages/index'

const LANDING_ONE = {
  component: LandingPage,
  path: LANDING,
};

const HOME_TWO = {
  component: HomePage,
  path: HOME,
};

const WISHLIST_THREE = {
  component: WishlistPage,
  path: WISHLIST,
};
const CART_FOUR = {
  component: CartPage,
  path:CART,
};
const PROFILE_FIVE = {
  component: ProfilePage,
  path:PROFILE,
};

const PRODUCT_PAGE_SIX = {
  component:ProductPage,
  path:PRODUCT_PAGE
}


const routes = [LANDING_ONE,HOME_TWO,WISHLIST_THREE,CART_FOUR,PROFILE_FIVE,PRODUCT_PAGE_SIX];

export default routes;
