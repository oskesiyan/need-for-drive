import "./OrderDetails.scss";

const OrderDetails = (props) => {
  return (
    <div className="order-info">
      <div className="order-info__order">Ваш заказ:</div>
      <ul className="order">
        {props.tab1 === true || props.tab2 === true || props.tab3 === true ? (
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

        {props.tab2 === true || props.tab3 === true ? (
          <li className="order__point">
            <span className="order__text">Модель</span>
            <span className="order__info">
              {props.model === null ? "" : props.model}
            </span>
          </li>
        ) : (
          ""
        )}
        {props.tab3 === true ? (
          <ul className="test">
            <li className="order__point">
              <span className="order__text">Цвет</span>
              <span className="order__info">
                {props.color === null ? "" : props.color}
              </span>
            </li>
            <li className="order__point">
              <span className="order__text">Длительность аренды</span>
              <span className="order__info"></span>
            </li>
            <li className="order__point">
              <span className="order__text">Тариф</span>
              <span className="order__info">
                {props.rate === null ? "" : props.rate}
              </span>
            </li>
            <li className="order__point">
              <span className="order__text">Цена:</span>
              <span className="order__info">от 8000 до 12000 ₽</span>
            </li>
            {props.fullPatrol === false ? (
              ""
            ) : (
              <li className="order__point">
                <span className="order__text">
                  {props.fullPatrol === false ? "" : "Полный бак"}
                </span>
                <span className="order__info">да</span>
              </li>
            )}
            {props.babyChair === false ? (
              ""
            ) : (
              <li className="order__point">
                <span className="order__text">
                  {props.babyChair === false ? "" : "Детское кресло"}
                </span>
                <span className="order__info">да</span>
              </li>
            )}
            {props.rightHD === false ? (
              ""
            ) : (
              <li className="order__point">
                <span className="order__text">
                  {props.rightHD === false ? "" : "Правый руль"}
                </span>
                <span className="order__info">да</span>
              </li>
            )}
          </ul>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
};

export default OrderDetails;
