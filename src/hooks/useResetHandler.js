import { useState } from "react";
import { useLibrary } from "../contexts";
import axios from 'axios' 

export const useResetHandler = () => {
  const [isChecked, setIsChecked] = useState();
  const { libraryDispatch } = useLibrary();
  const resetHandler = async () => {
    setIsChecked(false);

    try {
      const response = await axios.get("http://localhost:3002/books");
      libraryDispatch({ type: "RESET", payload: response.data.data });
    } catch (err) {
      libraryDispatch({ type: "ON_FAILURE", payload: "" });
    }
    setIsChecked();
  };

  return{resetHandler,isChecked}
};
