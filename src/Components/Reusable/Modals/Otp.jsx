import { Button, Heading, Close } from "..";
import { useUser } from "../../../hooks";
// import firebase from "firebase/app"
import "firebase/auth"
// import {useAuth} from '../../../hooks/useAuth'
import "./modal.css";

export const Otp = () => {
  const {setOtp,getOtp,otpLogin,errorMsg,setMobile} = useUser()
 
//   window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      
//     "recaptcha-container",
//     {
//       size: "invisible",
//       callback: function(response) {
//         // getOtp()
//       }
//     }
//   );

// window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
  
  return (
    <div id="otp" className="modal">
      <div className="modal-content flex flex-col items-center w-full relative   ">
        <Close nameClass="text-white hover:text-red-500 text-3xl" />
        <div className="lg:w-2/5 border w-96  flex flex-col lg:h-3/6  justify-center lg:items-center">
          <div className="flex flex-col items-center justify-center p-2 lg:py-5">
            <div
             
              className="lg:w-2/5   flex flex-col lg:h-3/6  justify-center lg:items-center"
            >
              <Heading
                text="Login With OTP"
                nameClass="text-center text-3xl lg:text-4xl text-white mb-5 pt-5 "
              />
              <div className="flex flex-row flex-wrap items-center justify-center">
                <input
                  className="shadow appearance-none w-72   rounded  py-6 px-3    text-gray-700"
                  type="tel"
                  placeholder="Enter Mobile No"
                  onChange={(e) => {
                    setMobile(e.target.value);
                  }}
                />
                 <Button
                nameClass="bg-blue-500 p-2 mt-2  w-20 self-center text mb-5 text-white self-end rounded-lg"
                text="Get OTP" btnFunction={getOtp}
              />
                {/* <a href="#!" onClick={getOtp} className='text-white text-right w-full p-2 font-bold'>Get OTP</a> */}

                <input
                  className="shadow appearance-none  w-72   rounded   py-6 px-3 mb-4  text-gray-700"
                  type="text"
                  placeholder="Enter Otp"
                  onChange={(e) => {
                    setOtp(e.target.value);
                  }}
                />
              </div>

              <p className="text-red-500 text-center pb-5">{errorMsg}</p>
              <Button
                nameClass="bg-blue-500 p-2  w-72 self-center text-2xl mb-5 text-white rounded-lg"
                text="Login"
              />
            <div id="recaptcha-container"></div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
