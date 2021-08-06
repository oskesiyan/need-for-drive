import ButtonReady from "./../../../img/Icons/ButtonReady.svg";
import ButtonCancel from "./../../../img/Icons/ButtonCancel.svg";
import ButtonChange from "./../../../img/Icons/ButtonChange.svg";
import "./BtnActions.scss";
const BtnActions = () => {
  return (
    <div className="btn-container">
      <div className="btn-container__button">
        <button className="btn-container__button ready">
          <img src={ButtonReady} alt="svg" /> Готово
        </button>
        <button className="btn-container__button cancel">
          <img src={ButtonCancel} alt="svg" />
          Отмена
        </button>
        <button className="btn-container__button change">
          <img src={ButtonChange} alt="svg" />
          Изменить
        </button>
      </div>
    </div>
  );
};

export default BtnActions;
