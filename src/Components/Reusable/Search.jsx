import { useSearchHandler } from "../../hooks";
import { useLanguage,useWidget } from "../../contexts";

export const Search = ({ nameClass }) => {
  const { searchHandler } = useSearchHandler();
  const { languageState } = useLanguage();
  const {toggleSearch} = useWidget()
  
  return (
    <div className={`${toggleSearch} flex-row justify-center lg:justify-end w-72 top-28 left-36  fixed border `}>
      <input
        className="w-96  p-4  text-center lg:w-full text-black"
        type="search"
        placeholder={languageState.data.search || "Search your Books"}
        onChange={(e) => {
          searchHandler(e.target.value);
        }}
      />
    </div>
  );
};
