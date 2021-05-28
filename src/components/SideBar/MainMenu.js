import React, { useRef, useContext } from 'react';
import styled from 'styled-components';
import HamburgerButton from './HamburgerButton';
import { SideMenu } from './SideMenu';
import useOnClickOutside from './../../hooks/onClickOutside';
import { MenuContext } from './../../context/NavState';

const Navbar = styled.div`
  display: flex;
  position: fixed;
  box-sizing: border-box;
  max-width: 100%;
  margin: 0px;
  align-items: center;
  background: #151B1F none repeat scroll 0% 0%;
  flex-direction: column;
  width: 64px;
  height: 100%;
  left: 0px;
  top: 0px;
  justify-content: flex-start;  
  z-index: 500;
  @media screen and (max-width: 1023px) { 
    width: 85.77px;
} 
  @media screen and (max-width: 767px) { 
    width: 33.57px;
    height: 33.45px;
    left: 16px;
    top: 16px;
    background: none;
} 
`;
export const Language = styled.div`
position: absolute;
width: 23px;
height: 16px;
left: 21px;
top: 763px;

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 13px;
line-height: 15px;
color: #0EC261;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const MainMenu = () => {
  const node = useRef();
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
  useOnClickOutside(node, () => {
    // Only if menu is open
    if (isMenuOpen) {
      toggleMenuMode();
    }
  });

  return (
    <header ref={node}>
      <Navbar>
        <HamburgerButton />
        <Language>Eng</Language>
      </Navbar>
      <SideMenu />
    </header>
  );
};

export default MainMenu;