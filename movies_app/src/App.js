//npm install react-router-dom@5.3.1
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComp from './components/NavBarComp';
import Home from "./components/Home";
import {Switch,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBarComp></NavBarComp>

      <Switch>
        <Route path="/">
          <Home/>
        </Route>
     </Switch>

    </div>
  );
}

export default App;
