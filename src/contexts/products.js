import {createContext,useContext,useReducer,useEffect} from 'react'
import axios from 'axios'
import {productsReducer,initialState} from '../reducers/products'

export const ProductsContext = createContext({})

export const ProductsProvider = ({ children }) => {
    const [state,dispatch] = useReducer(productsReducer,initialState)
    useEffect(()=>{
      const fetchData=async ()=>{ 
          try{
            const response = await axios.get("data.json")
            dispatch({type:'OnSuccess',payload:response.data})
          }
          catch(err){
            dispatch({type:'OnFailure'})
          }
      }
      fetchData()
    },[])

  return (
    <ProductsContext.Provider value={{ productsState:state, ProductsDispatch:dispatch }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = ()=>useContext(ProductsContext)