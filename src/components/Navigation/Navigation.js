import './Navigation.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Burger from '../Burger/Burger';

export default function Navigation(props) {

  const [isBurgerButtonShown, setIsBurgerButtonShown] = React.useState(false);

  const handleBurgerButtonShow = () => {
    if (window.innerWidth <= 1023) {
      setIsBurgerButtonShown(true)
    } else {
      setIsBurgerButtonShown(false)
    }
  }

  React.useEffect(() => {
    window.addEventListener('resize', handleBurgerButtonShow);
  });

  React.useEffect(() => handleBurgerButtonShow(), [])

  return (
    <nav className={`navigation ${props.authUser ? 'navigation_auth' : ''}`}>
      {!props.authUser &&
        <>
          <Link to="/sign-up" style={{ textDecoration: 'none' }}>
            <p className="header__nav-link">Регистрация</p>
          </Link>
          <Link to="/sign-in">
            <button className="button header__nav-button">Войти</button>
          </Link>
        </>
      }
      {props.authUser &&
        <>
          {!isBurgerButtonShown &&
            <>
              <div className="header__movies-links">
                <Link to="/movies" style={{ textDecoration: 'none' }}>
                  <p className="header__nav-link">Фильмы</p>
                </Link>
                <Link to="/saved-movies" style={{ textDecoration: 'none' }}>
                  <p className="header__nav-link">Сохранённые фильмы</p>
                </Link>
              </div>
              <div className="header__user-link">
                <Link to="/profile" style={{ textDecoration: 'none' }}>
                  <p className="header__nav-link header__nav-link-user">Аккаунт</p>
                </Link>
              </div>
            </>
          }
          {isBurgerButtonShown &&
            <Burger />
          }
        </>
      }
    </nav>
  );
}