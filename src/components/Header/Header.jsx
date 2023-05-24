import React from "react";
import './Header.css';
import Navigation from '../Navigation/Navigation';

export default function Header(props) {
  return (
    <header className="header">
      <div className={`header__wrapper ${props.authUser ? 'header__wrapper_auth' : ''}`}>
        <div className="header__left-container">
          <a className="header__link" href='/'>
            <div className="header__logo"></div>
          </a>
        </div>
        <Navigation authUser={props.authUser} />
      </div>
    </header>
  );
}