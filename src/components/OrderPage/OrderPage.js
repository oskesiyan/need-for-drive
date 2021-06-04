// import { render } from '@testing-library/react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './react-tabs.scss';
import './OrderPage.scss';
import mapOrder from './../../img/Map_order.png';
import {Autocomplete} from 'react-autocomplete';
import {TextField} from 'react-textfield';
import { useState, useEffect } from 'react';

const OrderPage = () => {

return (
    <div className = 'tabs-block'>
        {/* <div className = 'tabs-block__line'></div>         */}
        <Tabs disableUpDownKeys = 'true'>
                <TabList>
                <Tab>Местоположение</Tab>
                <Tab>Модель</Tab>
                <Tab>Дополнительно</Tab>
                <Tab>Итого</Tab>
                </TabList>
                {/* местоположение */}
                <TabPanel>                    
                <div className = 'tabs-blok__step1__position'>
                    <div className = 'tabs-blok__step1__position__city'>Город</div>
                    <div className = 'tabs-blok__step1__position__point'>Пункт выдачи</div>
                    <div className = 'tabs-blok__step1__position__map'>Выбрать на карте:</div>
                    <img src = {mapOrder} className = 'tabs-blok__step1__position__mapOrder'></img>
                </div>
                <div className = 'tabs-blok__step1__order-info'>
                    <div className = 'tabs-blok__step1__order-info__order'>Ваш заказ:</div>
                    <div className = 'tabs-blok__step1__order-info__point'>Пункт выдачи</div>
                    <div className = 'tabs-blok__step1__order-info__price'>Цена:</div>
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