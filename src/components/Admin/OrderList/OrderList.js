import FooterAdmin from "../FooterAdmin/FooterAdmin";
import HeaderAdmin from "../HeaderAdmin/HeaderAdmin";
import MenuAdmin from "../MenuAdmin/MenuAdmin";
import "./OrderList.scss";
import Dropdown from "react-dropdown";
import "./style.scss";
import { useEffect, useState } from "react";
import { getDataList } from "../../../utils";
import Pagination from "../../Paginator/Pagination";
import { useMemo } from "react";
import moment from "moment";
import ButtonReady from "./../../../img/Icons/ButtonReady.svg";
import ButtonCancel from "./../../../img/Icons/ButtonCancel.svg";
import ButtonChange from "./../../../img/Icons/ButtonChange.svg";

let PageSize = 10;

const OrderList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const filterPeriod = ["За неделю", "За месяц", "За год"];
  const filterModel = ["Elantra", "Ford", "Lada"];
  const filterCity = ["Ульяновск", "Санкт-Петербугр", "Краснодар"];
  const filterStatus = ["В процессе", "Новое", "Удалено"];
  const [orderData, setOrderData] = useState([]);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return orderData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, orderData]);

  useEffect(async () => {
    const result = await getDataList(
      "http://api-factory.simbirsoft1.com/api/db/order?limit=200"
    );
    setOrderData(result?.data?.data);
  }, []);

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
                  options={filterPeriod}
                  arrowClassName="myArrowClassName"
                  value={filterPeriod[0]}
                  placeholder="Select an option"
                />
                <Dropdown
                  options={filterModel}
                  arrowClassName="myArrowClassName"
                  value={filterModel[0]}
                  placeholder="Select an option"
                />
                <Dropdown
                  options={filterCity}
                  arrowClassName="myArrowClassName"
                  value={filterCity[0]}
                  placeholder="Select an option"
                />
                <Dropdown
                  options={filterStatus}
                  arrowClassName="myArrowClassName"
                  value={filterStatus[0]}
                  placeholder="Select an option"
                />
              </div>
              <button className="order-list-admin__box__info__selection__button">
                Применить
              </button>
            </div>

            {currentTableData.map((el) => {
              return (
                <div className="order-list-admin__box__info__order">
                  <img
                    src={
                      "https://api-factory.simbirsoft1.com" +
                      el?.carId?.thumbnail?.path
                    }
                    className="order-list-admin__box__info__order__img"
                  />
                  <div className="order-list-admin__box__info__order__details">
                    <div className="order-list-admin__box__info__order__details__container">
                      <div className="order-list-admin__box__info__order__details__text">
                        <div className="order-list-admin__box__info__order__details__text__color">
                          {el?.carId?.name}{" "}
                        </div>{" "}
                        &nbsp; в &nbsp;{" "}
                        <div className="order-list-admin__box__info__order__details__text__color">
                          {el?.cityId?.name}{" "}
                        </div>
                        ,&nbsp;
                      </div>
                      <div>{el?.pointId?.name}</div>
                    </div>
                    <div>
                      {moment(new Date(el.dateFrom)).format("DD.MM.YY HH:mm")}-
                      {moment(new Date(el.dateTo)).format("DD.MM.YY HH:mm")}
                    </div>
                    <div className="order-list-admin__box__info__order__details__color">
                      Цвет:&nbsp;
                      <div className="order-list-admin__box__info__order__details__text__color">
                        {el.color}
                      </div>
                    </div>
                    {window.screen.width <= 1022 && (
                      <div className="order-list-admin__box__info__order__details__text__color">
                        Цена: {el.price} ₽
                      </div>
                    )}
                  </div>
                  <div className="order-list-admin__box__info__order__checkbox">
                    <div>
                      <input
                        id="cb1"
                        type="checkbox"
                        className="regular-checkbox"
                        checked={el.isFullTank}
                        // onChange={handleChangeCB1}
                      />
                      <label for="cb1">Полный бак</label>
                    </div>

                    <div>
                      <input
                        id="cb2"
                        type="checkbox"
                        className="regular-checkbox"
                        checked={el.isNeedChildChair}
                        // onChange={handleChangeCB2}
                      />
                      <label for="cb2">Детское кресло</label>
                    </div>

                    <div>
                      <input
                        id="cb3"
                        type="checkbox"
                        className="regular-checkbox"
                        checked={el.isRightWheel}
                        // onChange={handleChangeCB3}
                      />
                      <label for="cb3">Правый руль</label>
                    </div>
                  </div>
                  {window.screen.width > 1022 && (
                    <div className="order-list-admin__box__info__order__price">
                      {el.price} ₽
                    </div>
                  )}
                  <div className="order-list-admin__box__info__order__btn_container">
                    <div className="order-list-admin__box__info__order__button">
                      <button className="order-list-admin__box__info__order__button ready">
                        <img src={ButtonReady} /> Готово
                      </button>
                      <button className="order-list-admin__box__info__order__button cancel">
                        <img src={ButtonCancel} />
                        Отмена
                      </button>
                      <button className="order-list-admin__box__info__order__button change">
                        <img src={ButtonChange} />
                        Изменить
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="order-list-admin__box__info__pagination">
              <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={orderData.length}
                pageSize={PageSize}
                onPageChange={(page) => setCurrentPage(page)}
              />
            </div>
          </div>
        </div>
        <FooterAdmin />
      </div>
    </div>
  );
};
export default OrderList;
