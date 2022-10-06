import './Login.css';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <main className="signin-signup">
      <div className="form form_login">
        <Link to="/">
          <div className="header__logo"></div>
        </Link>
        <h1 className="form__title">Рады видеть!</h1>
        <form className="form__content">
          <label className="form__label" htmlFor="email">E-mail</label>
          <input className="input form__input" type="email" placeholder="Email" name="email" required></input>
          <label className="form__label" htmlFor="password">Пароль</label>
          <input className="input form__input" type="password" placeholder="Пароль" name="password" required></input>
          <button type="submit" aria-label="Войти" className="button form__submit-button">Войти</button>
        </form>
        <div className="signin-signup__link-wrap">
          <p className="signin-signup__text">Ещё не зарегистрированы?</p>
          <Link to="/sign-up" style={{ textDecoration: 'none' }}>
            <p className="link signin-signup__link">Регистрация</p>
          </Link>
        </div>
      </div>
    </main>
  );
}