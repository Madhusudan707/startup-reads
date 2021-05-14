import { Button, Heading, Close } from "..";
import { useUser } from "../../../hooks";
import {useLanguage} from '../../../contexts'
import "./modal.css";

export const Join = () => {
  const {languageState} = useLanguage()
  const {
    createUser,
    setName,
    setEmail,
    setPassword,
    setCpassword,
    errorMsg,
  } = useUser();

  return (
    <div id="join" className="modal">
      <div className="modal-content flex flex-col items-center w-full relative ">
        <Close nameClass="text-white hover:text-red-500 text-3xl" />
        <form
          onSubmit={createUser}
          className="lg:w-2/5  border flex flex-col lg:h-96 bg-blue-600  justify-center lg:items-center"
        >
          <Heading
            text={languageState.data.join_startup_reads||"Join StartUp-Reads"}
            nameClass="text-center text-3xl lg:text-4xl text-white mb-5 pt-5 "
          />
          <div className="flex flex-row flex-wrap items-center justify-center">
            <input
              className="shadow appearance-none w-72   rounded  py-6 px-3 mb-4  lg:mr-4 text-gray-700"
              type="text"
              placeholder={languageState.data.enter_name||"Enter Name"}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <input
              className="shadow appearance-none  w-72   rounded   py-6 px-3 mb-4  text-gray-700"
              type="text"
              placeholder={languageState.data.enter_email||"Enter Email"}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              className="shadow appearance-none w-72  rounded  py-6 px-3 mb-4 lg:mr-4 text-gray-700"
              type="password"
              placeholder={languageState.data.enter_password||"Enter Password"}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              className="shadow appearance-none w-72  rounded  py-6 px-3 mb-4 text-gray-700"
              type="password"
              placeholder={languageState.data.confirm_password||"Confirm Password"}
              onChange={(e) => {
                setCpassword(e.target.value);
              }}
            />
          </div>

          <p className="text-red-500 text-center">{errorMsg}</p>
          <div className="flex items-center justify-center p-2 lg:py-5">
            <Button
              nameClass="bg-blue-500 p-2  w-72 text-2xl mb-5 text-white rounded-lg hover:bg-gray-600"
              text={languageState.data.join_now||"JOIN NOW"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
