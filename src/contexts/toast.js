import {createContext,useContext,useEffect,useState} from 'react'

export const ToastContext = createContext({})

export const ToastProvider = ({ children }) => {

    const [toastMsg,setToastMsg]=useState("")
    const [toastColor,setToastColor] = useState("")
    const  SUCCESS = "#59D78B"
    const DANGER ="#d34d32"
  
    useEffect(() => {
        (async () => {
          if (toastMsg) {
            setTimeout(() => {
              setToastMsg("");
            }, 5000);
          }
        })();
      }, [toastMsg]);

  return (
    <ToastContext.Provider value={{toastMsg,setToastMsg,toastColor,setToastColor,DANGER,SUCCESS }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = ()=>useContext(ToastContext)