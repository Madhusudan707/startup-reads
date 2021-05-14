import {createContext,useContext,useReducer,useState} from 'react'
import {libraryReducer,initialState} from '../reducers/library'

export const LibraryContext = createContext({})

export const LibraryProvider = ({ children }) => {
    const [state,dispatch] = useReducer(libraryReducer,initialState)
    const [product,setProduct] = useState() 
   

  return (
    <LibraryContext.Provider value={{ libraryState:state, libraryDispatch:dispatch,setProduct,product }}>
      {children}
    </LibraryContext.Provider>
  );
};

export const useLibrary = ()=>useContext(LibraryContext)