import './Header.css';
import React from "react";
import Navigation from '../Navigation/Navigation';

export default function Header(props) {
  return (
    <header className="header">
        <div className={`header__wrapper ${props.authUser ? 'header__wrapper_auth' : ''}`}>
          <a className="header__link" href="#promo">
            <div className="header__logo"></div>
          </a>
          <Navigation authUser={props.authUser} />
        </div>
    </header>
  );
}