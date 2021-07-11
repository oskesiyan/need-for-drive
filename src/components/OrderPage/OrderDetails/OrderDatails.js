import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./OrderDetails.scss";

const OrderDetails = (props) => {
  const [dateTT, setDateTT] = useState("");
  const [costPeriod, setCostPeriod] = useState(0);
  const getDate = () => {
    setDateTT("");
    if (
      props.dateFrom !== "" &&
      props.dateTo !== "" &&
      props.dateTo - props.dateFrom >= 0
    ) {
      const dateDifference = props.dateTo - props.dateFrom;
      const totalSeconds = dateDifference / 1000;
      const days = Math.floor(totalSeconds / 86400);
      const hours = Math.floor((totalSeconds % 86400) / 3600);
      setDateTT(days + "д" + hours + "ч");
    }
  };

  useEffect(() => {
    getDate(props.dateFrom, props.dateTo);
  }, [props.dateFrom, props.dateTo]);

  useEffect(() => {
    if (props.rate === "Поминутно") {
      if (
        props.dateFrom !== "" &&
        props.dateTo !== "" &&
        props.dateTo - props.dateFrom >= 0
      ) {
        const minute = (props.dateTo - props.dateFrom) / 60000;
        const costMin = Math.round(minute * 7);
        setCostPeriod(costMin);
      }
    }
    if (props.rate === "На сутки") {
      if (
        props.dateFrom !== "" &&
        props.dateTo !== "" &&
        props.dateTo - props.dateFrom >= 0
      ) {
        const day = (props.dateTo - props.dateFrom) / (60 * 60 * 24 * 1000);
        const costDay = Math.round(day * 1999);
        setCostPeriod(costDay);
      }
    }
  }, [props.dateFrom, props.dateTo, props.rate]);

  return (
    <div>
      <div className="order-info">
        <div className="order-info__order">Ваш заказ:</div>
        <ul className="order">
          {props.tab1 === true ||
          props.tab2 === true ||
          props.tab3 === true ||
          props.tab4 === true ||
          props.order === true ? (
            <ul className="test">
              {" "}
              <li className="order__city">
                <span className="order__info">
                  {props.city === null ? "" : props.city.label}
                </span>
              </li>
              <li className="order__point">
                <span className="order__text">Пункт выдачи</span>
                <span className="order__info">
                  {props.point === null ? "" : props.point.label}
                </span>
              </li>
            </ul>
          ) : (
            ""
          )}

          {props.tab2 === true ||
          props.tab3 === true ||
          props.tab4 === true ||
          props.order === true ? (
            <li className="order__point">
              <span className="order__text">Модель</span>
              <span className="order__info">
                {props.model === null ? "" : props.model}
              </span>
            </li>
          ) : (
            ""
          )}
          {props.tab3 === true ||
          props.tab4 === true ||
          props.order === true ? (
            <ul className="test">
              <li className="order__point">
                <span className="order__text">Цвет</span>
                <span className="order__info">
                  {props.color === null ? "" : props.color}
                </span>
              </li>
              <li className="order__point">
                <span className="order__text">Длительность аренды</span>
                <span className="order__info">{dateTT}</span>
              </li>
              <li className="order__point">
                <span className="order__text">Тариф</span>
                <span className="order__info">
                  {props.rate === null ? "" : props.rate}
                </span>
              </li>
              {props.fullPatrol === false ? (
                ""
              ) : (
                <li className="order__point">
                  <span className="order__text">
                    {props.fullPatrol === false ? "" : "Полный бак"}
                  </span>
                  <span className="order__info">Да</span>
                </li>
              )}
              {props.babyChair === false ? (
                ""
              ) : (
                <li className="order__point">
                  <span className="order__text">
                    {props.babyChair === false ? "" : "Детское кресло"}
                  </span>
                  <span className="order__info">Да</span>
                </li>
              )}
              {props.rightHD === false ? (
                ""
              ) : (
                <li className="order__point">
                  <span className="order__text">
                    {props.rightHD === false ? "" : "Правый руль"}
                  </span>
                  <span className="order__info">Да</span>
                </li>
              )}
            </ul>
          ) : (
            ""
          )}
          {props.tab4 === true ||
          props.tab3 === true ||
          props.order === true ? (
            <li className="order__price">
              <b>Цена:</b> {props.costOrder + costPeriod} ₽
            </li>
          ) : (
            <li className="order__price">
              <b>Цена:</b> от {props.priceFrom} до {props.priceTo} ₽
            </li>
          )}

          <li className="order__price">
            {props.tab4 === true ? (
              <button
                className="order-info__button"
                onClick={() => props.setVisibleOrder(true)}
                disabled={
                  (props.point !== null) &
                    (props.tab1 === true) &
                    (props.tab2 === false) &
                    (props.tab3 === false) ||
                  (props.model !== undefined) &
                    (props.tab2 === true) &
                    (props.tab3 === false) &
                    (props.tab1 === false) ||
                  (props.color !== null) &
                    (props.rate !== "") &
                    (props.tab2 === false) &
                    (props.tab3 === true) &
                    (props.tab1 === false) ||
                  props.tab4 === true
                    ? false
                    : true
                }
              >
                {props.buttonName}
              </button>
            ) : props.order === false ? (
              <button
                className="order-info__button"
                onClick={() => props.setTabIndex(props.tabIndex + 1)}
                disabled={
                  (props.point !== null) &
                    (props.tab1 === true) &
                    (props.tab2 === false) &
                    (props.tab3 === false) ||
                  (props.model !== undefined) &
                    (props.tab2 === true) &
                    (props.tab3 === false) &
                    (props.tab1 === false) ||
                  (props.color !== null) &
                    (props.rate !== "") &
                    (props.tab2 === false) &
                    (props.tab3 === true) &
                    (props.tab1 === false) ||
                  props.tab4 === true
                    ? false
                    : true
                }
              >
                {props.buttonName}
              </button>
            ) : (
              ""
            )}
            {props.order === true ? (
              <button className="order-info__button order">
                {props.buttonName}
              </button>
            ) : (
              ""
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OrderDetails;
