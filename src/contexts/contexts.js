import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

//1. Product Context

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  useEffect(() => {
    productLoading(); /* name it loading product */
  }, []);

  const [productList, setProductList] = useState([]);

  const productLoading = async () => {
    const response = await axios.get("data.json");
    setProductList(response.data);
  };

  return (
    <ProductContext.Provider value={{ productList, setProductList }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  return useContext(ProductContext);
};

//2. CartContext

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [itemsInCart, setItemsInCart] = useState([]);
  useEffect(() => {
    const itemsInCart = JSON.parse(localStorage.getItem("itemsInCart"));
    if (itemsInCart) {
      setItemsInCart(itemsInCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("itemsInCart", JSON.stringify(itemsInCart));
  }, [itemsInCart]);

  return (
    <CartContext.Provider value={{ itemsInCart, setItemsInCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

//3 WishListContext

export const WishListContext = createContext();

export const WishListProvider = ({ children }) => {
  const [itemsInWishList, setItemsInWishList] = useState([]);

  useEffect(() => {
    const itemsInWishList = JSON.parse(localStorage.getItem("itemsInWishList"));
    if (itemsInWishList) {
      setItemsInWishList(itemsInWishList);
    }
  }, []);

  //Adding product to wishlilst
  useEffect(() => {
    localStorage.setItem("itemsInWishList", JSON.stringify(itemsInWishList));
  }, [itemsInWishList]);

  return (
    <WishListContext.Provider value={{ itemsInWishList, setItemsInWishList }}>
      {children}
    </WishListContext.Provider>
  );
};

export const useWishList = () => {
  return useContext(WishListContext);
};

//4
export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => {
  return useContext(CounterContext);
};

//5 Counter Context with useReducer

// export const CounterContext = createContext()

// const initialState = {count: 0}

// const reducer=(state, action) =>{
//     switch (action.type) {
//       case 'increment':
//           console.log("hello")
//         return {count: state.count + 1};
//       case 'decrement':
//         return {count: state.count - 1};
//       default:
//         throw new Error();
//     }
//   }

//   export const CounterProvider =({children})=>{
//     const [count, dispatch] = useReducer(reducer, initialState);
//     return (
//         <CounterContext.Provider value={{counterCount:count,counterDispatch:dispatch}}>
//             {children}
//         </CounterContext.Provider>
//     )
//   }

//   export const useCounter = ()=>{
//     return useContext(CounterContext)
// }
