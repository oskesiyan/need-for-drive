import { ReactSVG } from "react-svg";
import logoIcon from "./../../../img/Icons/LogoIcon.svg";
import "./MenuAdmin.scss";

const MenuAdmin = () => {
  return (
    <div>
    <div class="col">
  <h3 class="widget-title">Распродажа</h3>
  <div class="price-line">
    <div class="product-image">
      <a href=""><img src="https://html5book.ru/wp-content/uploads/2017/03/sport1.jpeg"/></a>
    </div>
    <div class="product-content">
      <div class="product-title"><a href="">Продукт 1</a></div>
      <div class="star-rating">&nbsp;</div>
      <div class="price-box"><span>₽ 2000</span></div>
    </div>
  </div>
  <div class="price-line">
    <div class="product-image">
      <a href=""><img src="https://html5book.ru/wp-content/uploads/2017/03/sport2.jpeg"/></a>
    </div>
    <div class="product-content">
      <div class="product-title"><a href="">Продукт 2</a></div>
      <div class="star-rating">&nbsp;</div>
      <div class="price-box"><span>₽ 2500</span></div>
    </div>
  </div>
  <div class="price-line">
    <div class="product-image">
      <a href=""><img src="https://html5book.ru/wp-content/uploads/2017/03/sport3.jpeg"/></a>
    </div>
    <div class="product-content">
      <div class="product-title"><a href="">Продукт 3</a></div>
      <div class="star-rating">&nbsp;</div>
      <div class="price-box"><span>₽ 2070</span></div>
    </div>
  </div>
</div></div>
   );
};

export default MenuAdmin;
