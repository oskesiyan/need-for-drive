import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import NavState from "./context/NavState";
import MainMenu from "./components/SideBar/MainMenu";
import StartScreen from "./components/StartScreen/StartScreen";
import OrderPage from "./components/OrderPage/OrderPage";
import ConfirmOrder from "./components/OrderPage/ConfirmOrder/ConfirmOrder";
import Login from "./components/Admin/Login/Login";

function App() {
  return (
    <Router>
      {/* <NavState>
          <MainMenu />
        </NavState> */}
      <Switch>
        <Route path="/" component={StartScreen} exact />
        <Route path="/order" component={OrderPage} />
        <Route path="/confirmation" component={ConfirmOrder} />
        <Route path="/admin" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
