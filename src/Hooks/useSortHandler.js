import {useState} from 'react'
import { useProducts } from "../contexts/contexts";

export const useSortHandler=()=>{
    const { productsState, productsDispatch } = useProducts();
    const sortHandler = ({e}) => {
        switch (e.target.value) {
          case "ascending":
            const ascSort = [...productsState.data].sort(
              (a, b) => parseFloat(a.price) - parseFloat(b.price)
            );
            productsDispatch({ type: "ascending", payload: ascSort });
            break;
          case "descending":
            const dscSort = [...productsState.data].sort(
              (a, b) => parseFloat(b.price) - parseFloat(a.price)
            );
            productsDispatch({ type: "descending", payload: dscSort });
            break;
          default:
            throw new Error();
        }
      };

      return {sortHandler}
}