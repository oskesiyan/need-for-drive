import { ReactSVG } from "react-svg";
import logoIcon from "./../../../img/Icons/LogoIcon.svg";
import "./Login.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getToken } from "../../../utils";

const Login = () => {
  const [checkLogin, setCheckLogin] = useState(false);

  useEffect(async () => {
debugger
    const result2 = await getToken(
    );
  }, [checkLogin]);

  return (
    <div className="login-page">
      <div className="login-page__logo">
        <ReactSVG src={logoIcon} />
        <div className="login-page__logo__text">Need for drive</div>
      </div>
      <div className="login-page__account">
        <div className="login-page__account__text">Вход</div>
        <div className="login-page__account__inputs">
          <div>Почта</div>
          <input className="login-page__account__inputs__login"></input>
          <div>Пароль</div>
          <input
            type="password"
            className="login-page__account__inputs__password"
          ></input>
        </div>
        <div className="login-page__account__enter">
          <div className="login-page__account__enter__text">
            Запросить доступ
          </div>
{/* <Link to = '/settings'> */}
          <button className="login-page__account__enter__button" onClick = {()=> setCheckLogin(true)}>Войти</button>
          {/* </Link> */}

        </div>
      </div>
    </div>
  );
};

export default Login;
