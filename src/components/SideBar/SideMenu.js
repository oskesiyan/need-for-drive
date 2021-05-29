import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { MenuContext } from './../../context/NavState';
import instagram from './../../img/Instagram_white.png';
import facebook from './../../img/Facebook_white.png';
import telegram from './../../img/Telegram_white.png';

const Menu = styled.nav`
  position: absolute;
  display: block;
  top: 0px;
  bottom: 0px;
  z-index: 293; 
  max-width: 100%;
  margin-top: 0px;
  padding-top: 307px;
  padding-right: 0px;
  padding-left: 64px;
  align-items: stretch;  
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #111518 50%, rgba(21, 27, 31, 0.81) 50%);
  transform: translateX(-100%);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  
  ${props =>
    props.open &&
    css`
      transform: translateX(0);
    `}
  @media screen and (max-width: 1439px) { 
      background:  #111518;
      
    }
  @media screen and (max-width: 767px) { 
    background:  #111518;
    padding-left: 0px;
    padding-top: 0px;
  } 
  
`;

export const MenuLink = styled.a`
@font-face {
  font-family: 'Roboto-Medium';
  src: local('Roboto'), url(./../../fonts/Roboto-Medium.ttf) format('truetype');
}
  position: relative;
  display: block;
  text-align: left;
  max-width: 100%;
  transition: background-position 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  text-decoration: none;
  color: #FFFFFF;
  font-size: 32px;
  line-height: 37px;
  margin-bottom: 15px;
  font-weight: 500px;
  font-family: Roboto-Medium;
  font-style: normal;
  margin-left: 64px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  :hover {
   color: #0EC261;
  }
  @media screen and (max-width: 767px) { 
    
    margin-left: 28px;
    top: 100px;
    font-size: 22px;
    line-height: 26px;
  } 
`;
export const ImgLink = styled.div`
display: flex;
justify-content:space-between;
position: absolute;
width: 144px;
height: 32px;
margin-left: 64px;
top: 543px;
@media screen and (max-width: 767px) { 
  width: 144px;
  height: 32px;
  margin-left: 28px;
  top: 267px;
} 
`;

export const SideMenu = ({ children }) => {
  const { isMenuOpen } = useContext(MenuContext);

  return <Menu open={isMenuOpen}>{children}</Menu>;
};

SideMenu.propTypes = {
  children: PropTypes.node,
};

SideMenu.defaultProps = {
  children: (
    <>
      <MenuLink href="/parking">ПАРКОВКА</MenuLink>
      <MenuLink href="/insurance">СТРАХОВКА</MenuLink>
      <MenuLink href="/petrol">БЕНЗИН</MenuLink>
      <MenuLink href="/service">ОБСЛУЖИВАНИЕ</MenuLink>
      <ImgLink>
      <img src = {telegram} alt = ''/>
      <img src = {facebook} alt = ''/>
      <img src = {instagram} alt = ''/>      
      </ImgLink>
      
    </>
  ),
};