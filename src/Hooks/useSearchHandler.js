import axios from "axios";
import { useProducts } from "../contexts/contexts";

export const useSearchHandler = () => {
  const { productsState, productsDispatch } = useProducts();

  const searchHandler = async (searchStr) => {
    if (searchStr) {
      const data = productsState.data.filter((product) => {
        const response = product.title
          .toUpperCase()
          .includes(searchStr.toUpperCase());
        if (response) {
          return product;
        }
        return null;
      });
      productsDispatch({ type: "ON-SUCCESS", payload: data });
    } else {
      try {
        const response = await axios.get("data.json");
        productsDispatch({ type: "RESET", payload: response.data });
      } catch (err) {
        productsDispatch({ type: "ON-FAILURE", payload: "" });
      }
    }
  };

  return { searchHandler };
};
