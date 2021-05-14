import { useLibrary } from "../contexts";

export const useSortHandler=()=>{
    const { libraryState, libraryDispatch } = useLibrary();
    const sortHandler = (value) => {
        switch (value) {
          case "ASCENDING":
            const ascSort = [...libraryState.data].sort(
              (a, b) => parseFloat(a.price) - parseFloat(b.price)
            );
            libraryDispatch({ type: "ASCENDING", payload: ascSort });
            break;
          case "DESCENDING":
            const dscSort = [...libraryState.data].sort(
              (a, b) => parseFloat(b.price) - parseFloat(a.price)
            );
            libraryDispatch({ type: "DESCENDING", payload: dscSort });
            break;
          default:
            throw new Error();
        }
      };

      return {sortHandler}
}