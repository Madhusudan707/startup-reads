import { useSearchHandler } from "../../hooks";
import { useLanguage,useWidget } from "../../contexts";

export const Search = ({ nameClass }) => {
  const { searchHandler } = useSearchHandler();
  const { languageState } = useLanguage();
  const {toggleSearch} = useWidget()
  
  return (
    <div className={`${toggleSearch} flex-row justify-center lg:justify-end lg:w-72 w-full lg:top-28 lg:bottom-3/4 bottom-16 lg:z-0 z-10 lg:left-44 left-0    fixed `}>
      <input
        className="w-full  lg:p-4 p-2 lg:mt-1 border text-center lg:w-full text-black"
        type="search"
        placeholder={languageState.data.search || "Search your Books"}
        onChange={(e) => {
          searchHandler(e.target.value);
        }}
      />
    </div>
  );
};
