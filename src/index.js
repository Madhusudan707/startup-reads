import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ProductsProvider } from "./contexts/products";
import { WishListProvider } from "./contexts/wishlist";
import { CartProvider } from "./contexts/cart";
import { CounterProvider } from "./contexts/counter";

ReactDOM.render(
  <React.StrictMode>
    <CounterProvider>
      <ProductsProvider>
        <WishListProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </WishListProvider>
      </ProductsProvider>
    </CounterProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
