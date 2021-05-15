import { Button, Heading, Close,Otp,Toast } from "..";
import { useUser } from "../../../hooks";
import {useLanguage} from '../../../contexts'
import "./modal.css";

export const Login = () => {
  const {languageState} = useLanguage()

  const { userLogin, setUsername, setPassword,facebookSignInPopup,googleSignInPopup, errorMsg } = useUser();
  return (
    <>
      <div  id="login"  className="modal w-full flex flex-col items-center justify-center z-10 ">
    
    <div className=" flex flex-col items-center justify-center border w-full p-16 bg-yellow-400 ">
    {errorMsg ?<Toast msg={errorMsg} bgColor="#EF4444"/>:null}
      <Close nameClass="text-white hover:text-red-500 text-3xl" />
   
         
      <Heading
         text={languageState.data.login||"Login"}
        nameClass="text-center text-3xl lg:text-4xl text-white mb-5 pt-5 "
      />
    
      <div className="flex flex-col w-full flex-wrap">
        <div className="flex flex-row w-full flex-wrap">
          <div className='flex flex-col w-full'>
            <label className='px-2'>{languageState.data.enter_username_or_email||"Enter UserName or Email"}<sup className='text-red-500 text-lg'>*</sup> </label>
            <input type="text"   className=" p-5 m-2"  
            onChange={(e) => {setUsername(e.target.value)}} />

          </div>
         
        </div>
        <div className="flex flex-row w-full flex-wrap">
        <div className='flex flex-col w-full'>
            <label className='px-2'> {languageState.data.enter_password||"Enter Password"} </label>
            <input type="password"    className=" p-5 m-2"  onChange={(e) => {setPassword(e.target.value)}}/>
          </div>
         

        </div>
      
      </div>
      {/* <p className="text-white font-bold text-center bg-red-700 p-2 w-96 place-self-center">{errorMsg}</p> */}
     
    <Button
        text={languageState.data.login||"LOGIN"}
        nameClass="bg-blue-500 text-white p-4 mt-4 shadow-md hover:bg-gray-600"
        btnFunction={userLogin}
      />
      <div className="social-login w-full text-center  p-2">
                <Heading
                  text={languageState.data.or_login_with||"OR Login With"}
                  nameClass="text-white self-center w-full  text-2xl lg:text-2xl "
                />
                <span className="text-5xl text-white flex justify-around mt-5 ">
                 <a href='#otp'> <i
                    className="fas fa-mobile-alt self-end hover:text-gray-600"
                    title={languageState.data.login_with_otp||"Login With OTP"}
                  ></i></a>
                  <Button nameClass="fab fa-facebook-square hover:text-gray-600" btnFunction={facebookSignInPopup}/>
                  <Button nameClass="fab fa-google hover:text-gray-600" btnFunction={googleSignInPopup}/>
                
                </span>
              </div>
    </div>
    
  </div>
    {/* <div id="login" className="modal">
      <div className="modal-content flex flex-col items-center w-full relative    ">
        <Close nameClass="text-white hover:text-red-500 text-3xl" />
        <div className="lg:w-2/5 border w-96  flex flex-col lg:h-3/6  justify-center lg:items-center bg-yellow-400">
          <div className="flex flex-col items-center justify-center p-2 lg:py-5 ">
            <form
              onSubmit={userLogin}
              className="lg:w-2/5   flex flex-col lg:h-3/6  justify-center lg:items-center"
            >
              <Heading
                text={languageState.data.login||"Login"}
                nameClass="text-center text-3xl lg:text-4xl text-white mb-5 pt-5 "
              />
              <div className="flex flex-row flex-wrap items-center justify-center ">
                <input
                  className="shadow appearance-none w-72   rounded  py-6 px-3 mb-4   text-gray-700"
                  type="email"
                  placeholder={languageState.data.enter_username_or_email||"Enter UserName or Email"}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />

                <input
                  className="shadow appearance-none  w-72   rounded   py-6 px-3 mb-4  text-gray-700"
                  type="password"
                  placeholder={languageState.data.enter_password||"Enter Password"}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>

              <p className="text-red-500 text-center pb-5">{errorMsg}</p>
              <Button
                nameClass="bg-blue-500 p-2  w-72 self-center text-2xl mb-5 text-white rounded-lg hover:bg-gray-600"
                text={languageState.data.login||"Login"}
              />
              <div className="social-login w-full text-center  p-2">
                <Heading
                  text={languageState.data.or_login_with||"OR Login With"}
                  nameClass="text-white self-center w-full  text-2xl lg:text-2xl "
                />
                <span className="text-5xl text-white flex justify-around mt-5 ">
                 <a href='#otp'> <i
                    className="fas fa-mobile-alt self-end hover:text-gray-600"
                    title={languageState.data.login_with_otp||"Login With OTP"}
                  ></i></a>
                  <Button nameClass="fab fa-facebook-square hover:text-gray-600" btnFunction={facebookSignInPopup}/>
                  <Button nameClass="fab fa-google hover:text-gray-600" btnFunction={googleSignInPopup}/>
                
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div> */}
    <Otp/>
    </>
  );
};
