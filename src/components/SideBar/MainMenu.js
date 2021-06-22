import React, { useRef, useContext } from "react";
import HamburgerButton from "./HamburgerButton";
import { SideMenu } from "./SideMenu";
import useOnClickOutside from "./../../hooks/onClickOutside";
import { MenuContext } from "./../../context/NavState";
import "./MainMenu.scss";

const MainMenu = () => {
  const node = useRef();
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
  useOnClickOutside(node, () => {
    if (isMenuOpen) {
      toggleMenuMode();
    }
  });

  return (
    <header ref={node}>
      <div className="navbar">
        <HamburgerButton />
        <div className="navbar__language">Eng</div>
      </div>
      <SideMenu />
    </header>
  );
};

export default MainMenu;
