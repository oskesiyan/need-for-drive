import React, { useContext } from "react";
import { MenuContext } from "../../context/NavState";
import "./HamburgerButton.scss";

const HamburgerButton = () => {
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

  const clickHandler = () => {
    toggleMenuMode();
  };

  return (
    <button
      className={isMenuOpen ? "active" : "menu-button"}
      onClick={clickHandler}
    >
      <span className="span-button" />
      <span className="span-button" />
      <span className="span-button" />
    </button>
  );
};

export default HamburgerButton;
