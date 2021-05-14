import {useSortHandler,useResetHandler} from '../../hooks'
import {useLanguage} from '../../contexts'

export const Sort = ({
  nameClass,
  value,
  type,
  onClickFunction
}) => {
  const {languageState} = useLanguage()
  const {sortHandler} = useSortHandler()
  const {resetHandler,isChecked} = useResetHandler()
  return (
    <div className="flex">
      <div className="w-96 m-2 p-2 border flex flex-row items-center justify-evenly ">
        <i title={languageState.data.sort || "Clear"} className="fas fa-sort fa-2x"></i>

        <label>
          <input
            type="radio"
            name="sort"
            value="ASCENDING"
            className="mr-2"
            checked={isChecked}
            onClick={(e)=>{sortHandler(e.target.value)}}
          />
         { languageState.data.ascending || "Low To High"}
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            value="DESCENDING"
            className="mr-2"
            checked={isChecked}
            onClick={(e)=>{sortHandler(e.target.value)}}
          />
          { languageState.data.descending || "Low To High"}
        </label>
        <button className="far fa-trash-alt fa-1x cursor-pointer" title={languageState.data.clear || "Clear"} onClick={resetHandler}></button>
      </div>
    </div>
  );
};
