import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { MenuContext } from "./../../context/NavState";
import HamburgerButton from "./HamburgerButton";
import "./SideMenu.scss";

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
  background: linear-gradient(
    to right,
    #111518 50%,
    rgba(21, 27, 31, 0.81) 50%
  );
  transform: translateX(-100%);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  ${(props) =>
    props.open &&
    css`
      transform: translateX(0);
    `}
  @media screen and (max-width: 1439px) {
    background: linear-gradient(
      to right,
      #111518 66.6%,
      rgba(21, 27, 31, 0.81) 33.4%
    );
  }
  @media screen and (max-width: 1023px) {
    background: #111518;
  }
  @media screen and (max-width: 767px) {
    background: #111518;
    padding-left: 0px;
    padding-top: 0px;
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
      <div className="button-link">
        <HamburgerButton />
      </div>
      <a className="menu-link" href="/parking">
        ПАРКОВКА
      </a>
      <a className="menu-link" href="/insurance">
        СТРАХОВКА
      </a>
      <a className="menu-link" href="/petrol">
        БЕНЗИН
      </a>
      <a className="menu-link" href="/service">
        ОБСЛУЖИВАНИЕ
      </a>
      <div className="img-link">
        <a href="https://www.telegram.com">
          <div className="img-link__telegram"></div>
        </a>
        <a href="https://www.facebook.com">
          <div className="img-link__facebook"></div>
        </a>
        <a href="https://www.instagram.com">
          <div className="img-link__instagram"></div>
        </a>
      </div>
      <div className="language">Eng</div>
    </>
  ),
};
