import { useState } from "react";
import { useLibrary } from "../contexts";
import {useAPI} from '../hooks'
import axios from 'axios' 

export const useResetHandler = () => {
  const [isChecked, setIsChecked] = useState();
  const { libraryDispatch } = useLibrary();
  const {api} = useAPI()
  const resetHandler = async () => {
    setIsChecked(false);

    try {
      const response = await axios.get(`${api.URL}${api.books.GET}`);
      libraryDispatch({ type: "RESET", payload: response.data.data });
    } catch (err) {
      libraryDispatch({ type: "ON_FAILURE", payload: "" });
    }
    setIsChecked();
  };

  return{resetHandler,isChecked}
};
