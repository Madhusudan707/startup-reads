import { useWidget } from "../contexts";

export const useWidgetHandler = () => {
  const { toggleSearch,toggleLanguage,toggleFilter,toggleSort, setToggleSearch,setToggleLanguage,setToggleFilter,setToggleSort } = useWidget();

  const toggleSearchHandler = () => {
    setToggleSearch(toggleSearch === "hidden" ? "flex" : "hidden");

    setToggleLanguage("hidden");
    setToggleFilter("hidden");
    setToggleSort("hidden");
  };
  const toggleLanguageHandler = () => {
    setToggleLanguage(toggleLanguage === "hidden" ? "flex" : "hidden");

    setToggleSearch("hidden");
    setToggleFilter("hidden");
    setToggleSort("hidden");
  };
  const toggleFilterHandler = () => {
    setToggleFilter(toggleFilter === "hidden" ? "flex" : "hidden");

    setToggleSearch("hidden");
    setToggleLanguage("hidden");
    setToggleSort("hidden");
  };
  const toggleSortHandler = () => {
    setToggleSort(toggleSort === "hidden" ? "flex" : "hidden");

    setToggleSearch("hidden");
    setToggleLanguage("hidden");
    setToggleFilter("hidden");
  };
  return { toggleSearchHandler,toggleLanguageHandler,toggleFilterHandler,toggleSortHandler };
};
