import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../Header/Header";
import OrderDetails from "../OrderDetails/OrderDatails";
import "./ConfirmOrder.scss";

const ConfirmOrder = (props) => {
  return (
    <div className="registration-order">
      <Header />
      <div className="registration-order__details">
        <div className="registration-order__details__text">Заказ номер</div>
      </div>
      <div className="registration-order__info">
        <div className="tabs-blok__step4__total">
          <div className="tabs-blok__step4__total__text">
            Ваш заказ подтвержден
          </div>
          <div className="tabs-blok__step4__total__model">
            {/* {selectedModel.name} */}
          </div>
          <div className="tabs-blok__step4__number">
            {/* {selectedModel.number} */}
          </div>
          <div></div>
          <div>
            <b>Топливо</b> 100%
          </div>
          <div>
            <b>Доступна с </b>
            {/* {fromDate === null
        ? ""
        : fromDate.getDate() +
          "." +
          fromDate.getMonth() +
          "." +
          fromDate.getFullYear() +
          " " +
          fromDate.getHours() +
          ":" +
          fromDate.getMinutes()} */}
          </div>
        </div>
        <img
          // src={
          //   "https://api-factory.simbirsoft1.com/" +
          //   selectedModel?.thumbnail?.path
          // }
          className="tabs-block__step4__img"
        ></img>
      </div>
      <OrderDetails
        city={"selectedCity"}
        point={"selectedPoint"}
        model={"selectedModel.name"}
        color={"carsColorState"}
        rate={"rateState"}
        fullPatrol={"fullPatrolState"}
        babyChair={"babyChairState"}
        rightHD={"rightHDState"}
        dateFrom={new Date()}
        dateTo={new Date()}
        priceFrom={"1000"}
        priceTo={"2000"}
        buttonName={"Отменить"}
        order={true}
      />
    </div>
  );
};

export default ConfirmOrder;
