import axios from "axios";
import { useLibrary } from "../contexts";

export const useSearchHandler = () => {
  const { libraryState, libraryDispatch } = useLibrary();

  const searchHandler = async (searchStr) => {
    if (searchStr) {
      const data = libraryState.data.filter((product) => {
        const response = product.title
          .toUpperCase()
          .includes(searchStr.toUpperCase());
        if (response) {
          return product;
        }
        return null;
      });
      libraryDispatch({ type: "ON_SUCCESS", payload: data });
    } else {
      try {
        const response = await axios.get("http://localhost:3002/books");
        libraryDispatch({ type: "RESET", payload: response.data.data });
      } catch (err) {
        console.log(err)
        libraryDispatch({ type: "ON_FAILURE", payload: "" });
      }
    }
  };

  return { searchHandler };
};
