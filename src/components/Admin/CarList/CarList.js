import { Redirect } from 'react-router-dom';
import MenuAdmin from '../MenuAdmin/MenuAdmin';


const CarList = () => {
    if (localStorage.getItem('token') !== "unauthorized")
    return (
        <MenuAdmin/>
    )
    return <Redirect to="/admin" />;
};
export default CarList;