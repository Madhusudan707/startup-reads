import { useState } from "react";
import axios from "axios";
import {useAPI} from "../hooks"

export const useAddress = () => {
  const [label, setLabel] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPinCode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const {api} = useAPI()

  const selectAddress = async (e) => {
    const addressLabel = e.target.value;
    const userId = localStorage.getItem("_id");
    try {
      const response = await axios.get(
        `${api.URL}${api.address.GETBYLABEL}${userId}/${addressLabel}`
      );
      const address = response.data.address
        setLabel(address.label);
        setName(address.name);
        setAddress(address.address);
        setCountry(address.country);
        setPinCode(address.pincode);
        setCity(address.city);
        setState(address.state);
     
    } catch (err) {
      console.log(`${err} Unable to load address`);
    }
  };

  return { label, name, address, country, pincode, city, state, selectAddress };
};
