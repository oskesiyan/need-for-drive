import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./react-tabs.scss";
import "./OrderPage.scss";
import mapOrder from "./../../img/Map_order.png";
import "react-autocomplete";
import "react-textfield";
import Select from "react-select";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import { getData } from "./../../utils/index";
import DatePicker, { registerLocale } from "react-datepicker";
import "./datepicker.scss";
import "./mixins.scss";
import "./variables.scss";
import OrderDetails from "./OrderDetails/OrderDatails";
import ru from "date-fns/locale/ru";
registerLocale("ru", ru);

const OrderPage = () => {
  const [tabIndex, setTabIndex] = useState(0);
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
      borderBottom: "1px dotted pink",
      color: state.isSelected ? "red" : "blue",
      padding: 20,
    }),
    control: () => ({
      width: 224,
      marginLeft: 224,
      marginTop: 27,
      textAlign: "end",
    }),
    indicatorsContainer: () => ({
      borderBottom: "1px solid #999999",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      display: "none", // Custom colour
    }),
    menu: () => ({
      width: 224, // Custom colour
      marginLeft: 224,
      color: "black",
      borderBottom: "1px solid black",
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
      borderBottom: "1px dotted pink",
      color: state.isSelected ? "red" : "blue",
      padding: 20,
    }),
    control: () => ({
      width: 224,
      marginLeft: 224,
      marginTop: 3,
      textAlign: "end",
    }),
    indicatorsContainer: () => ({
      borderBottom: "1px solid #999999",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      display: "none", // Custom colour
    }),
    menu: () => ({
      width: 224, // Custom colour
      marginLeft: 224,
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
  // Выбор модели
  const [selectedModel, setSelectedModel] = useState(null);

  const [allCarsState, setAllCars] = useState(false);
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
  const [allColorState, setAllColor] = useState(false);
  const [redColorState, setRedColor] = useState(false);
  const [blueColorState, setBlueColor] = useState(false);
  const [carsColorState, setCarsColor] = useState(null);
  const [minRateState, setMinRate] = useState(false);
  const [dayRateState, setDayRate] = useState(false);
  const [rateState, setRateState] = useState("");

  const [fullPatrolState, setFullPatrolState] = useState(false);
  const [babyChairState, setBabyChairState] = useState(false);
  const [rightHDState, setRightHDState] = useState(false);

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  let handleColor = (time) => {
    return time.getHours() > 12 ? "text-success" : "text-error";
  };
  const handleChangeRBColor1 = () => {
    setAllColor(!allColorState);
    if (redColorState) {
      setRedColor(!redColorState);
    }
    if (blueColorState) {
      setBlueColor(!blueColorState);
    }
  };
  const handleChangeRBColor2 = () => {
    setRedColor(!redColorState);
    if (allColorState) {
      setAllColor(!allColorState);
    }
    if (blueColorState) {
      setBlueColor(!blueColorState);
    }
  };
  const handleChangeRBColor3 = () => {
    setBlueColor(!blueColorState);
    if (allColorState) {
      setAllColor(!allColorState);
    }
    if (redColorState) {
      setRedColor(!redColorState);
    }
  };
  const handleChangeRBRateMin = () => {
    debugger;
    setMinRate(!minRateState);
    if (dayRateState) {
      setDayRate(!dayRateState);
    }
  };
  const handleChangeRBRateDay = () => {
    setDayRate(!dayRateState);
    if (minRateState) {
      setMinRate(!minRateState);
    }
  };
  const handleChangeCB1 = () => {
    setFullPatrolState(!fullPatrolState);
  };
  const handleChangeCB2 = () => {
    setBabyChairState(!babyChairState);
  };
  const handleChangeCB3 = () => {
    setRightHDState(!rightHDState);
  };

  // Итого

  useEffect(async () => {
    const result1 = await getData(
      "http://api-factory.simbirsoft1.com/api/db/city"
    );
    setCityData(result1?.data?.data);
    const result2 = await getData(
      "http://api-factory.simbirsoft1.com/api/db/point"
    );
    setPointData(result2?.data?.data);
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
    debugger;
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

  useEffect(async () => {
    if (allCarsData.length === 0) {
      const result = await getData(
        "http://api-factory.simbirsoft1.com/api/db/car"
      );
      setAllCarsData(result?.data?.data);
    }
  }, []);

  useEffect(() => {
    if (allCarsState) {
      debugger;
      setCarsData(allCarsData);
    }
    if (economyCarsState) {
      setCarsData(allCarsData.filter((el) => el.categoryId?.name === "Эконом"));
    }
    if (premiumCarsState) {
      setCarsData(allCarsData.filter((el) => el.categoryId?.name === "Люкс"));
    }
  }, [allCarsState, economyCarsState, premiumCarsState]);

  useEffect(() => {
    if (allColorState) {
      setCarsColor("Любой");
    }
    if (redColorState) {
      setCarsColor("Красный");
    }
    if (blueColorState) {
      setCarsColor("Голубой");
    }
  }, [allColorState, redColorState, blueColorState]);

  useEffect(() => {
    if (minRateState) {
      setRateState("Поминутно");
    }
    if (dayRateState) {
      setRateState("На сутки");
    }
  }, [minRateState, dayRateState]);

  return (
    <div className="tabs-block">
      <Header />
      <Tabs
        disableUpDownKeys="true"
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList>
          <Tab>
            <div className="tabs-block__tab">
              <div>Местоположение</div>
              <div className="tabs-block__tab__vector"></div>
            </div>
          </Tab>
          <Tab>
            <div className="tabs-block__tab">
              <div>Модель</div>
              <div className="tabs-block__tab__vector"></div>
            </div>
          </Tab>
          <Tab>
            <div className="tabs-block__tab">
              <div>Дополнительно</div>
              <div className="tabs-block__tab__vector"></div>
            </div>
          </Tab>
          <Tab>
            <div className="tabs-block__tab">
              <div>Итого</div>
            </div>
          </Tab>
        </TabList>
        {/* местоположение */}
        <TabPanel>
          <div className="tabs-blok__step1__position">
            <div className="tabs-blok__step1__position__city">Город</div>
            <Select
              isClearable={true}
              defaultValue={selectedCity}
              onChange={setSelectedCity}
              options={city}
              styles={customStylesCity}
              placeholder="Начните вводить город"
            />
            <div className="tabs-blok__step1__position__point">
              Пункт выдачи{" "}
            </div>
            <Select
              isClearable={true}
              defaultValue={selectedPoint}
              onChange={setSelectedPoint}
              options={point}
              styles={customStylesPoint}
              placeholder="Начните вводить пункт"
            />
            <div className="tabs-blok__step1__position__map">
              Выбрать на карте:
            </div>
            <img
              src={mapOrder}
              className="tabs-blok__step1__position__mapOrder"
            ></img>
          </div>
          <button
            className="tabs-blok__step1__order-info__button"
            onClick={() => setTabIndex(tabIndex + 1)}
            disabled={selectedPoint === null ? true : false}
          >
            Выбрать модель
          </button>
          <OrderDetails
            city={selectedCity}
            point={selectedPoint}
            model={selectedModel}
            tab1={true}
            tab2={false}
          />
          {/* <Step1/> */}
        </TabPanel>
        {/* модель */}
        <TabPanel>
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
          <div className="tabs-block__step2-row">
            {CarsData &&
              CarsData.map((el) => {
                return (
                  <div
                    className="tabs-block__step2-item"
                    onClick={() => setSelectedModel(el.name)}
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
                      width="256"
                      height="116.36"
                      className="tabs-block__step2-item__img"
                    ></img>
                  </div>
                );
              })}
          </div>
          <button
            className="tabs-blok__step1__order-info__button"
            onClick={() => setTabIndex(tabIndex + 1)}
            disabled={selectedModel === null ? true : false}
          >
            Дополнительно
          </button>
          <OrderDetails
            city={selectedCity}
            point={selectedPoint}
            model={selectedModel}
            tab2={true}
          />
        </TabPanel>
        {/* дополнительно */}
        <TabPanel>
          <div className="tabs-block__step2__radio">
            <div>Цвет</div>
            <input
              id="rb1"
              type="radio"
              value="allColor"
              name="color"
              checked={allColorState}
              onChange={handleChangeRBColor1}
            />
            <label for="rb1">Любой</label>
            <input
              id="rb2"
              type="radio"
              value="red"
              name="color"
              checked={redColorState}
              onChange={handleChangeRBColor2}
            />
            <label for="rb2">Красный</label>
            <input
              id="rb3"
              type="radio"
              value="blue"
              name="color"
              checked={blueColorState}
              onChange={handleChangeRBColor3}
            />
            <label for="rb3">Голубой</label>
          </div>
          <div className="tabs-block__step3__date">
            <div>Дата аренды</div>
            <label>
              C
              <DatePicker
                selected={fromDate}
                onChange={(date) => setFromDate(date)}
                dateFormat="dd.MM.yyyy hh.mm"
                isClearable
                placeholderText="Введите дату и время"
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                showTimeSelect
                dropdownMode="select"
                // locale="ru"
              />
            </label>
            <label>
              По
              <DatePicker
                selected={toDate}
                onChange={(date) => setToDate(date)}
                dateFormat="dd.MM.yyyy hh.mm"
                isClearable
                placeholderText="Введите дату и время"
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                showTimeSelect
                dropdownMode="select"
                // locale="ru"
              />
            </label>
          </div>
          <div className="tabs-block__step3__radio">
            <div>Тариф</div>
            <input
              id="rb4"
              type="radio"
              value="min"
              name="rate"
              checked={minRateState}
              onChange={handleChangeRBRateMin}
            />
            <label for="rb4">Поминутно,7₽ мин</label>
            <input
              id="rb5"
              type="radio"
              value="day"
              name="rate"
              checked={dayRateState}
              onChange={handleChangeRBRateDay}
            />
            <label for="rb5">На сутки,1999 ₽/сутки</label>
          </div>
          <div className="tabs-block__step3__checkbox">
            <div>Доп услуги</div>
            <label>
              <input
                type="checkbox"
                className="regular-checkbox"
                checked={fullPatrolState}
                onChange={handleChangeCB1}
              />
              Полный бак, 500р
            </label>
            <label>
              <input
                type="checkbox"
                className="regular-checkbox"
                checked={babyChairState}
                onChange={handleChangeCB2}
              />
              Детское кресло, 200р
            </label>
            <label>
              <input
                type="checkbox"
                className="regular-checkbox"
                checked={rightHDState}
                onChange={handleChangeCB3}
              />
              Правый руль, 1600р
            </label>
          </div>
          <OrderDetails
            city={selectedCity}
            point={selectedPoint}
            model={selectedModel}
            color={carsColorState}
            rate={rateState}
            fullPatrol={fullPatrolState}
            babyChair={babyChairState}
            rightHD={rightHDState}
            tab3={true}
          />
          <button
            className="tabs-blok__step1__order-info__button"
            // onClick={() => setTabIndex(tabIndex + 1)}
            // disabled={selectedModel === null ? true : false}
          >
            Итого
          </button>
        </TabPanel>
        {/* итого */}
        <TabPanel>
          <OrderDetails
            city={selectedCity}
            point={selectedPoint}
            model={selectedModel}
            color={carsColorState}
            rate={rateState}
            fullPatrol={fullPatrolState}
            babyChair={babyChairState}
            rightHD={rightHDState}
            tab3={true}
          />
          <button
            className="tabs-blok__step1__order-info__button"
            // onClick={() => setTabIndex(tabIndex + 1)}
            // disabled={selectedModel === null ? true : false}
          >
            Заказать
          </button>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OrderPage;
