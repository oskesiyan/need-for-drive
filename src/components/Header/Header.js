import './Header.scss';
// import map from './../../img/Map.png'
import map from './../../img/location_vector.svg'
import { ReactSVG } from 'react-svg'
const Header = () => {
    return(
        <div>
            <div className = 'header__logo'>Need for drive</div>
            <ReactSVG src={map} className = 'header__location-map'/>
            <div className = 'header__location-text'>Ульяновск</div>
        </div>
    )
}

export default Header