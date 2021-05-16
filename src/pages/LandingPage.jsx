
import {Landing} from '../Components'
import {useNavigate} from 'react-router-dom'
import {useLogin } from "../contexts";
import './style.css'
import { useEffect } from 'react';
export const LandingPage = () => {
    const navigate = useNavigate();
    const { login} = useLogin();
    useEffect(()=>{
      if(login){
        navigate("/home")
      }
    },[])
    return (
        <div className="flex justify-center items-center  w-full  h-screen border landing-page">
          <Landing/>
        </div>
    )
}
