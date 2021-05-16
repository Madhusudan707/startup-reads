import {useFilterHandler,useResetHandler} from '../../hooks'
import {useLanguage,useWidget} from '../../contexts'
export const Filter = () => {
  const {languageState} = useLanguage()
  const {filterHandler} = useFilterHandler()
  const {resetHandler,isChecked} = useResetHandler()
  const {toggleFilter} = useWidget()
  return (
    <div className={`${toggleFilter} flex flex-row fixed top-32 left-12`}>
      <div className="w-96 m-2 p-4 border flex flex-row items-center justify-evenly bg-white ">
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
