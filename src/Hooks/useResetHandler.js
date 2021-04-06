import { useState } from "react";
import { useProducts } from "../contexts/contexts";
import axios from 'axios' 

export const useResetHandler = () => {
  const [isChecked, setIsChecked] = useState();
  const { productsState, productsDispatch } = useProducts();
  const resetHandler = async () => {
    setIsChecked(false);

    try {
      const response = await axios.get("data.json");
      productsDispatch({ type: "reset", payload: response.data });
    } catch (err) {
      productsDispatch({ type: "OnFailure", payload: "" });
    }
    setIsChecked();
  };

  return{resetHandler,isChecked}
};
