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
                      <div>{selectedPoint=== null? '': selectedPoint.label }</div>
                    </div>
                    <div className = 'tabs-blok__step1__order-info__price'><b>Цена:</b> от 8000 до 12000 ₽</div>
                    <button className = 'tabs-blok__step1__order-info__button'>Выбрать модель</button>                    
                </div>
                </TabPanel>
                {/* модель */}
                <TabPanel>
                <h2>Any content 2</h2>
                </TabPanel>
                {/* дополнительно */}
                <TabPanel>
                <h2>Any content 3</h2>
                </TabPanel>
                {/* итого */}
                <TabPanel>
                <h2>Any content 4</h2>
                </TabPanel>
        </Tabs>
  </div>
    )

}

export default OrderPage