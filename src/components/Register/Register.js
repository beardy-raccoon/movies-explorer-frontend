import './Register.css';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <main className="signin-signup">
      <div className="form form_register">
        <Link to="/">
          <div className="header__logo"></div>
        </Link>
        <h1 className="form__title">Добро пожаловать!</h1>
        <form className="form__content">
          <label className="form__label" htmlFor="name">Имя</label>
          <input id="name" className="input form__input" type="text" placeholder="Имя" name="name" minLength="2" required></input>
          <label className="form__label" htmlFor="email">E-mail</label>
          <input id="email" className="input form__input" type="email" placeholder="Email" name="email" minLength="2" required></input>
          <label className="form__label" htmlFor="password">Пароль</label>
          <input id="password" className="input form__input" type="password" placeholder="Пароль" name="password" minLength="3" required></input>
          <button type="submit" aria-label="Войти" className="button form__submit-button">Зарегистрироваться</button>
        </form>
        <div className="signin-signup__link-wrap">
          <p className="signin-signup__text">Уже зарегистрированы?</p>
          <Link to="/sign-in" style={{ textDecoration: 'none' }}>
            <p className="link signin-signup__link">Войти</p>
          </Link>
        </div>
      </div>
    </main>
  );
}