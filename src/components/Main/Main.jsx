import React from "react";
import Products from "../Products/Products";
import Search from '../Search/Search'
import Options from '../Options/Options'
import {useSortHandler,useFilterHandler,useResetHandler} from '../../Hooks/Hooks'
import "./main.css";

const Main = () => {
    const {sortHandler} = useSortHandler()
    const {filterHandler} = useFilterHandler()
    const {resetHandler,isChecked} = useResetHandler()
  return (
    <div className="main">
        <Search/>
        <Options heading="Sort By" type="radio" name="sort" label1="Low To High" label2="High To Low" value1="ascending" value2="descending" cardClass="sort" func={(e) => {
          sortHandler({e});
        }} btnFunc={resetHandler} checked={isChecked} />

        <Options heading="Filter By" type="checkbox" label1="In Stock" label2="Fast Delivery" value1= "in-stock" value2="fast-delivery" cardClass="filter" func = {(e) => {
          filterHandler(e.target.checked?e.target.value:"");
        }} btnFunc={resetHandler} checked={isChecked} />
        <Products />
    </div>
  );
};

export default Main;
