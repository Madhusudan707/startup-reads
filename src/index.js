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
  WidgetProvider,
} from "./contexts";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <WidgetProvider>
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
      </WidgetProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
