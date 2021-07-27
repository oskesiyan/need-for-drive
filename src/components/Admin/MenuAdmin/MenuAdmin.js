import { ReactSVG } from "react-svg";
import logoIcon from "./../../../img/Icons/LogoIcon.svg";
import "./MenuAdmin.scss";

const MenuAdmin = () => {
  return (
    <div class="widget">
  <h3>Need for drive</h3>
  <ul>
    <li><a href="">Карточка автомобиля</a></li>
    <li><a href="">Список авто</a></li>
    <li><a href="">Заказы</a></li>
    <li><a href="">Города</a></li>
    <li><a href="">Пункты выдачи</a></li>
  </ul>
</div>
   );
};

export default MenuAdmin;
