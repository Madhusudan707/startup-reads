import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header'
import routes from './config/routing/routes'
const App = () =>{
  return (
    <div className="App">
   
    
     <Router>
          <Header/>
       
          <Switch>
            {routes.map((route,key)=>(
            <Route exact path={route.path} component={route.component} key={key} />
          ))}
        </Switch>
      </Router>
      
    </div>
  )
}

export default App;
