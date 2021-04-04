import React from "react";
import Products from "../Products/Products";
import { useProducts } from "../../contexts/contexts";
import Search from '../Search/Search'
import Options from '../Options/Options'
import "./main.css";
const Main = () => {
  const { productsState, ProductsDispatch } = useProducts();
  
  const sortHandler = (value) => {
    switch (value) {
      case "ascending":
        const ascSort = [...productsState.data].sort(
          (a, b) => parseFloat(a.price) - parseFloat(b.price)
        );
        ProductsDispatch({ type: "ascending", payload: ascSort });
        break;
      case "descending":
        const dscSort = [...productsState.data].sort(
          (a, b) => parseFloat(b.price) - parseFloat(a.price)
        );
        ProductsDispatch({ type: "descending", payload: dscSort });
        break;
      case "reset":
        ProductsDispatch({ type: "reset"});
        break;
      default:
        throw new Error();
    }
  };

  const filterHandler = (checkboxValue) => {
    switch (checkboxValue) {
      case "in-stock":
        console.log(checkboxValue);
        const inStock = productsState.data.filter(
          (item) => item.stock === true
        );
        ProductsDispatch({ type: "in-stock", payload: inStock });
        break;

      case "fast-delivery":
        console.log(checkboxValue);
        const fastDelivery = productsState.data.filter(
          (item) => item.fastDelivery === true
        );
        ProductsDispatch({ type: "fast-delivery", payload: fastDelivery });
        break;
      default:
        throw new Error();
    }
  };
  return (
    <div className="main">
       <Search/>
        <Options heading="Sort By" type="radio" name="sort" label1="Low To High" label2="High To Low" value1="ascending" value2="descending" cardClass="sort" func={(e) => {
          sortHandler(e.target.value);
        }} btnFunc={()=>{sortHandler("reset")}} />
        
        <Options heading="Filter By" type="checkbox" label1="In Stock" label2="Fast Delivery" value1= "in-stock" value2="fast-delivery" cardClass="filter" func = {(e) => {
          filterHandler(e.target.value);
        }} />
        <Products />
    </div>
  );
};

export default Main;
