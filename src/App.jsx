import { Loading, NavBar, Footer } from "./Components";
import { Routes, Route } from "react-router-dom";
import routes from "./routing/routes";
import { useLoader, useLogin } from "./contexts";

import "./App.css";

const App = () => {
  const { loading } = useLoader();
  const { login } = useLogin();
  return (
    <div>
      {/* {loading ? (
        <Loading />
      ) : ( */}
      <>
        <NavBar />
        <Routes>
          {routes.map((route, key) => (
            <Route path={route.path} element={<route.component />} key={key} />
          ))}
        </Routes>
        <Footer />
      </>
      {/* )} */}
    </div>
  );
};

export default App;
