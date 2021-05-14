import { useLibrary } from "../contexts";
import {useResetHandler} from './useResetHandler' 

export const useFilterHandler=()=>{
    const { libraryState, libraryDispatch } = useLibrary();
    const {resetHandler} = useResetHandler()
    const filterHandler = (filterStr) => {
        switch (filterStr) {
          case "IN_STOCK":
            const inStock = libraryState.data.filter(
              (item) => item.stock === true
            );
            libraryDispatch({ type: "IN_STOCK", payload: inStock });
            break;
    
          case "FAST_DELIVERY":
            const fastDelivery = libraryState.data.filter(
              (item) => item.fastDelivery === true
            );
            libraryDispatch({ type: "FAST_DELIVERY", payload: fastDelivery });
            break;
          default:
            resetHandler()
        }
      };

      return {filterHandler}
}