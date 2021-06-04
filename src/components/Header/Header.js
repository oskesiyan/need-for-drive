import './Header.scss';
import map from './../../img/Map.png'

const Header = () => {
    return(
        <div className = 'header'>
            <div className = 'header__logo'>Need for drive</div>
            <img src = {map} className = 'header__location'/>
        </div>
    )
}

export default Header