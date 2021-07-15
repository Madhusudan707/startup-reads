import { useContext, createContext, useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  const [name,setName] = useState("")
  const [authId,setAuthId] = useState("")
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const login =  JSON.parse(localStorage.getItem("login"))
      const authId =   localStorage.getItem("authId")
      const name = localStorage.getItem("name")
      
      if (login) {
        setLogin(login);
        setAuthId(authId);
        setName(name);
      }else{
        navigate("/");
      }
    })();
  //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UserContext.Provider value={{ login, setLogin,name,setName,authId,setAuthId}}>
      {children}
    </UserContext.Provider>
  );
};

export const useLogin = () => useContext(UserContext);
