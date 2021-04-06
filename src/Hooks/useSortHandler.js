import {useState} from 'react'
import { useProducts } from "../contexts/contexts";

export const useSortHandler=()=>{
    const { productsState, productsDispatch } = useProducts();
    const sortHandler = ({e}) => {
        switch (e.target.value) {
          case "ASCENDING":
            const ascSort = [...productsState.data].sort(
              (a, b) => parseFloat(a.price) - parseFloat(b.price)
            );
            productsDispatch({ type: "ASCENDING", payload: ascSort });
            break;
          case "DESCENDING":
            const dscSort = [...productsState.data].sort(
              (a, b) => parseFloat(b.price) - parseFloat(a.price)
            );
            productsDispatch({ type: "DESCENDING", payload: dscSort });
            break;
          default:
            throw new Error();
        }
      };

      return {sortHandler}
}