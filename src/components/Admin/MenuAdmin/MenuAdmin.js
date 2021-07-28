import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import logoAdmin from "./../../../img/Icons/LogoAdmin.svg";
import "./MenuAdmin.scss";

const MenuAdmin = () => {
  return (
    <div className="menu-admin">

      <Link to="/admin-panel" className="menu-admin__logo">
            <ReactSVG src={logoAdmin} className="menu-admin__logo__svg" />
            <div>Need for car</div>
      </Link>
      <Link to="/settings-car" className="menu-admin__link">
            <div>Карточка автомобиля</div>
      </Link>
      <Link to="/car-list" className="menu-admin__link">
            <div>Список авто</div>
      </Link>
      <Link to="/order-list" className="menu-admin__link">
            <div>Заказы</div>
      </Link>
</div>
   );
};

export default MenuAdmin;
