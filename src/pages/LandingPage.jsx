import { Landing } from "../Components";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../contexts";
import "./style.css";
import { useEffect } from "react";

export const LandingPage = () => {
  const navigate = useNavigate();
  const { login } = useLogin();
  useEffect(() => {
    if (login) {
      navigate("/home");
    }
    //Below Line remove the useEffect dependency warning
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className=" landing-page">
      <Landing />
    </div>
  );
};
