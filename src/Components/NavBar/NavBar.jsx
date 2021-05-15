import { Logo,SelectLanguage } from "../Reusable/";
import { useLogin } from "../../contexts";
import { useUser, useCountWish, useCountItems,useLanguageHandler } from "../../hooks";
import { Link } from "react-router-dom";
import { HOME, WISHLIST, CART, PROFILE } from "../../routing/paths";
export const NavBar = () => {
  const { login} = useLogin();
  const { logout } = useUser();
  const { totalItemsInWish } = useCountWish();
  const { totalItemsInCart } = useCountItems();
  const {languageHandler} = useLanguageHandler()

  return (
    <div className="fixed top-0 z-10 w-full flex flex-row text-2xl text-white items-center justify-center  lg:justify-end bg-yellow-400 py-5 shadow">
      <div className="flex flex-row  w-16  lg:justify-start  lg:w-full lg:px-5 ">
        <Logo nameClass="rounded-full w-12 h-12 lg:h-16 lg:w-16 border shadow-md self-start justify-start" />
      </div>
      <div className="flex flex-row  w-72    justify-evenly lg:w-full ">
        <Link to={HOME}> <i className="fas fa-home text-3xl"></i> </Link>
        <Link to={WISHLIST}>
          <i className="fas fa-heart text-3xl relative">
            <span className="absolute left-4 lg:left-7 top-0 rounded-full bg-red-600 w-6 h-6 top right p-0 m-0 text-white font-mono  text-xl leading-tight text-center">
              {totalItemsInWish}
            </span>
          </i>
        </Link>
        <Link to={CART}>
          <i className="fas fa-shopping-cart text-3xl relative">
            <span className="absolute left-4 lg:left-7 top-0 rounded-full bg-red-600 w-6 h-6 top right p-0 m-0 text-white font-mono  text-xl leading-tight text-center">
              {totalItemsInCart}
            </span>
          </i>
        </Link> 
        {login ? <Link to={PROFILE}> <i className="fas fa-user-circle text-3xl"></i></Link> : ""}
        {login ? (
          <a href='#!' onClick={logout} className="cursor-pointer">
            <i className="fas fa-sign-out-alt text-3xl"></i>
          </a>
        ) : (
          "Login"
        )}
         <SelectLanguage changeFunction={(e)=>{languageHandler(e)}} selectClass="p-1"/>
      </div>
     
    </div>
  );
};
