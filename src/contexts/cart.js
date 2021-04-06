import { createContext, useContext,useReducer} from "react";
import{initialState,cartReducer} from '../reducers/cart'

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer,initialState);

  return (
    <CartContext.Provider value={{ cartState:state,cartDispatch:dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};