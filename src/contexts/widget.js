import {createContext,useContext,useState} from 'react'


export const WidgetContext = createContext({})

export const WidgetProvider = ({ children }) => {
    const [toggleSearch,setToggleSearch] = useState("hidden")
    const [toggleLanguage,setToggleLanguage] = useState("hidden")
    const [toggleFilter,setToggleFilter] = useState("hidden")
    const [toggleSort,setToggleSort] = useState("hidden")

  return (
    <WidgetContext.Provider value={{toggleSearch,toggleLanguage,toggleFilter,toggleSort, setToggleSearch,setToggleLanguage,setToggleFilter,setToggleSort }}>
      {children}
    </WidgetContext.Provider>
  );
};

export const useWidget = ()=>useContext(WidgetContext)