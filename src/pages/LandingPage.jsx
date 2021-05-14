
import {Landing} from '../Components'
import {useNavigate} from 'react-router-dom'
import {useLogin } from "../contexts";
import './style.css'
export const LandingPage = () => {
    const navigate = useNavigate();
    const { login} = useLogin();
    return (
        <div className="flex justify-center items-center  w-full  h-screen border landing-page">
          {login?navigate("/home") :<Landing/>}  
        </div>
    )
}
