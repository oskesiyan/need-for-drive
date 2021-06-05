import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { MenuContext } from './../../context/NavState';
import { ReactSVG } from 'react-svg'
import instagram from './../../img/Instagram.svg';
import facebook from './../../img/facebook.svg';
import telegram from './../../img/telegram.svg';
import HamburgerButton from './HamburgerButton';

const Menu = styled.nav`
  position: absolute;
  display: block;
  top: 0px;
  bottom: 0px;
  z-index: 600; 
  max-width: 100%;
  margin-top: 0px;
  padding-top: 307px;
  padding-right: 0px;
  
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
    background: linear-gradient(to right, #111518 66.6%, rgba(21, 27, 31, 0.81) 33.4%);
      
    }
  @media screen and (max-width: 1023px) { 
    background: #111518;
      
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
  margin-left: 128px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  :hover {
   color: #0EC261;
  }
  @media screen and (max-width: 767px) { 
    
    margin-left: 16px;
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
margin-left: 128px;
top: 543px;
@media screen and (max-width: 767px) { 
  width: 144px;
  height: 32px;
  margin-left: 16px;
  top: 267px;
} 
`;
export const ButtonLink = styled.div`
display: flex;
position: absolute;
width: 144px;
height: 32px;
margin-left: 0px;
top: 0px;

`;
export const Language = styled.div`
display:none;
@media screen and (max-width: 767px) { 
  display: flex;
  position: absolute;
  width: 23px;
  height: 16px;
  left: 21px;
  top: 96%;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 15px;
  color: #0EC261;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
} 
`;

export const Facebook = styled.div`
height: 32px;
width: 32px;
display: block;
background-color: white;
mask-image: url(${facebook}); 
&:hover {
  background-color: #0EC261;
`;
export const Telegram = styled.div`
height: 32px;
width: 32px;
display: block;
background-color: white;
mask-image: url(${telegram}); 
&:hover {
  background-color: #0EC261;
`;
export const Instagram = styled.div`
height: 32px;
width: 32px;
display: block;
background-color: white;
mask-image: url(${instagram}); 
&:hover {
  background-color: #0EC261;
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
      <ButtonLink><HamburgerButton /></ButtonLink>
      <MenuLink href="/parking">ПАРКОВКА</MenuLink>
      <MenuLink href="/insurance">СТРАХОВКА</MenuLink>
      <MenuLink href="/petrol">БЕНЗИН</MenuLink>
      <MenuLink href="/service">ОБСЛУЖИВАНИЕ</MenuLink>
      <ImgLink>
      {/* <ReactSVG src={telegram} />
      <ReactSVG src={facebook} /> */}
      {/* <ReactSVG src={instagram} />   */}
      {/* <Telegram fill = 'red'/> */}
      <a href = 'https://www.telegram.com'><Telegram/></a>
      <a href = 'https://www.facebook.com'><Facebook/></a>
      <a href = 'https://www.instagram.com'><Instagram/></a>
      
      </ImgLink>
      <Language>Eng</Language>      
    </>
  ),
};