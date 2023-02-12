import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/right4.png";
import jwt_decode from "jwt-decode";
import "./MainMenu.scss";
import heart from "../../assets/images/3.png";
import box from "../../assets/images/Li.png";
import swap from "../../assets/images/phone.png";
import shelves from "../../assets/images/shelves.png"

const MainMenu = () => {
  const [userInitials, setUserInitials] = useState("")
  const [token, setToken] = useState("");
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);

    if (token) {
      const decodedToken = jwt_decode(token);
      const initials = `${decodedToken.first_name[0]}${decodedToken.last_name[0]}`;
      setUserInitials(initials);
    }
  }, []);
  
  return (
    <div className="header">
      <img src={logo} alt="Logo" className="header__logo" />
      <nav className="menu-container">
        <ul className="menu">
        <li className="menu__link-container">
            <Link to="/my-items" className="menu-link">
              <img src={shelves} className={location.pathname === "/match" ? "menu-link__icon menu-link__icon-active":"menu-link__icon"}/>
              <p className="menu-item-text">my items</p>
            </Link>
          </li>
          <li className="menu__link-container">
            <Link to="/my-matches" className="menu-link">
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
          <p className="profile-icon" >{userInitials}</p>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
