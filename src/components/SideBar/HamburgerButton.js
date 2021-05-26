import React, { useContext } from 'react';
import styled from 'styled-components';
import { MenuContext } from '../../context/NavState';
import vector from './Vector.png';

const MenuButton = styled.button`
  display: block;
  transform-origin: 16px 11px;
  float: left;
  outline: 0;
  border: 0;
  padding: 32px;
  background:none;
  

  span {
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

 &.active {
    span:nth-of-type(1) {
      transform: rotate(45deg) translate(8px, 8px);
      width: 24px;
    }

    span:nth-of-type(2) {
      opacity: 0;
      pointer-events: none;
    }

    span:nth-of-type(3) {
      transform: rotate(-45deg) translate(5px, -5px);
      width: 24px;
    }
  }
`;

const Bar = styled.span`
display: block;
width: 24px;
height: 3px;
margin-bottom: 6px;
background-color: #fff;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  
`;

const HamburgerButton = () => {
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

  const clickHandler = () => {
    toggleMenuMode();
  };

  return (
    <MenuButton
      className={isMenuOpen ? 'active' : ''}
      aria-label="Открыть главное меню"
      onClick={clickHandler}
    >
      <Bar />
      <Bar />
      <Bar />
    </MenuButton>
  );
};

export default HamburgerButton;