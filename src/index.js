import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  ProductProvider,
  CartProvider,
  WishListProvider,
  CounterProvider,
} from "./contexts/contexts";

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <WishListProvider>
        <CartProvider>
          <CounterProvider>
            <App />
          </CounterProvider>
        </CartProvider>
      </WishListProvider>
    </ProductProvider>

    {/* <CartProvider >
      <App/>
    </CartProvider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
