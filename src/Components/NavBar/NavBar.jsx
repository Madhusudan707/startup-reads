import { Logo } from "../Reusable/";
// import { useLogin } from "../../contexts";
// import { useUser, useCountWish, useCountItems } from "../../hooks";
import { Link } from "react-router-dom";
import { HOME } from "../../routing/paths";
export const NavBar = () => {
  return (
    <div className="fixed top-0 z-10 w-full flex   text-2xl text-white items-center   lg:px-20 bg-blue-brand py-2 shadow px-5">
      <Link to={HOME}>
        <Logo nameClass="rounded-full w-10 lg:h-16 lg:w-16 border shadow-md self-start justify-start" />
      </Link>

      <div className="px-10">Digitally Course</div>

      {/* <div>
        {login ? (
          <Link to={PROFILE} className="mr-5">
            <i className="fas fa-user-circle text-3xl"></i>
          </Link>
        ) : (
          ""
        )}
        {login ? (
          <a href="#!" onClick={logout} className="cursor-pointer">
            <i className="fas fa-sign-out-alt text-3xl"></i>
          </a>
        ) : (
          "Login"
        )}
      </div> */}
    </div>
  );
};
