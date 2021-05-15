import { useState } from "react";
import { useNavigate } from "react-router-dom";
import firebase from "firebase/app";
import axios from "axios";
import "firebase/auth";
import { useLogin } from "../contexts";
import {useAPI} from '../hooks'

export const useUser = () => {
  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const {setLogin,setName,setAuthId,name} = useLogin();
  const {api} = useAPI()

  const createUser = async (e) => {
    e.preventDefault();
    if (!name) {
      setErrorMsg("Please Enter Your Name");
    } else if (!password) {
      setErrorMsg("Please Enter Your Password");
    } else if (!cpassword) {
      setErrorMsg("Please Enter Your Confirm Password");
    } else if (password !== cpassword) {
      setErrorMsg("Password and Confirm Password did not matched");
    } else {
      try {
        const user = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);
        const authId = user.user.uid;
        if (authId) {
          const response = await axios.post(`${api.URL}${api.users.POST}`, {
            authId: user.user.uid,
            name: name,
            email: email,
            password: password,
          });
          const _id = response.data.users._id
          userAuthenticate(name,authId,_id)
        }
      } catch (error) {
        setErrorMsg(error.message);
      }
    }
  };

  const userLogin = async (e) => {
    e.preventDefault()
    if (!username) {
      setErrorMsg("Enter Your Username to login");
    } else if (!password) {
      setErrorMsg("Enter Your Password to login");
    } else {
      try {
        const user = await firebase
          .auth()
          .signInWithEmailAndPassword(username, password);
          const authId = user.user.uid;
          if(authId){
            console.log(`${api.URL}${api.users.GETBYAUTHID}${authId}`)
            const response = await axios.get(`${api.URL}${api.users.GETBYAUTHID}${authId}`)
            const name = response.data.user.name
            const _id = response.data.user._id
            userAuthenticate(name,authId,_id)
          }
          
      } catch (error) {
        setErrorMsg(error.message);
      }
    }
  };

  const getOtp = () => {
    if (!mobile) {
      setErrorMsg("Please enter valid Mobile to get OTP");
    } else {
      setErrorMsg("");
      function getPhoneNumberFromUserInput() {
        return "+918884966267";
      }
      // [START auth_phone_signin]
      const phoneNumber = getPhoneNumberFromUserInput();
      const appVerifier = window.recaptchaVerifier;
      console.log(appVerifier);
      firebase
        .auth()
        .signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          // ...
        })
        .catch((error) => {
          // Error; SMS not sent
          // ...
          console.log(error);
        });
      // [END auth_phone_signin]
    }
  };

  const otpLogin = () => {
    if (!mobile) {
      setErrorMsg("Please enter  Mobile");
    } else if (!otp) {
      setErrorMsg("Please enter OTP");
    } else {
      setErrorMsg("");
    }
  };

  const facebookSignInPopup = () => {
    const FacebookAuth = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(FacebookAuth);
  };

  const googleSignInPopup = () => {
    const GoogleAuth = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(GoogleAuth);
  };

  const userAuthenticate=async (name,authId,_id)=>{
    setErrorMsg("");
    setLogin(true)
    setName(name)
    setAuthId(authId)
    await localStorage.setItem("authId",authId)
    await localStorage.setItem("name",name)
    await localStorage.setItem("login",true)
    await localStorage.setItem("_id",_id)
    navigate("/home");
  }

  const logout = async()=>{
    setLogin(false)
    setName("")
  
   await localStorage.removeItem("authId")
   await localStorage.removeItem("name")
   await localStorage.removeItem("login")
   await localStorage.removeItem("_id")
   
    navigate("/");
  }



  return {
    createUser,
    setName,
    setEmail,
    setPassword,
    setCpassword,
    userLogin,
    setUsername,
    setMobile,
    setOtp,
    getOtp,
    otpLogin,
    facebookSignInPopup,
    googleSignInPopup,
    setAuthId,
    logout,
    errorMsg,
    setErrorMsg,
  };
};
