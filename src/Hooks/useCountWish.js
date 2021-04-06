import { useState,useEffect}  from "react";
import { useWishList } from "../contexts/contexts";

export const useCountWish = () => {
  const { wishListState } = useWishList();
  const [totalItemsInWish, setTotalItemsInWish] = useState(0);

  useEffect(() => {
    totalWish();
  }, [wishListState]);

  const totalWish = () => {
    const sumWish = wishListState.wishes.reduce(function (acc, curr) {
      return curr.wish === true ? acc + curr.wish : 0;
    }, 0);
    setTotalItemsInWish(sumWish);
  };

  return {totalItemsInWish };
};
