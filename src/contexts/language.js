import {createContext,useContext,useReducer} from 'react'
import {languageReducer,initialState} from '../reducers/language'

export const LanguageContext = createContext({})

export const LanguageProvider = ({ children }) => {
    const [state,dispatch] = useReducer(languageReducer,initialState)
   
   

  return (
    <LanguageContext.Provider value={{ languageState:state, languageDispatch:dispatch}}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = ()=>useContext(LanguageContext)