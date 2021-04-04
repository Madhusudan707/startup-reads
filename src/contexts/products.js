import {createContext,useContext,useReducer} from 'react'
import {productsReducer,initialState} from '../reducers/products'

export const ProductsContext = createContext({})

export const ProductsProvider = ({ children }) => {
    const [state,dispatch] = useReducer(productsReducer,initialState)
   

  return (
    <ProductsContext.Provider value={{ productsState:state, ProductsDispatch:dispatch }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = ()=>useContext(ProductsContext)