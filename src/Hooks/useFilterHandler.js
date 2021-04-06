import {useState} from 'react'
import { useProducts } from "../contexts/contexts";
import {useResetHandler} from './useResetHandler' 

export const useFilterHandler=()=>{
    const { productsState, productsDispatch } = useProducts();
    const {resetHandler} = useResetHandler()
    const filterHandler = (filterStr) => {
  
        switch (filterStr) {
          case "IN-STOCK":
            const inStock = productsState.data.filter(
              (item) => item.stock === true
            );
            productsDispatch({ type: "IN-STOCK", payload: inStock });
            break;
    
          case "FAST-DELIVERY":
            const fastDelivery = productsState.data.filter(
              (item) => item.fastDelivery === true
            );
            productsDispatch({ type: "FAST-DELIVERY", payload: fastDelivery });
            break;
          default:
            resetHandler()
        }
      };

      return {filterHandler}
}