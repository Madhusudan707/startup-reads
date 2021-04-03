import {createContext,useContext,useReducer} from 'react'
import{wishListReducer,initialState} from '../reducers/wishlist'

export const WishListContext = createContext();

export const WishListProvider = ({ children }) => {
 
  const [state,dispatch] = useReducer(wishListReducer,initialState)



  return (
    <WishListContext.Provider value={{ wishListState:state, WishListDispatch:dispatch }}>
      {children}
    </WishListContext.Provider>
  );
};

export const useWishList = () => {
  return useContext(WishListContext);
};