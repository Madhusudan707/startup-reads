import { useContext, createContext, useState, useEffect } from "react";

export const LoaderContext = createContext({});

export const LoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      (async () => {
        if (loading) {
          setLoading(false);
        }
      })();
    }, 5000);
  }, [loading]);

  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => useContext(LoaderContext);
