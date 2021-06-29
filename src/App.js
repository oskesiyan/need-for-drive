import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import NavState from "./context/NavState";
import MainMenu from "./components/SideBar/MainMenu";
import StartScreen from "./components/StartScreen/StartScreen";
import OrderPage from "./components/OrderPage/OrderPage";

function App() {
  return (
    <Router>
      <NavState>
        <MainMenu />
        <Switch>
          <Route path="/" component={StartScreen} exact />
          <Route path="/order" component={OrderPage} />
        </Switch>
      </NavState>
    </Router>
  );
}

export default App;
