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


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={StartScreen} exact />
        <Route path="/order" component={OrderPage} />
        <Route path="/confirmation/:id" component={ConfirmOrder} />
        <Route path="/admin" component={Login} /> 
        <Route path="/admin-panel" component={StartScreenAdmin} />
        <Route path="/settings-car" component={SettingsCar} />
        <Route path="/car-list" component={CarList} />
        <Route path="/order-list" component={OrderList} />
      </Switch>
     
    </Router>
    
  );
}

export default App;
