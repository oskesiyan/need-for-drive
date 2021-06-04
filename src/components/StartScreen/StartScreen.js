import './StartScreen.scss';
import slide1 from './../../img/slide1_parking.png';
import slide2 from './../../img/slide2_insurance.png';
import slide3 from './../../img/slide3_patrol.png';
import slide4 from './../../img/slide4_servise.png';
import "./slick.scss";
import "./slick-theme.scss";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

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
  <div className = 'app-wraper'>        
    <div className = 'app-wraper__block'>        
      <div className = 'app-wraper__block__text1'>Каршеринг</div>
      <div className = 'app-wraper__block__text2'>Need for drive</div>
      <div className = 'app-wraper__block__text3'>Поминутная аренда авто твоего города</div>          
      <Link to = '/order'>
        <button className = 'app-wraper__button'>Забронировать</button>
      </Link>      
    </div>      
    <Slider {...settings}>           
        <div className = 'slider-block' >
          <img src={slide1} alt = ''/>
          <div className = 'slider-block__text1'>Бесплатная парковка</div>
          <p className = 'slider-block__text2'>Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах</p>          
            <button className = 'slider-block__button'>Подробнее</button>                 
        </div>
        <div>
          <img src={slide2} alt = ''/>
          <div className = 'slider-block__text1'>Страховка</div>
          <p className = 'slider-block__text2'>Полная страховка страховка автомобиля</p>  
          <button className = 'slider-block__button color__slide2'>Подробнее</button> 
        </div>  
        <div  >
          <img src={slide3} alt = ''/>
          <div className = 'slider-block__text1'>Бензин</div>
          <p className = 'slider-block__text2'>Полный бак на любой заправке города за наш счёт</p>  
          <button className = 'slider-block__button color__slide3'>Подробнее</button> 
        </div>  
        <div >
          <img src={slide4} alt = ''/>
          <div className = 'slider-block__text1'>Обслуживание</div>
          <p className = 'slider-block__text2'>Автомобиль проходит еженедельное ТО</p>  
          <button className = 'slider-block__button color__slide4'>Подробнее</button> 
        </div>           
    </Slider>
      
  </div>
)
}

export default StartScreen