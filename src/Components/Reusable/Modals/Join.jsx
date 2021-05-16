import { useEffect } from "react";
import { Button, Heading, Close, Toast } from "..";
import { useUser } from "../../../hooks";
import { useLanguage } from "../../../contexts";
import "./modal.css";

export const Join = () => {
  const { languageState } = useLanguage();
  const {
    createUser,
    setName,
    setEmail,
    setPassword,
    setCpassword,
    errorMsg,
    setErrorMsg,
  } = useUser();
  useEffect(() => {
    (async () => {
      if (errorMsg) {
        setTimeout(() => {
          setErrorMsg("");
        }, 2000);
      }
    })();
  }, [errorMsg]);

  return (
    <div
      id="join"
      className="modal w-full flex flex-col items-center justify-center z-10 "
    >
      <div className=" flex flex-col items-center justify-center border w-full p-16 bg-blue-400 ">
        {errorMsg ? <Toast msg={errorMsg} bgColor="#EF4444" /> : null}
        <Close nameClass="text-white hover:text-red-500 text-3xl" />

        <Heading
          text={languageState.data.join_startup_reads || "Join StartUp-Reads"}
          nameClass="text-center text-3xl lg:text-4xl text-white mb-5 pt-5 "
        />

        <div className="flex flex-col w-full flex-wrap">
          <div className="flex flex-row w-full flex-wrap">
            <div className="flex flex-col w-full">
              <label className="px-2">
                {languageState.data.enter_name || "Enter Name"}
                <sup className="text-red-500 text-lg">*</sup>{" "}
              </label>
              <input
                type="text"
                className=" p-5 m-2"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex flex-row w-full flex-wrap">
            <div className="flex flex-col w-full">
              <label className="px-2">
                {" "}
                {languageState.data.enter_email || "Enter Email"}{" "}
              </label>
              <input
                type="text"
                className=" p-5 m-2"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex flex-row w-full flex-wrap">
            <div className="flex flex-col">
              <label className="px-2 ">
                {languageState.data.enter_password || "Enter Password"}{" "}
                <sup className="text-red-500 text-lg">*</sup>{" "}
              </label>
              <input
                type="password"
                className="w-72 p-5 m-2"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col">
              <label className="px-2">
                {languageState.data.confirm_password || "Confirm Password"}
                <sup className="text-red-500 text-lg">*</sup>{" "}
              </label>
              <input
                type="password"
                className="w-72 p-5 m-2"
                onChange={(e) => {
                  setCpassword(e.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <Button
          text={languageState.data.join_now || "JOIN NOW"}
          nameClass="bg-blue-400 text-white p-4 mt-4 shadow-md hover:bg-gray-600"
          btnFunction={createUser}
        />
      </div>
    </div>
  );
};
