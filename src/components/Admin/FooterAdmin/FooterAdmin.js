import "./FooterAdmin.scss";
import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";

const FooterAdmin = () => {
  return (
    <div className="footer-admin">
      <Link to="/" className="footer-admin__link">
        Главная страница
      </Link>
      <div className="footer-admin__copyright">Copyright © 2020 Simbirsoft</div>
    </div>
  );
};

export default FooterAdmin;
