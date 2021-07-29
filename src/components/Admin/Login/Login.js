import { ReactSVG } from "react-svg";
import logoIcon from "./../../../img/Icons/LogoIcon.svg";
import "./Login.scss";
import { useHistory } from "react-router-dom";
import { useCallback, useState } from "react";
import { getToken } from "../../../utils";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const onClickButtonLogin = useCallback(async () => {
    const result = await getToken({ username, password });
    localStorage.setItem("token", result);
    history.push("/admin-panel");
  }, [username, password]);

  return (
    <div className="login-page">
      <div className="login-page__logo">
        <ReactSVG src={logoIcon} />
        <div className="login-page__logo__text">Need for drive</div>
      </div>
      <div className="login-page__account">
        <div className="login-page__account__text">Вход</div>
        {localStorage.getItem("token") !== null &&
          localStorage.getItem("token") === "unauthorized" && (
            <div className="login-page__account__unauthorized">
              Неправильный логин или пароль!
            </div>
          )}

        <div className="login-page__account__inputs">
          <div>Почта</div>
          <input
            className="login-page__account__inputs__login"
            onChange={(evt) => setUserName(evt.target.value)}
          />
          <div>Пароль</div>
          <input
            type="password"
            className="login-page__account__inputs__password"
            onChange={(evt) => setPassword(evt.target.value)}
          />
        </div>
        <div className="login-page__account__enter">
          <div className="login-page__account__enter__text">
            Запросить доступ
          </div>

          <button
            className="login-page__account__enter__button"
            onClick={() => onClickButtonLogin()}
          >
            Войти
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
