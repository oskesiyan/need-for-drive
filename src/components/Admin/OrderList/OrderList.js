import FooterAdmin from "../FooterAdmin/FooterAdmin";
import HeaderAdmin from "../HeaderAdmin/HeaderAdmin";
import MenuAdmin from "../MenuAdmin/MenuAdmin";
import StartScreenAdmin from "../StartScreenAdmin/StartScreenAdmin";
import "./OrderList.scss";
import Dropdown from "react-dropdown";
import "./style.css";
import NavState, { MenuContext } from "../../../context/NavState";
import { useContext, useState } from "react";

const OrderList = () => {
  const options = ["one", "two", "three"];
  const defaultOption = options[0];
  return (
    <div className="order-list-admin">
      <MenuAdmin />
      <div className="start-screen-admin__header-footer">
        <HeaderAdmin />
        <div className="order-list-admin__box">
          <div className="order-list-admin__box__text">Заказы</div>
          <div className="order-list-admin__box__info">
            <div className="order-list-admin__box__info__selection">
              <div className="order-list-admin__box__info__selection__dropdown">
                <Dropdown
                  options={options}
                  arrowClassName="myArrowClassName"
                  value={defaultOption}
                  placeholder="Select an option"
                />
                <Dropdown
                  options={options}
                  arrowClassName="myArrowClassName"
                  value={defaultOption}
                  placeholder="Select an option"
                />
                <Dropdown
                  options={options}
                  arrowClassName="myArrowClassName"
                  value={defaultOption}
                  placeholder="Select an option"
                />
                <Dropdown
                  options={options}
                  arrowClassName="myArrowClassName"
                  value={defaultOption}
                  placeholder="Select an option"
                />
              </div>
              <button className="order-list-admin__box__info__selection__button">
                Применить
              </button>
            </div>
            <div></div>
          </div>
        </div>
        <FooterAdmin />
      </div>
    </div>
  );
};
export default OrderList;
