// import { render } from '@testing-library/react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './react-tabs.scss';
import './OrderPage.scss';
import mapOrder from './../../img/Map_order.png';
import 'react-autocomplete';
import  'react-textfield';
import Select from 'react-select';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Step1 from './Step1/Step1';
import {getData} from './../../utils/index'

const OrderPage = () => {
const city = [
        { value: '1', label: 'Краснодар' },
        { value: '2', label: 'Ульяновск' },
        { value: '3', label: 'Москва' },
        { value: '3', label: 'Анапа' },
];
const point = [
  { value: '1', label: 'Промышленная 25' },
  { value: '1', label: 'Дальний 11' },
  { value: '3', label: 'Красная 89' },
  { value: '3', label: 'Садовый 2' },
];
const [selectedCity, setSelectedCity] = useState(null);
const [selectedPoint, setSelectedPoint] = useState(null);
const [selectedModel, setSelectedModel] = useState(null);

const [allCarsState, setAllCars] = useState(false);
const [economyCarsState, setEconomyCars] = useState(false);
const [premiumCarsState, setPremiumCars] = useState(false);

const [allCarsData, setAllCarsData] = useState([]);
const [CarsData, setCarsData] = useState([]);


const handleChangeRB1 = () => {
  setAllCars(!allCarsState)  
  if (economyCarsState){setEconomyCars(!economyCarsState)}
  if (premiumCarsState){setPremiumCars(!premiumCarsState)}
}
const handleChangeRB2 = () => { 
  setEconomyCars(!economyCarsState)
  if (allCarsState){setAllCars(!allCarsState)}
  if (premiumCarsState){setPremiumCars(!premiumCarsState)}  
}
const handleChangeRB3 = () => { 
  setPremiumCars(!premiumCarsState)
  if (allCarsState){setAllCars(!allCarsState)}
  if (economyCarsState){setEconomyCars(!economyCarsState)}
}


const customStylesCity = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px dotted pink',
      color: state.isSelected ? 'red' : 'blue',
      padding: 20,
      
    }),
    control: () => ({
      width: 224,
      marginLeft:224,
      marginTop: 27,
      textAlign: 'end',
    }),
    indicatorsContainer: () => ({
        borderBottom: '1px solid #999999',
      }),
    indicatorSeparator: () => ({
       display: 'none',
    }),
    dropdownIndicator: base => ({
        ...base,
        display: 'none' // Custom colour
      }),
      menu: () => ({
        width: 224, // Custom colour
        marginLeft:224,
      }),
      valueContainer: () => ({
        fontSize:14,
        textAlign: 'start',
      }),
      clearIndicator: (prevStyle) => ({
        ...prevStyle,
        color: '#121212',
        display: 'inherit',
        marginTop: -20,
        padding: 0,
      }),
        singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';
  
      return { ...provided, opacity, transition };
    }
  }
const customStylesPoint = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? 'red' : 'blue',
    padding: 20,
    
  }),
  control: () => ({
    width: 224,
    marginLeft:224,
    marginTop: 3,
    textAlign: 'end',
  }),
  indicatorsContainer: () => ({
      borderBottom: '1px solid #999999',
    }),
  indicatorSeparator: () => ({
      display: 'none',
  }),
  dropdownIndicator: base => ({
      ...base,
      display: 'none' // Custom colour
    }),
    menu: () => ({
      width: 224, // Custom colour
      marginLeft:224,
    }),
    valueContainer: () => ({
      fontSize:14,
      textAlign: 'start',
    }),
    clearIndicator: (prevStyle) => ({
      ...prevStyle,
      color: '#121212',
      display: 'inherit',
      marginTop: -20,
      padding: 0,
    }),
      singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}

useEffect (async () => {
 debugger 
  if (allCarsData.length === 0){
    const result = await getData("https://cors-anywhere.herokuapp.com/http://api-factory.simbirsoft1.com/api/db/car");
    setAllCarsData(result?.data?.data)
  }
  // if (allCarsState){
  //   debugger
  //   setCarsData(allCarsData)
  // }
  // if (economyCarsState){
  //   setCarsData(allCarsData.filter(el => el.categoryId?.name === 'Эконом'))
  // }
  // if (premiumCarsState){
  //   setCarsData(allCarsData.filter(el => el.categoryId?.name === 'Люкс'))
  // }

},[])

useEffect (() => {  
   if (allCarsState){
     debugger
     setCarsData(allCarsData)
   }
   if (economyCarsState){
     setCarsData(allCarsData.filter(el => el.categoryId?.name === 'Эконом'))
   }
   if (premiumCarsState){
     setCarsData(allCarsData.filter(el => el.categoryId?.name === 'Люкс'))
   }
 
 },[allCarsState,economyCarsState,premiumCarsState])



return (
    <div className = 'tabs-block'>
        <Header/>
        {/* <div className = 'tabs-block__line'></div>         */}
        <Tabs disableUpDownKeys = 'true'>
                <TabList>
                <Tab>
                    <div className = 'tabs-block__tab'>
                        <div>Местоположение</div>
                        <div className = 'tabs-block__tab__vector'></div>
                    </div>
                </Tab>
                <Tab>
                    <div className = 'tabs-block__tab'>
                        <div>Модель</div>
                        <div className = 'tabs-block__tab__vector'></div>
                    </div>
                </Tab>
                <Tab>
                    <div className = 'tabs-block__tab'>
                        <div>Дополнительно</div>
                        <div className = 'tabs-block__tab__vector'></div>
                    </div>
                </Tab>
                <Tab>
                    <div className = 'tabs-block__tab'>
                        <div>Итого</div>
                    </div>
                </Tab>
                </TabList>
                {/* местоположение */}
                <TabPanel>                    
                <div className = 'tabs-blok__step1__position'>
                    <div className = 'tabs-blok__step1__position__city'>Город</div>
                    <Select
                        isClearable = {true}
                        defaultValue={selectedCity}
                        onChange={setSelectedCity}
                        options={city}
                        styles={customStylesCity}
                        placeholder = 'Начните вводить город'
                    />
                    <div className = 'tabs-blok__step1__position__point'>Пункт выдачи </div>
                    <Select
                        isClearable = {true}
                        defaultValue={selectedPoint}
                        onChange={setSelectedPoint}
                        options={point}
                        styles={customStylesPoint}
                        placeholder = 'Начните вводить пункт'
                    />
                    <div className = 'tabs-blok__step1__position__map'>Выбрать на карте:</div>
                    <img src = {mapOrder} className = 'tabs-blok__step1__position__mapOrder'></img>
                </div>
                <div className = 'tabs-blok__step1__order-info'>
                    <div className = 'tabs-blok__step1__order-info__order'>Ваш заказ:</div>
                    <div className = 'tabs-blok__step1__order-info__point'>Пункт выдачи</div>
                    <div className = 'tabs-blok__step1__order-info__city-point'>
                      <div>{selectedCity=== null? '': selectedCity.label }</div>
                      <div className ='test'>{selectedPoint=== null? '': selectedPoint.label }</div>
                    </div>
                    <div className = 'tabs-blok__step1__order-info__price'><b>Цена:</b> от 8000 до 12000 ₽</div>
                    <button className = 'tabs-blok__step1__order-info__button'>Выбрать модель</button>                    
                </div>
                {/* <Step1/> */}
                </TabPanel>
                {/* модель */}
                <TabPanel>
                <div className = 'tabs-block__step2__radio'>
                    <input id = 'rb1'  type="radio" value="allModel" name="model" checked={allCarsState} onChange={handleChangeRB1} />
                    <label for = 'rb1' >Все модели</label>         
                    <input id = 'rb2' type="radio" value="economy" name="model" checked={economyCarsState} onChange={handleChangeRB2} /> 
                    <label for = 'rb2'>Эконом</label>
                    <input id = 'rb3' type="radio" value="premium" name="model" checked={premiumCarsState} onChange={handleChangeRB3}/>
                    <label for = 'rb3'>Премиум </label>       
                </div>
                <div className = 'tabs-block__step2-row'>
                  {CarsData && CarsData.map(el => {
                     return (
                       <div className = 'tabs-block__step2-item' onClick = {() => setSelectedModel(el.name)}>
                        <div className = 'tabs-block__step2-item__name'>{el.name}</div>
                        <div className = 'tabs-block__step2-item__price'>{el.priceMin}-{el.priceMax} ₽</div>
                        <img src ={'https://api-factory.simbirsoft1.com/'+ el?.thumbnail?.path} width="256" height="116.36" className = 'tabs-block__step2-item__img'></img>
                      </div>
                     )})                    
                  }
                </div>
                <div className = 'tabs-blok__step1__order-info'>
                    <div className = 'tabs-blok__step1__order-info__order'>Ваш заказ:</div>
                    <div className = 'tabs-blok__step1__order-info__point'>Пункт выдачи</div>
                    <div className = 'tabs-blok__step1__order-info__city-point'>
                      <div>{selectedCity=== null? '': selectedCity.label }</div>
                      <div>{selectedPoint=== null? '': selectedPoint.label }</div>
                    </div>
                    <div className = 'tabs-blok__step1__order-info__model'>Модель</div>
                    <div>{selectedModel=== null? '': selectedModel}</div>
                    <div className = 'tabs-blok__step1__order-info__price'><b>Цена:</b> от 8000 до 12000 ₽</div>
                    <button className = 'tabs-blok__step1__order-info__button'>Дополнительно</button>                    
                </div>

                </TabPanel>
                {/* дополнительно */}
                <TabPanel>
                <div className = 'tabs-blok__step1__order-info'>
                    <div className = 'tabs-blok__step1__order-info__order'>Ваш заказ:</div>
                    <div className = 'tabs-blok__step1__order-info__point'>Пункт выдачи</div>
                    <div className = 'tabs-blok__step1__order-info__city-point'>
                      <div>{selectedCity=== null? '': selectedCity.label }</div>
                      <div>{selectedPoint=== null? '': selectedPoint.label }</div>
                    </div>
                    <div className = 'tabs-blok__step1__order-info__price'><b>Цена:</b> от 8000 до 12000 ₽</div>
                    <button className = 'tabs-blok__step1__order-info__button'>Итого</button>                    
                </div>
                </TabPanel>
                {/* итого */}
                <TabPanel>
                <div className = 'tabs-blok__step1__order-info'>
                    <div className = 'tabs-blok__step1__order-info__order'>Ваш заказ:</div>
                    <div className = 'tabs-blok__step1__order-info__point'>Пункт выдачи</div>
                    <div className = 'tabs-blok__step1__order-info__city-point'>
                      <div>{selectedCity=== null? '': selectedCity.label }</div>
                      <div>{selectedPoint=== null? '': selectedPoint.label }</div>
                    </div>
                    <div className = 'tabs-blok__step1__order-info__price'><b>Цена:</b> от 8000 до 12000 ₽</div>
                    <button className = 'tabs-blok__step1__order-info__button'>Заказать</button>                    
                </div>
                </TabPanel>
        </Tabs>
  </div>
    )

}

export default OrderPage