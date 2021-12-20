import { useEffect } from "react";
import { ProductCard } from "../";
import { Widget, Loader } from "../Reusable";
import { useFetchLibrary } from "../../hooks";

export const Home = () => {
  const { refresh, setRefresh, libraryLoading } = useFetchLibrary();
  useEffect(() => {
    (async () => {
      setRefresh(!refresh);
    })();
    //Below Line remove the useEffect dependency warning
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {/* <Widget /> */}
      {libraryLoading ? <Loader toggle="opacity-50" /> : <ProductCard />}
    </div>
  );
};
