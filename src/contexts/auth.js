import { createContext, useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/auth";

firebase.initializeApp({
    apiKey: "AIzaSyDcWy8M9pbzT0RnHLwIUrzUVr2vVfPLSYo",
    authDomain: "startup-3a086.firebaseapp.com",
    projectId: "startup-3a086",
    storageBucket: "startup-3a086.appspot.com",
    messagingSenderId: "617071177687",
    appId: "1:617071177687:web:a83805ceb82b1edcafe592",
    measurementId: "G-DWKT773D1B"
});

const auth = firebase.auth();

export const AuthContext = createContext();

const useAuth = (auth) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);

    const unsubscribe = auth.onAuthStateChanged((userData) =>
      setUser(userData)
    );
   
    return () => unsubscribe();
     //Below Line remove the useEffect dependency warning
  //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { user, isUserLoggedIn: user ? true : false, loading };
};

export const AuthProvider = ({ children }) => {
  const { user, loading, isUserLoggedIn } = useAuth(auth);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isUserLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};