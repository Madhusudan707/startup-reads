import {useState} from 'react'
import { useProducts } from "../contexts/contexts";
import {useResetHandler} from './useResetHandler' 

export const useFilterHandler=()=>{
    const { productsState, productsDispatch } = useProducts();
    const {resetHandler} = useResetHandler()
    const filterHandler = (filterStr) => {
  
        switch (filterStr) {
          case "in-stock":
            const inStock = productsState.data.filter(
              (item) => item.stock === true
            );
            productsDispatch({ type: "in-stock", payload: inStock });
            break;
    
          case "fast-delivery":
            const fastDelivery = productsState.data.filter(
              (item) => item.fastDelivery === true
            );
            productsDispatch({ type: "fast-delivery", payload: fastDelivery });
            break;
          default:
            resetHandler()
        }
      };

      return {filterHandler}
}