import { useEffect} from "react";
import axios from 'axios'
import { useProducts } from "../contexts/contexts";

export const useFetchData = () => {
  const { productsState, productsDispatch } = useProducts();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("data.json");
      productsDispatch({ type: "OnSuccess", payload: response.data });
    } catch (err) {
      productsDispatch({ type: "OnFailure", payload: "" });
    }
  };

  return {productsState };
};
