import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import {
  LoaderProvider,
  LibraryProvider,
  UserProvider,
  WishListProvider,
  CartProvider,
  CounterProvider,
  LanguageProvider,
} from "./contexts";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <LanguageProvider>
      <LoaderProvider>
        <UserProvider>
          <LibraryProvider>
            <CounterProvider>
              <WishListProvider>
                <CartProvider>
                  <App />
                </CartProvider>
              </WishListProvider>
            </CounterProvider>
          </LibraryProvider>
        </UserProvider>
      </LoaderProvider>
      </LanguageProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
