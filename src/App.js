import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import StartScreen from "./components/StartScreen/StartScreen";
import OrderPage from "./components/OrderPage/OrderPage";
import ConfirmOrder from "./components/OrderPage/ConfirmOrder/ConfirmOrder";
import Login from "./components/Admin/Login/Login";
import StartScreenAdmin from "./components/Admin/StartScreenAdmin/StartScreenAdmin";
import SettingsCar from "./components/Admin/SettingsCar/SettingsCar";
import CarList from "./components/Admin/CarList/CarList";
import OrderList from "./components/Admin/OrderList/OrderList";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={StartScreen} exact />
        <Route path="/order" component={OrderPage} />
        <Route path="/confirmation/:id" component={ConfirmOrder} />
        <Route path="/admin" component={Login} />
        <PrivateRoute component={SettingsCar} path="/settings-car" />
        <PrivateRoute component={CarList} path="/car-list" />
        <PrivateRoute component={OrderList} path="/order-list" />
        <PrivateRoute component={StartScreenAdmin} path="/admin-panel" exact />
      </Switch>
    </Router>
  );
}

export default App;
