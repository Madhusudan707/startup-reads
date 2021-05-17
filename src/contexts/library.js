import {createContext,useContext,useReducer,useState} from 'react'
import {libraryReducer,initialState} from '../reducers/library'

export const LibraryContext = createContext({})

export const LibraryProvider = ({ children }) => {
    const [state,dispatch] = useReducer(libraryReducer,initialState)
    const [product,setProduct] = useState() 
    const [toastMsg,setToastMsg]=useState("")
    const [toastColor,setToastColor] = useState("#d34d32")
   

  return (
    <LibraryContext.Provider value={{ libraryState:state, libraryDispatch:dispatch,setProduct,product,toastMsg,setToastMsg,toastColor,setToastColor }}>
      {children}
    </LibraryContext.Provider>
  );
};

export const useLibrary = ()=>useContext(LibraryContext)