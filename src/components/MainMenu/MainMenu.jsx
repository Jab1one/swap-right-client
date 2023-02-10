import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/right4.png";
import "./MainMenu.scss";
import heart from "../../assets/images/3.png";
import box from "../../assets/images/Li.png";
import swap from "../../assets/images/phone.png";


const MainMenu = () => {

  const location = useLocation();

  return (
    <div className="header">
      <img src={logo} alt="Logo" className="header__logo" />
      <nav className="menu-container">
        <ul className="menu">
          {/* <li className="menu__link-container">
            <Link to="/chat" className="menu-link">
              <Chaticon className={location.pathname === "/chat" ? "menu-link__icon menu-link__icon-active":"menu-link__icon"}/>
              <p className="menu-item-text">chat</p>
            </Link>
          </li> */}
          <li className="menu__link-container">
            <Link to="/matches" className="menu-link">
              <img src={heart} className={location.pathname === "/match" ? "menu-link__icon menu-link__icon-active":"menu-link__icon"}/>
              <p className="menu-item-text">match</p>
            </Link>
          </li>
          <li className="menu__link-container">
            <Link to="/list-item" className="menu-link">
              <img src={box} className={location.pathname === "/list-item" ? "menu-link__icon menu-link__icon-active":"menu-link__icon"}/>
              <p className="menu-item-text">list</p>
            </Link>
          </li>
          <li className="menu__link-container">
            <Link to="/swap" className="menu-link">
              <img src={swap} className={location.pathname === "/swap" ? "menu-link__icon menu-link__icon-active":"menu-link__icon"}/>
              <p className="menu-item-text">swap</p>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="profile-container">
        <div className="icon-container">
          <p className="profile-icon" >JA</p>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
