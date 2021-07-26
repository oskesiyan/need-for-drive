import { useState, useEffect } from "react";
import NavState from "../../../context/NavState";
import Header from "../../Header/Header";
import MainMenu from "../../SideBar/MainMenu";
import OrderDetails from "../OrderDetails/OrderDatails";
import "./ConfirmOrder.scss";
import { useHistory } from "react-router";
import { getData, getDate, putData } from "../../../utils";
import moment from "moment";

const ConfirmOrder = (props) => {
  const history = useHistory();
  const [orderData, setOrderData] = useState("");
  const [period, setPeriod] = useState("");
  const [cancel, setCancel] = useState(false);
  const currentId = history.location.pathname.split("confirmation/")[1];
  useEffect(async () => {
    const result = await getData(
      `http://api-factory.simbirsoft1.com/api/db/order/${currentId}`
    );
    setOrderData(result?.data?.data);
    const fromDate = new Date(result?.data?.data?.dateFrom);
    const toDate = new Date(result?.data?.data?.dateTo);
    setPeriod(getDate({ fromDate, toDate }));
  }, []);

  useEffect(async () => {
    if (cancel === true) {
      const data = {
        url: `https://api-factory.simbirsoft1.com/api/db/order/${currentId}`,
        orderStatusId: "5e26a1f5099b810b946c5d8c",
      };
      const result = await putData(data);
    }
  }, [cancel]);

  return (
    <div className="registration-order">
      <NavState>
        <MainMenu />
      </NavState>
      <Header />
      <div className="registration-order__details">
        <div className="registration-order__details__text">
          Заказ номер {orderData.id}
        </div>
      </div>
      <div className="registration-order__info">
        <div className="tabs-blok__step4__total">
          <div className="tabs-blok__step4__total__text">
            Ваш заказ {cancel === true ? "отменен" : "подтвержден"}
          </div>
          <div className="tabs-blok__step4__total__model">
            {orderData.carId?.name}
          </div>
          <div className="tabs-blok__step4__number">
            {orderData.carId?.number}
          </div>
          <div></div>
          <div>
            <b>Топливо</b> 100%
          </div>
          <div>
            <b>Доступна с </b>
            {moment(new Date(orderData.dateFrom)).format("DD.MM.YY HH:mm")}
          </div>
        </div>
        <img
          src={
            "https://api-factory.simbirsoft1.com/" +
            orderData.carId?.thumbnail?.path
          }
          className="tabs-block__step4__img"
        ></img>
      </div>
      {orderData ? (
        <OrderDetails
          city={orderData.cityId?.name}
          point={orderData.pointId?.address}
          model={orderData.carId?.name}
          color={orderData.color}
          rate={
            (orderData.rateId = "5fd91571935d4e0be16a3c44"
              ? "Поминутно"
              : "На сутки")
          }
          fullPatrol={orderData.isFullTank}
          babyChair={orderData.isNeedChildChair}
          rightHD={orderData.isRightWheel}
          dateTT={period}
          priceFrom={"1000"}
          priceTo={"2000"}
          costOrder={orderData.price}
          buttonName={"Отменить"}
          order={true}
          setCancel={setCancel}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default ConfirmOrder;
