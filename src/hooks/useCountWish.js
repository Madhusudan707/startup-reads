import { useState,useEffect}  from "react";
import { useFetchLibrary } from "../hooks";

export const useCountWish = () => {
  const { wishListState } = useFetchLibrary ();
  const [totalItemsInWish, setTotalItemsInWish] = useState(0);

  useEffect(() => {
    (()=>{
        const sumWish = wishListState.wishes.reduce(function (acc, curr) {
          return curr.wish === true ? acc + curr.wish : 0;
        }, 0);
        setTotalItemsInWish(sumWish);
    })()
    
     //Below Line remove the useEffect dependency warning
  //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wishListState]);

  

  return {totalItemsInWish };
};
