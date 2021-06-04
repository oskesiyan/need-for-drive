import './Header.scss';
// import map from './../../img/Map.png'
import map from './../../img/location_vector.svg'
import { ReactSVG } from 'react-svg'
const Header = () => {
    return(
        <div className = 'header'>
            <div className = 'header__logo'>Need for drive</div>
            <ReactSVG src={map} className = 'header__location'/>
            <div className = 'header__location-text'>Ульяновск</div>
            {/* <img src = {map} className = 'header__location'/> */}
        </div>
    )
}

export default Header