import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import StartScreen from "./components/StartScreen/StartScreen";
import OrderPage from "./components/OrderPage/OrderPage";
import ConfirmOrder from "./components/OrderPage/ConfirmOrder/ConfirmOrder";
import Login from "./components/Admin/Login/Login";
import StartScreenAdmin from "./components/Admin/StartScreenAdmin/StartScreenAdmin";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={StartScreen} exact />
        <Route path="/order" component={OrderPage} />
        <Route path="/confirmation/:id" component={ConfirmOrder} />
        <Route path="/admin" component={Login} />
        <Route path="/settings" component={StartScreenAdmin} /> 
      </Switch>
    </Router>
  );
}

export default App;
