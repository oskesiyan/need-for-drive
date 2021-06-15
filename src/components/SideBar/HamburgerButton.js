import React, { useContext } from 'react';
import { MenuContext } from '../../context/NavState';
import './HamburgerButton.scss'

const HamburgerButton = () => {
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

  const clickHandler = () => {
    toggleMenuMode();
  };

  return (
    <button className={isMenuOpen ? 'active' : 'menu-button'} onClick={clickHandler} >     
      <span/>
      <span/>
      <span/>
    </button>
  );
};

export default HamburgerButton;