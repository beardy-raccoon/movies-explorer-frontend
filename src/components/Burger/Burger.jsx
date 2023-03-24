import './Burger.css';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Burger() {

  const [isMenuShown, setIsMenuShown] = React.useState(false);

  const handleShowMenu = () => {
    setIsMenuShown(true);
  };

  const handleCloseMenu = () => {
    setIsMenuShown(false);
  };

  return (
    <div className="burger">
      <button className="button burger__button" type="button" title='Открыть меню' onClick={handleShowMenu}></button>
      {isMenuShown ?
        <section className="burger__overlay">
          <nav className="burger__menu">
            <button className="button burger__close-button" type="button" title='Закрыть меню' onClick={handleCloseMenu}></button>
            <ul className="burger__link-list">
              <li className="burger__link-list-item">
                <NavLink to='/' className="link burger__link">Главная</NavLink>
              </li>
              <li className="burger__link-list-item">
                <NavLink to='/movies' className="link burger__link">Фильмы</NavLink>
              </li>
              <li className="burger__link-list-item">
                <NavLink to='/saved-movies' className="link burger__link">Сохранённые фильмы</NavLink>
              </li>
              <li className="burger__link-list-item">
                <Link to='/profile' style={{ textDecoration: 'none' }}>
                  <p className="link burger__link burger__link_bottom">Аккаунт</p>
                </Link>
              </li>
            </ul>
          </nav>
        </section>
        : null
      }
    </div>
  )
};