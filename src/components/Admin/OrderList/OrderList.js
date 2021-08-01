import FooterAdmin from "../FooterAdmin/FooterAdmin";
import HeaderAdmin from "../HeaderAdmin/HeaderAdmin";
import MenuAdmin from "../MenuAdmin/MenuAdmin";
import StartScreenAdmin from "../StartScreenAdmin/StartScreenAdmin";
import "./OrderList.scss";
import Dropdown from "react-dropdown";
import "./style.scss";
import { useState } from "react";
import Pagination from "react-pagination-library";
import "./index.css";

const OrderList = () => {
  const options = ["Ульяновск", "Санкт-Петербугр", "Краснодар"];
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
            <div className="order-list-admin__box__info__order">
              <img></img>
              <div className="order-list-admin__box__info__order__details">
                <div> Элантра в Ульяновк, Нариманова</div>
                <div>12.01.1258-12.03.1258</div>
                <div>Цвет голубой</div>
              </div>
              <div className="order-list-admin__box__info__order__checkbox">
                <div>
                  <input
                    id="cb1"
                    type="checkbox"
                    className="regular-checkbox"
                    // checked={fullPatrolState}
                    // onChange={handleChangeCB1}
                  />
                  <label for="cb1">Полный бак, 500р</label>
                </div>

                <div>
                  <input
                    id="cb2"
                    type="checkbox"
                    className="regular-checkbox"
                    // checked={babyChairState}
                    // onChange={handleChangeCB2}
                  />
                  <label for="cb2">Детское кресло, 200р</label>
                </div>

                <div>
                  <input
                    id="cb3"
                    type="checkbox"
                    className="regular-checkbox"
                    // checked={rightHDState}
                    // onChange={handleChangeCB3}
                  />
                  <label for="cb3">Правый руль, 1600р</label>
                </div>
              </div>

              <div className="order-list-admin__box__info__order__price">
                {" "}
                2500
              </div>
              <div className="order-list-admin__box__info__order__button">
                <button>Готово</button>
                <button>Отмена</button>
                <button>Изменить</button>
              </div>
            </div>
            <Pagination
              currentPage={2}
              totalPages={10}
              // changeCurrentPage={this.changeCurrentPage}
              theme="bottom-border"
            />
          </div>
        </div>
        <FooterAdmin />
      </div>
    </div>
  );
};
export default OrderList;
