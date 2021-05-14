import React from "react";
import {useFilterHandler,useResetHandler} from '../../hooks'
import {useLanguage} from '../../contexts'
export const Filter = () => {
  const {languageState} = useLanguage()
  const {filterHandler} = useFilterHandler()
  const {resetHandler,isChecked} = useResetHandler()
  return (
    <div className="flex ">
      <div className="w-96 m-2 p-2 border flex flex-row items-center justify-evenly ">
      <i title={languageState.data.filter || "Clear"} className="fas fa-filter"></i>

        <label>
          <input
            type="checkbox"
            
            value="IN_STOCK"
            className="mr-2"
            onClick={(e)=>{filterHandler(e.target.checked?e.target.value:"")}}
            checked={isChecked}
          />
         {languageState.data.stock || "In Stock"} 
        </label>
        <label>
          <input
            type="checkbox"
            value="FAST_DELIVERY"
            className="mr-2"
            onClick={(e)=>{filterHandler(e.target.checked?e.target.value:"")}}
            checked={isChecked}
          />
           {languageState.data.delivery|| "Fast Delivery"} 
         
        </label>
         <button className="far fa-trash-alt fa-1x cursor-pointer" title={languageState.data.clear || "Clear"} onClick={resetHandler}></button>
      </div>
    </div>
  );
};
