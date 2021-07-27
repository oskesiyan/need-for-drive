import { useState } from "react";
import "./OrderDetails.scss";

const OrderDetails = (props) => {
  const [visibleButton, setVisibleButton] = useState(false);
  const onClikButton = () => {
    props.setCancel(true);
    setVisibleButton(true);
  };
  return (
    <div>
      <div className="order-info">
        <div className="order-info__order">Ваш заказ:</div>
        <ul className="order">
          {props.tab1 ||
          props.tab2 ||
          props.tab3 ||
          props.tab4 ||
          props.order ? (
            <ul className="test">
              {" "}
              <li className="order__city">
                <span className="order__info">
                  {props.city === null || props.city === "" ? "" : props.city}
                </span>
              </li>
              <li className="order__point">
                <span className="order__text">Пункт выдачи</span>
                <span className="order__info">
                  {props.point === null || props.point === ""
                    ? ""
                    : props.point}
                </span>
              </li>
            </ul>
          ) : (
            ""
          )}

          {props.tab2 || props.tab3 || props.tab4 || props.order ? (
            <li className="order__point">
              <span className="order__text">Модель</span>
              <span className="order__info">
                {props.model === null ? "" : props.model}
              </span>
            </li>
          ) : (
            ""
          )}
          {props.tab3 || props.tab4 || props.order ? (
            <ul className="test">
              <li className="order__point">
                <span className="order__text">Цвет</span>
                <span className="order__info">
                  {props.color === null ? "" : props.color}
                </span>
              </li>
              <li className="order__point">
                <span className="order__text">Длительность аренды</span>
                <span className="order__info">{props.dateTT}</span>
              </li>
              <li className="order__point">
                <span className="order__text">Тариф</span>
                <span className="order__info">
                  {props.rate === null ? "" : props.rate}
                </span>
              </li>
              {!props.fullPatrol ? (
                ""
              ) : (
                <li className="order__point">
                  <span className="order__text">
                    {!props.fullPatrol ? "" : "Полный бак"}
                  </span>
                  <span className="order__info">Да</span>
                </li>
              )}
              {!props.babyChair ? (
                ""
              ) : (
                <li className="order__point">
                  <span className="order__text">
                    {!props.babyChair ? "" : "Детское кресло"}
                  </span>
                  <span className="order__info">Да</span>
                </li>
              )}
              {!props.rightHD ? (
                ""
              ) : (
                <li className="order__point">
                  <span className="order__text">
                    {!props.rightHD ? "" : "Правый руль"}
                  </span>
                  <span className="order__info">Да</span>
                </li>
              )}
            </ul>
          ) : (
            ""
          )}
          {props.tab4 || props.tab3 || props.order ? (
            <li className="order__price">
              <b>Цена:</b> {props.costOrder} ₽
            </li>
          ) : (
            <li className="order__price">
              <b>Цена:</b> от {props.priceFrom} до {props.priceTo} ₽
            </li>
          )}

          <li className="order__price">
            {props.tab4 ? (
              <button
                className="order-info__button"
                onClick={() => props.setVisibleOrder(true)}
                disabled={
                  (props.point !== "") &
                    props.tab1 &
                    !props.tab2 &
                    !props.tab3 ||
                  (props.model !== undefined) &
                    props.tab2 &
                    !props.tab3 &
                    !props.tab1 ||
                  (props.color !== null) &
                    (props.rate !== "") &
                    !props.tab2 &
                    props.tab3 &
                    !props.tab1 ||
                  props.tab4
                    ? false
                    : true
                }
              >
                {props.buttonName}
              </button>
            ) : !props.order ? (
              <button
                className="order-info__button"
                onClick={() => props.setTabIndex(props.tabIndex + 1)}
                disabled={
                  (props.point !== "") &
                    props.tab1 &
                    !props.tab2 &
                    !props.tab3 ||
                  (props.model !== undefined) &
                    props.tab2 &
                    !props.tab3 &
                    !props.tab1 ||
                  (props.color !== null) &
                    (props.rate !== "") &
                    !props.tab2 &
                    props.tab3 &
                    !props.tab1 ||
                  props.tab4
                    ? false
                    : true
                }
              >
                {props.buttonName}
              </button>
            ) : (
              ""
            )}
            {props.order ? (
              <button
                className="order-info__button order"
                onClick={
                  () => onClikButton() //props.setCancel(true)
                }
                disabled={visibleButton}
              >
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
