import { Link, NavLink } from "react-router-dom";
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
      <NavLink
        exact
        to="/settings-car"
        className="menu-admin__link"
        activeClassName="menu-admin__active-link"
      >
        <span className="menu-admin__link__svg car-settings" />
        <div>Карточка автомобиля</div>
      </NavLink>
      <NavLink
        to="/car-list"
        className="menu-admin__link"
        activeClassName="menu-admin__active-link"
      >
        <span className="menu-admin__link__svg car-list" />
        <div>Список авто</div>
      </NavLink>
      <NavLink
        to="/order-list"
        className="menu-admin__link"
        activeClassName="menu-admin__active-link"
      >
        <span
          className="menu-admin__link__svg order-list"
          activeClassName="menu-admin__active-svg"
        />
        <div>Список заказов</div>
      </NavLink>
    </div>
  );
};

export default MenuAdmin;
