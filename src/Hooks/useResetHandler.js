import { useState } from "react";
import { useProducts } from "../contexts/contexts";
import axios from 'axios' 

export const useResetHandler = () => {
  const [isChecked, setIsChecked] = useState();
  const { productsDispatch } = useProducts();
  const resetHandler = async () => {
    setIsChecked(false);

    try {
      const response = await axios.get("data.json");
      productsDispatch({ type: "RESET", payload: response.data });
    } catch (err) {
      productsDispatch({ type: "ON-FAILURE", payload: "" });
    }
    setIsChecked();
  };

  return{resetHandler,isChecked}
};
