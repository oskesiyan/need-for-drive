import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./react-tabs.scss";
import "./OrderPage.scss";
import mapOrder from "./../../img/Map_order.png";
import Select from "react-select";
import { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import Header from "../Header/Header";
import { getData, getDate, postData } from "./../../utils/index";
import OrderDetails from "./OrderDetails/OrderDatails";
import DatePicker from "react-datetime-picker";
import "./DateTimePicker.css";
import NavState from "../../context/NavState";
import MainMenu from "../SideBar/MainMenu";
import moment from "moment";

const OrderPage = () => {
  const history = useHistory();
  const [tabIndex, setTabIndex] = useState(0);
  const [visibleOrder, setVisibleOrder] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [isFetchingCars, setIsFetchingCars] = useState(false);
  const [costOrder, setCostOrder] = useState(0);
  const [orderId, setOrderId] = useState("");
  const [clickButtonOK, setClickButtonOK] = useState(false);
  // местоположение

  const [cityData, setCityData] = useState([]);
  const [city, setCity] = useState({ id: "", label: "" });
  const [pointData, setPointData] = useState([]);
  const [point, setPoint] = useState({ id: "", label: "" });
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedPoint, setSelectedPoint] = useState(null);

  const customStylesCity = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "none",
      color: "white",
      padding: 5,
      zIndex: 500,
      background: "black",
    }),
    control: () => ({
      width: 224,
      marginLeft: 224,
      marginTop: 27,
      textAlign: "end",
      "@media only screen and (max-width: 767px)": {
        marginLeft: 125,
      },
      "@media only screen and (max-width: 428px)": {
        marginTop: 0,
      },
    }),
    indicatorsContainer: () => ({
      borderBottom: "1px solid #999999",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      display: "none",
    }),
    menu: () => ({
      width: 224,
      marginLeft: 224,
      zIndex: 500,
      position: "absolute",
      "@media only screen and (max-width: 767px)": {
        marginLeft: 125,
      },
      "@media only screen and (max-width: 428px)": {
        marginTop: 0,
      },
    }),
    menuList: () => ({
      color: "black",
      borderBottom: "none",
      background: "white",
    }),
    valueContainer: () => ({
      fontSize: 14,
      textAlign: "start",
    }),
    clearIndicator: (prevStyle) => ({
      ...prevStyle,
      color: "#121212",
      display: "inherit",
      marginTop: -20,
      padding: 0,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };
  const customStylesPoint = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "none",
      color: "white",
      padding: 5,
      zIndex: -1,
      background: "black",
    }),
    control: () => ({
      width: 224,
      marginLeft: 224,
      marginTop: 3,
      textAlign: "end",
      zIndex: -1,
      "@media only screen and (max-width: 767px)": {
        marginLeft: 125,
      },
      "@media only screen and (max-width: 428px)": {
        marginTop: 0,
      },
    }),
    indicatorsContainer: () => ({
      zIndex: -1,
      borderBottom: "1px solid #999999",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      display: "none",
    }),
    menu: () => ({
      width: 224,
      marginLeft: 224,
      "@media only screen and (max-width: 767px)": {
        marginLeft: 125,
      },
      "@media only screen and (max-width: 428px)": {
        marginTop: 0,
      },
    }),
    valueContainer: () => ({
      zIndex: -1,
      fontSize: 14,
      textAlign: "start",
    }),
    Placeholder: () => ({
      zIndex: -1,
    }),
    clearIndicator: (prevStyle) => ({
      ...prevStyle,
      color: "#121212",
      display: "inherit",
      marginTop: -20,
      padding: 0,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";
      return { ...provided, opacity, transition };
    },
  };
  // Выбор модели
  const [selectedModel, setSelectedModel] = useState("");

  const [allCarsState, setAllCars] = useState(true);
  const [economyCarsState, setEconomyCars] = useState(false);
  const [premiumCarsState, setPremiumCars] = useState(false);

  const [allCarsData, setAllCarsData] = useState([]);
  const [CarsData, setCarsData] = useState([]);

  const handleChangeRB1 = () => {
    setAllCars(!allCarsState);
    if (economyCarsState) {
      setEconomyCars(!economyCarsState);
    }
    if (premiumCarsState) {
      setPremiumCars(!premiumCarsState);
    }
  };
  const handleChangeRB2 = () => {
    setEconomyCars(!economyCarsState);
    if (allCarsState) {
      setAllCars(!allCarsState);
    }
    if (premiumCarsState) {
      setPremiumCars(!premiumCarsState);
    }
  };
  const handleChangeRB3 = () => {
    setPremiumCars(!premiumCarsState);
    if (allCarsState) {
      setAllCars(!allCarsState);
    }
    if (economyCarsState) {
      setEconomyCars(!economyCarsState);
    }
  };
  // Дополнительно
  const [carsColorState, setCarsColor] = useState("Любой");
  const [rateState, setRateState] = useState("");

  const [fullPatrolState, setFullPatrolState] = useState(false);
  const [babyChairState, setBabyChairState] = useState(false);
  const [rightHDState, setRightHDState] = useState(false);
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  const handleChangeCB1 = () => {
    setFullPatrolState(!fullPatrolState);
    if (!fullPatrolState) {
      setCostOrder(costOrder + 500);
    } else {
      setCostOrder(costOrder - 500);
    }
  };
  const handleChangeCB2 = () => {
    setBabyChairState(!babyChairState);
    if (!babyChairState) {
      setCostOrder(costOrder + 200);
    } else {
      setCostOrder(costOrder - 200);
    }
  };
  const handleChangeCB3 = () => {
    setRightHDState(!rightHDState);
    if (!rightHDState) {
      setCostOrder(costOrder + 1600);
    } else {
      setCostOrder(costOrder - 1600);
    }
  };

  const [dateTT, setDateTT] = useState("");
  const [costPeriod, setCostPeriod] = useState(0);

  useEffect(() => {
    setDateTT("");
    setDateTT(getDate({ fromDate, toDate }));
  }, [fromDate, toDate]);

  useEffect(() => {
    if (rateState === "Поминутно") {
      if (fromDate !== "" && toDate !== "" && toDate - fromDate >= 0) {
        const minute = (toDate - fromDate) / 60000;
        const costMin = Math.round(minute * 7);
        setCostPeriod(costMin);
      }
    }
    if (rateState === "На сутки") {
      if (fromDate !== "" && toDate !== "" && toDate - fromDate >= 0) {
        const day = (toDate - fromDate) / (60 * 60 * 24 * 1000);
        const costDay = Math.round(day * 1999);
        setCostPeriod(costDay);
      }
    }
  }, [fromDate, toDate, rateState]);

  // Итого

  useEffect(async () => {
    let rateId = "";
    if (clickButtonOK) {
      if (rateState === "Поминутно") {
        rateId = "5fd91571935d4e0be16a3c44";
      } else {
        rateId = "5fd910f2935d4e0be16a3c40";
      }
      const data = {
        url: "https://api-factory.simbirsoft1.com/api/db/order",
        orderStatusId: "5e26a191099b810b946c5d89",
        cityId: selectedCity.id,
        pointId: selectedPoint.id,
        carId: selectedModel.id,
        color: carsColorState,
        dateFrom: moment(fromDate).valueOf(),
        dateTo: moment(toDate).valueOf(),
        price: costOrder + costPeriod,
        rate: rateId,
        isFullTank: fullPatrolState,
        isNeedChildChair: babyChairState,
        isRightWheel: rightHDState,
      };
      const result = await postData(data);
      setOrderId(result?.id);
    }
  }, [clickButtonOK]);

  useEffect(async () => {
    setIsFetching(true);
    const result1 = await getData(
      "http://api-factory.simbirsoft1.com/api/db/city"
    );
    setCityData(result1?.data?.data);
    const result2 = await getData(
      "http://api-factory.simbirsoft1.com/api/db/point"
    );
    setPointData(result2?.data?.data);
    setIsFetching(false);
  }, []);

  useEffect(() => {
    if (cityData) {
      const uniqueCity = cityData.map((el) => {
        return { id: el?.id, label: el?.name };
      });
      setCity(uniqueCity);
    }
  }, [cityData]);

  useEffect(() => {
    if (selectedCity && pointData) {
      const uniquePoint = pointData
        .filter((el) => el?.cityId?.id === selectedCity.id)
        .map((el) => {
          return { id: el?.id, label: el?.address };
        });
      const Point = new Set(uniquePoint);
      setPoint([...Point]);
    }
  }, [selectedCity]);

  useEffect(() => {
    if (selectedCity === null) {
      setSelectedPoint(null);
      setPoint({ id: "", label: "" });
    }
    setSelectedPoint(null);
  }, [selectedCity]);

  useEffect(async () => {
    setIsFetchingCars(true);
    if (allCarsData.length === 0) {
      const result = await getData(
        "http://api-factory.simbirsoft1.com/api/db/car"
      );
      setAllCarsData(result?.data?.data);
      setIsFetchingCars(false);
    }
  }, []);

  useEffect(() => {
    if (allCarsState) {
      setCarsData(allCarsData);
    }
    if (economyCarsState) {
      setCarsData(allCarsData.filter((el) => el.categoryId?.name === "Эконом"));
    }
    if (premiumCarsState) {
      setCarsData(allCarsData.filter((el) => el.categoryId?.name === "Люкс"));
    }
  }, [allCarsState, economyCarsState, premiumCarsState, allCarsData]);

  return (
    <div className="tabs-block">
      <NavState>
        <MainMenu />
      </NavState>
      <Header />
      <Tabs disableUpDownKeys="true" selectedIndex={tabIndex}>
        <TabList>
          <Tab onClick={() => setTabIndex(0)}>
            <div className="tabs-block__tab">
              <div>Местоположение</div>
              <div className="tabs-block__tab__vector"></div>
            </div>
          </Tab>
          <Tab onClick={() => (selectedPoint === null ? "" : setTabIndex(1))}>
            <div className="tabs-block__tab">
              <div>Модель</div>
              <div className="tabs-block__tab__vector"></div>
            </div>
          </Tab>
          <Tab onClick={() => (selectedModel === "" ? "" : setTabIndex(2))}>
            <div className="tabs-block__tab">
              <div>Дополнительно</div>
              <div className="tabs-block__tab__vector"></div>
            </div>
          </Tab>
          <Tab
            onClick={() =>
              (carsColorState !== null) & (rateState !== "")
                ? setTabIndex(3)
                : ""
            }
          >
            <div className="tabs-block__tab">
              <div>Итого</div>
            </div>
          </Tab>
        </TabList>
        {/* местоположение */}
        <TabPanel>
          {isFetching ? (
            <div className="loader__modal">
              <div className="loader"></div>
            </div>
          ) : null}
          <div className="tabs-blok__step1__position">
            <div>
              <div className="tabs-blok__step1__position__city">Город</div>
              <Select
                isClearable={true}
                value={selectedCity}
                onChange={setSelectedCity}
                options={city}
                styles={customStylesCity}
                placeholder="Начните вводить город"
              />
            </div>
            <div>
              <div className="tabs-blok__step1__position__point">
                Пункт выдачи{" "}
              </div>
              <Select
                isClearable={true}
                value={selectedPoint}
                onChange={setSelectedPoint}
                options={point}
                styles={customStylesPoint}
                placeholder="Начните вводить пункт"
              />
            </div>
            <div className="tabs-blok__step1__position__map">
              Выбрать на карте:
            </div>
            <img
              src={mapOrder}
              className="tabs-blok__step1__position__mapOrder"
            ></img>
          </div>
          <div>
            <OrderDetails
              city={selectedCity !== null ? selectedCity.label : ""}
              point={selectedPoint !== null ? selectedPoint.label : ""}
              model={selectedModel}
              priceFrom={18000}
              priceTo={20000}
              tab1={true}
              tab2={false}
              tab3={false}
              order={false}
              setTabIndex={setTabIndex}
              tabIndex={tabIndex}
              buttonName={"Выбрать модель"}
            />
          </div>
          {/* <Step1/> */}
        </TabPanel>
        {/* модель */}
        <TabPanel>
          {isFetchingCars ? (
            <div className="loader__modal">
              <div className="loader"></div>
            </div>
          ) : null}
          <div className="tabs-block__step2__radio">
            <input
              id="rb1"
              type="radio"
              value="allModel"
              name="model"
              checked={allCarsState}
              onChange={handleChangeRB1}
            />
            <label for="rb1">Все модели</label>
            <input
              id="rb2"
              type="radio"
              value="economy"
              name="model"
              checked={economyCarsState}
              onChange={handleChangeRB2}
            />
            <label for="rb2">Эконом</label>
            <input
              id="rb3"
              type="radio"
              value="premium"
              name="model"
              checked={premiumCarsState}
              onChange={handleChangeRB3}
            />
            <label for="rb3">Премиум </label>
          </div>
          <div className="tabs-block__step2-box">
            <div className="tabs-block__step2-row">
              {CarsData &&
                CarsData.map((el) => {
                  return (
                    <button
                      className="tabs-block__step2-item"
                      onClick={() => setSelectedModel(el)}
                    >
                      <div className="tabs-block__step2-item__name">
                        {el.name}
                      </div>
                      <div className="tabs-block__step2-item__price">
                        {el.priceMin}-{el.priceMax} ₽
                      </div>
                      <img
                        src={
                          "https://api-factory.simbirsoft1.com/" +
                          el?.thumbnail?.path
                        }
                        className="tabs-block__step2-item__img"
                      ></img>
                    </button>
                  );
                })}
            </div>
          </div>
          <div>
            <OrderDetails
              city={selectedCity !== null ? selectedCity.label : ""}
              point={selectedPoint !== null ? selectedPoint.label : ""}
              model={selectedModel.name}
              priceFrom={selectedModel.priceMin}
              priceTo={selectedModel.priceMax}
              tab1={false}
              tab2={true}
              tab3={false}
              order={false}
              setTabIndex={setTabIndex}
              tabIndex={tabIndex}
              buttonName={"Дополнительно"}
            />
          </div>
        </TabPanel>
        {/* дополнительно */}
        <TabPanel>
          <div className="tabs-block__step2__radio">
            <div className="tabs-block__step3-text">Цвет</div>
            <input
              id="rb1"
              type="radio"
              value="allColor"
              name="color"
              checked={carsColorState === "Любой"}
              onChange={() => setCarsColor("Любой")}
            />
            <label for="rb1">Любой</label>
            <input
              id="rb2"
              type="radio"
              value="red"
              name="color"
              checked={carsColorState === "Красный"}
              onChange={() => setCarsColor("Красный")}
            />
            <label for="rb2">Красный</label>
            <input
              id="rb3"
              type="radio"
              value="blue"
              name="color"
              checked={carsColorState === "Голубой"}
              onChange={() => setCarsColor("Голубой")}
            />
            <label for="rb3">Голубой</label>
          </div>
          <div className="tabs-block__step3__date">
            <div className="tabs-block__step3-text">Дата аренды</div>
            <label className="tabs-block__step3-label from">
              C
              <DatePicker
                value={fromDate}
                onChange={(date) => setFromDate(date)}
                calendarIcon={null}
                minDate={new Date()}
                format="dd.MM.yyyy HH.mm"
                isClockOpen={false}
                disableClock={true}
                dayPlaceholder="Введите дату и время"
                hourPlaceholder=""
                minutePlaceholder=""
                monthPlaceholder=""
                secondPlaceholder=""
                yearPlaceholder=""
              />
            </label>
            <label className="tabs-block__step3-label">
              По
              <DatePicker
                value={toDate}
                onChange={(date) => setToDate(date)}
                minDate={new Date()}
                calendarIcon={null}
                format="dd.MM.yyyy HH.mm"
                isClockOpen={false}
                disableClock={true}
                dayPlaceholder="Введите дату и время"
                hourPlaceholder=""
                minutePlaceholder=""
                monthPlaceholder=""
                secondPlaceholder=""
                yearPlaceholder=""
              />
            </label>
          </div>
          <div className="tabs-block__step3__radio">
            <div className="tabs-block__step3-text">Тариф</div>
            <input
              id="rb4"
              type="radio"
              value="min"
              name="rate"
              checked={rateState === "Поминутно"}
              onChange={() => setRateState("Поминутно")}
            />
            <label for="rb4">Поминутно,7₽ мин</label>
            <input
              id="rb5"
              type="radio"
              value="day"
              name="rate"
              checked={rateState === "На сутки"}
              onChange={() => setRateState("На сутки")}
            />
            <label for="rb5">На сутки,1999 ₽/сутки</label>
          </div>
          <div className="tabs-block__step3__checkbox">
            <div className="tabs-block__step3-text">Доп услуги</div>
            <div>
              <input
                id="cb1"
                type="checkbox"
                className="regular-checkbox"
                checked={fullPatrolState}
                onChange={handleChangeCB1}
              />
              <label for="cb1">Полный бак, 500р</label>
            </div>
            <div>
              <input
                id="cb2"
                type="checkbox"
                className="regular-checkbox"
                checked={babyChairState}
                onChange={handleChangeCB2}
              />
              <label for="cb2">Детское кресло, 200р</label>
            </div>
            <div>
              <input
                id="cb3"
                type="checkbox"
                className="regular-checkbox"
                checked={rightHDState}
                onChange={handleChangeCB3}
              />
              <label for="cb3">Правый руль, 1600р</label>
            </div>
          </div>
          <div>
            <OrderDetails
              city={selectedCity !== null ? selectedCity.label : ""}
              point={selectedPoint !== null ? selectedPoint.label : ""}
              model={selectedModel.name}
              color={carsColorState}
              rate={rateState}
              fullPatrol={fullPatrolState}
              babyChair={babyChairState}
              rightHD={rightHDState}
              dateTT={dateTT}
              priceFrom={selectedModel.priceMin}
              priceTo={selectedModel.priceMax}
              tab1={false}
              tab2={false}
              tab3={true}
              order={false}
              costOrder={costOrder + costPeriod}
              setTabIndex={setTabIndex}
              tabIndex={tabIndex}
              buttonName={"Итого"}
            />
          </div>
        </TabPanel>
        {/* итого */}
        <TabPanel>
          <div className="tabs-blok__step4">
            <div className="tabs-blok__step4__total">
              <div className="tabs-blok__step4__total__model">
                {selectedModel.name}
              </div>
              <div className="tabs-blok__step4__number">
                {selectedModel.number}
              </div>
              <div></div>
              <div>
                <b>Топливо</b> 100%
              </div>
              <div>
                <b>Доступна с </b>
                {fromDate === null
                  ? ""
                  : moment(new Date(fromDate)).format("DD.MM.YY HH:mm")}
              </div>
            </div>
            <img
              src={
                "https://api-factory.simbirsoft1.com/" +
                selectedModel?.thumbnail?.path
              }
              className="tabs-block__step4__img"
            ></img>
          </div>
          <div>
            <OrderDetails
              city={selectedCity !== null ? selectedCity.label : ""}
              point={selectedPoint !== null ? selectedPoint.label : ""}
              model={selectedModel.name}
              color={carsColorState}
              rate={rateState}
              fullPatrol={fullPatrolState}
              babyChair={babyChairState}
              rightHD={rightHDState}
              dateTT={dateTT}
              priceFrom={selectedModel.priceMin}
              priceTo={selectedModel.priceMax}
              tab4={true}
              order={false}
              costOrder={costOrder + costPeriod}
              setTabIndex={setTabIndex}
              tabIndex={tabIndex}
              buttonName={"Заказать"}
              setVisibleOrder={setVisibleOrder}
            />
          </div>
          {visibleOrder ? (
            <div className="tabs-block__step4__modal">
              <div>Подтвердить заказ</div>
              <div className="tabs-block__step4__modal__button">
                <button
                  className="tabs-block__step4__modal__button__ok"
                  onClick={() => setClickButtonOK(true)}
                >
                  Подтвердить
                </button>

                <button
                  className="tabs-block__step4__modal__button__cancel"
                  onClick={() => setVisibleOrder(false)}
                >
                  Вернуться
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
          {orderId !== "" ? history.push(`/confirmation/${orderId}`) : ""}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OrderPage;
