import "./HeaderAdmin.scss";
import Search from "./../../../img/Icons/Search.svg";
import Notifications from "./../../../img/Icons/Notifications.svg";
import UserDetails from "./../../../img/Icons/UserDetails.svg";
import { ReactSVG } from "react-svg";

const HeaderAdmin = () => {
  return (
    <div className="header-admin">
      <div className="header-admin__search">
        <ReactSVG src={Search} />
      </div>
      <div className="header-admin__message">
        <ReactSVG src={Notifications} />
      </div>
      <div className="header-admin__logout">
        <ReactSVG src={UserDetails} />
      </div>
    </div>
  );
};

export default HeaderAdmin;
