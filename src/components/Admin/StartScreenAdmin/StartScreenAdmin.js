import FooterAdmin from "../FooterAdmin/FooterAdmin";
import HeaderAdmin from "../HeaderAdmin/HeaderAdmin";
import MenuAdmin from "../MenuAdmin/MenuAdmin";
import "./StartScreenAdmin.scss";
import "./../StyleAdmin.scss";

const StartScreenAdmin = () => {
  return (
    <div className="start-screen-admin">
      <MenuAdmin />
      <div className="admin__header-footer">
        <HeaderAdmin />
        <FooterAdmin />
      </div>
    </div>
  );
};
export default StartScreenAdmin;
