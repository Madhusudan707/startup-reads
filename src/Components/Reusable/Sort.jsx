import { useSortHandler, useResetHandler } from "../../hooks";
import { useLanguage,useWidget } from "../../contexts";

export const Sort = ({ nameClass, value, type, onClickFunction }) => {
  const { languageState } = useLanguage();
  const { sortHandler } = useSortHandler();
  const { resetHandler, isChecked } = useResetHandler();
  const {toggleSort} = useWidget()
  return (
    <div className={`${toggleSort} flex-row fixed lg:top-28 lg:bottom-3/4 lg:left-44 bottom-16 w-full `}>
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
          {languageState.data.descending || "Low To High"}
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
