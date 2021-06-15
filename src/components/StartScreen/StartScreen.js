import './StartScreen.scss';
import slide1 from './../../img/Slider/Slide1Parking.png';
import slide2 from './../../img/Slider/Slide2Insurance.png';
import slide3 from './../../img/Slider/Slide3Patrol.png';
import slide4 from './../../img/Slider/Slide4Servise.png';
import "./slick.scss";
import "./slick-theme.scss";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import Header from './../Header/Header';
import Footer from '../Footer/Footer';
import SliderBlock from './SliderBlock';

const StartScreen = () =>{
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1
  };

return(
  <div className = 'wraper'>
    <div className = 'app-wraper'>
      <Header/>          
      <div className = 'app-wraper__block'>        
        <div className = 'app-wraper__block__text1'>Каршеринг</div>
        <div className = 'app-wraper__block__text2'>Need for drive</div>
        <div className = 'app-wraper__block__text3'>Поминутная аренда авто твоего города</div>          
        <Link to = '/order' className = 'app-wraper__button-link'>
          <button className = 'app-wraper__button'>Забронировать</button>
        </Link>      
      </div>  
      <Footer/>   
    </div>
    <Slider {...settings}>     
      <SliderBlock src = {slide1} text1 = 'Бесплатная парковка' text2 = 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах'
      buttonColor = '' />
      <SliderBlock src = {slide2} text1 = 'Страховка' text2 = 'Полная страховка страховка автомобиля'
      buttonColor = 'color__slide2' />
      <SliderBlock src = {slide3} text1 = 'Бензин' text2 = 'Полный бак на любой заправке города за наш счёт'
      buttonColor = 'color__slide3' />
      <SliderBlock src = {slide4} text1 = 'Обслуживание' text2 = 'Автомобиль проходит еженедельное ТО'
      buttonColor = 'color__slide4' />
  </Slider>
</div>
)
}

export default StartScreen