import './Header.css';
import React from "react";
import { Link} from "react-router-dom";
import Navigation from '../Navigation/Navigation';

export default function Header(props) {
  return (
    <header className="header">
        <div className={`header__wrapper ${props.authUser ? 'header__wrapper_auth' : ''}`}>
          <Link to="/">
            <div className="header__logo"></div>
          </Link>
          <Navigation authUser={props.authUser}/>
        </div>
    </header >
  );
}