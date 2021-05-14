import { createContext, useContext,useReducer,useState} from "react";
import{initialState,cartReducer} from '../reducers/cart'

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer,initialState);
  const [productId,setProductId] = useState("")
  const [totalItemsInCart, setTotalItemsInCart] = useState(0);  

  return (
    <CartContext.Provider value={{ cartState:state,cartDispatch:dispatch,totalItemsInCart,setTotalItemsInCart, productId,setProductId, }}>
      {children}
    </CartContext.Provider>
  );

  
};

export const useCart = () => {
  return useContext(CartContext);
};