import { Button, Heading, Close, Otp, Toast } from "..";
import { useUser } from "../../../hooks";
import { useLanguage } from "../../../contexts";
import "./modal.css";

export const Login = () => {
  const { languageState } = useLanguage();

  const {
    userLogin,
    setUsername,
    setPassword,
    facebookSignInPopup,
    googleSignInPopup,
    errorMsg,
  } = useUser();
  return (
    <div
      id="login"
      className="modal w-full flex flex-col items-center justify-center z-10 bg-blue-brand "
    >
      <div className=" flex flex-col items-center justify-center  w-6/6 p-16 bg-blue-brand h-screen w-full ">
        {errorMsg ? <Toast msg={errorMsg} bgColor="#EF4444" /> : null}
        <Close nameClass="text-white hover:text-red-500 text-3xl" />

        <Heading
          text={languageState.data.login || "Login"}
          nameClass="text-center text-3xl lg:text-4xl text-white mb-5 pt-5 "
        />

        <div className="flex flex-col w-full flex-wrap ">
          <div className="flex flex-row w-full flex-wrap">
            <div className="flex flex-col w-full my-2">
              {/* <label className="">
                {languageState.data.enter_username_or_email ||
                  "Enter UserName or Email"}
                <sup className="text-red-500 text-lg">*</sup>{" "}
              </label> */}
              <input
                type="text"
                className="px-5 py-2"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                placeholder="Enter UserName or Email"
              />
            </div>
          </div>
          <div className="flex flex-row w-full flex-wrap">
            <div className="flex flex-col w-full  my-2">
              {/* <label className="">
                {" "}
                {languageState.data.enter_password || "Enter Password"}{" "}
              </label> */}
              <input
                type="password"
                className=" px-5 py-2"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Enter Password"
              />
            </div>
          </div>
        </div>

        <Button
          text={languageState.data.login || "LOGIN"}
          nameClass="bg-white text-blue-400  font-bold rounded-lg  py-2 mt-4 w-full shadow-md hover:bg-gray-600"
          btnFunction={userLogin}
        />

        <div className="social-login w-full text-center  p-2 hidden">
          <Heading
            text={languageState.data.or_login_with || "OR Login With"}
            nameClass="text-white self-center w-full  text-2xl lg:text-2xl "
          />
          <span className="text-5xl text-white flex justify-around mt-5 ">
            <a href="#otp">
              {" "}
              <i
                className="fas fa-mobile-alt self-end hover:text-gray-600"
                title={languageState.data.login_with_otp || "Login With OTP"}
              ></i>
            </a>
            <Button
              nameClass="fab fa-facebook-square hover:text-gray-600"
              btnFunction={facebookSignInPopup}
            />
            <Button
              nameClass="fab fa-google hover:text-gray-600"
              btnFunction={googleSignInPopup}
            />
          </span>
        </div>
      </div>
    </div>

    // <Otp/>
    // </>
  );
};
