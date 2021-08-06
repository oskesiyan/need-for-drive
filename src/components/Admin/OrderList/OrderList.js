import FooterAdmin from "../FooterAdmin/FooterAdmin";
import HeaderAdmin from "../HeaderAdmin/HeaderAdmin";
import MenuAdmin from "../MenuAdmin/MenuAdmin";
import "./OrderList.scss";
import Dropdown from "react-dropdown";
import "./style.scss";
import "./../StyleAdmin.scss";
import { useEffect, useState } from "react";
import { getDataList } from "../../../utils";
import Pagination from "../../Paginator/Pagination";
import { useMemo } from "react";
import moment from "moment";
import BtnActions from "../BtnActions/BtnActions";

let PageSize = 1;

const OrderList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const filterPeriod = ["За неделю", "За месяц", "За год"];
  const filterModel = ["Elantra", "Ford", "Lada"];
  const filterCity = ["Ульяновск", "Санкт-Петербугр", "Краснодар"];
  const filterStatus = ["В процессе", "Новое", "Удалено"];
  const [orderData, setOrderData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return orderData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, orderData]);

  useEffect(async () => {
    setIsFetching(true);
    const result = await getDataList(
      "http://api-factory.simbirsoft1.com/api/db/order?limit=200"
    );
    setOrderData(result?.data?.data);
    setIsFetching(false);
  }, []);

  return (
    <div className="list-admin">
      <MenuAdmin />
      <div className="admin__header-footer">
        <HeaderAdmin />
        {isFetching ? (
          <div className="admin-loader__modal">
            <div className="admin-loader"></div>
          </div>
        ) : (
          <div className="list-admin__box">
            <div className="list-admin__box__text">Заказы</div>
            <div className="list-admin__box__info">
              <div className="list-admin__box__info__selection">
                <div className="list-admin__box__info__selection__dropdown">
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
                <button className="list-admin__box__info__selection__button">
                  Применить
                </button>
              </div>

              {currentTableData.map((el) => {
                return (
                  <div key={el?.id} className="list-admin__box__info__order">
                    <img
                      src={
                        "https://api-factory.simbirsoft1.com" +
                        el?.carId?.thumbnail?.path
                      }
                      className="list-admin__box__info__order__img"
                    />
                    <div className="list-admin__box__info__order__details">
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
                        {moment(new Date(el.dateFrom)).format("DD.MM.YY HH:mm")}
                        -{moment(new Date(el.dateTo)).format("DD.MM.YY HH:mm")}
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
                          defaultChecked={el.isFullTank}
                        />
                        <label htmlFor="cb1">Полный бак</label>
                      </div>

                      <div>
                        <input
                          id="cb2"
                          type="checkbox"
                          className="regular-checkbox"
                          defaultChecked={el.isNeedChildChair}
                        />
                        <label htmlFor="cb2">Детское кресло</label>
                      </div>

                      <div>
                        <input
                          id="cb3"
                          type="checkbox"
                          className="regular-checkbox"
                          defaultChecked={el.isRightWheel}
                        />
                        <label htmlFor="cb3">Правый руль</label>
                      </div>
                    </div>
                    {window.screen.width > 1022 && (
                      <div className="order-list-admin__box__info__order__price">
                        {el.price} ₽
                      </div>
                    )}
                    <BtnActions />
                  </div>
                );
              })}

              <div className="admin__pagination">
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
        )}
        <FooterAdmin />
      </div>
    </div>
  );
};
export default OrderList;
