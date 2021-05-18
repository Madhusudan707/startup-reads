import { useSortHandler, useResetHandler } from "../../hooks";
import { useLanguage,useWidget } from "../../contexts";

export const Sort = ({ nameClass, value, type, onClickFunction }) => {
  const { languageState } = useLanguage();
  const { sortHandler } = useSortHandler();
  const { resetHandler, isChecked } = useResetHandler();
  const {toggleSort} = useWidget()
  return (
    <div className={`${toggleSort} flex-row fixed lg:top-24 lg:mt-4 top-2/4 mt-72 lg:left-12  w-full `}>
      <div className="lg:w-72 w-full p-4 border flex flex-row items-center justify-evenly  bg-white ">
        <label>
          <input
            type="radio"
            name="sort"
            value="ASCENDING"
            className="mr-2"
            checked={isChecked}
            onClick={(e) => {
              sortHandler(e.target.value);
            }}
          />
          {languageState.data.ascending || "Low To High"}
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            value="DESCENDING"
            className="mr-2"
            checked={isChecked}
            onClick={(e) => {
              sortHandler(e.target.value);
            }}
          />
          {languageState.data.descending || "High To Low"}
        </label>
        <button
          className="far fa-trash-alt fa-1x cursor-pointer"
          title={languageState.data.clear || "Clear"}
          onClick={resetHandler}
        ></button>
      </div>
    </div>
  );
};
