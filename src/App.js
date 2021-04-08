import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import routes from "./routing/routes";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          {routes.map((route, key) => (
            <Route
              path={route.path}
              element={<route.component/>}
              key={key}
            />
          ))}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
