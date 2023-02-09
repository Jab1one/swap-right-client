import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/right4.png";
import "./MainMenu.scss";
import { ReactComponent as Chaticon } from "../../assets/images/chat-box-icon.svg";
import { ReactComponent as Matchicon } from "../../assets/images/like-heart-round-icon.svg";
import { ReactComponent as Listicon } from "../../assets/images/image-upload-icon.svg";
import { ReactComponent as Swapicon } from "../../assets/images/transfer-arrows-icon.svg";


const MainMenu = () => {
  return (
    <div className="header">
      <img src={logo} alt="Logo" className="header__logo" />
      <nav className="menu-container">
        <ul className="menu">
          <li className="menu__link-container">
            <Link to="/chat" className="menu-link">
              <Chaticon className="menu-link__icon"/>
              <p className="menu-item-text">chat</p>
            </Link>
          </li>
          <li className="menu__link-container">
            <Link to="/matches" className="menu-link">
              <Matchicon className="menu-link__icon"/>
              <p className="menu-item-text">match</p>
            </Link>
          </li>
          <li className="menu__link-container">
            <Link to="/list-item" className="menu-link">
              <Listicon className="menu-link__icon"/>
              <p className="menu-item-text">list</p>
            </Link>
          </li>
          <li className="menu__link-container">
            <Link to="/swap" className="menu-link">
              <Swapicon className="menu-link__icon"/>
              <p className="menu-item-text">swap</p>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="icon-container">
        <img src={logo} alt="Logo" className="profile-icon" />
      </div>
    </div>
  );
};

export default MainMenu;
