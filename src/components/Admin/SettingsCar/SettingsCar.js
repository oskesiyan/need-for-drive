import { Redirect } from "react-router-dom";
import MenuAdmin from "../MenuAdmin/MenuAdmin";

const SettingsCar = () => {
  if (localStorage.getItem("token") !== "unauthorized") return <MenuAdmin />;
  return <Redirect to="/admin" />;
};
export default SettingsCar;
