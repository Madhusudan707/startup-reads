import {createContext,useContext,useReducer} from 'react'
import{counterReducer,initialState} from '../reducers/counter'

export const CounterContext = createContext();

export const CounterProvider =({children})=>{
  const [state, dispatch] = useReducer(counterReducer,initialState);
  return (
      <CounterContext.Provider value={{counterState:state,counterDispatch:dispatch}}>
          {children}
      </CounterContext.Provider>
  )
}

export const useCounter = ()=>useContext(CounterContext)