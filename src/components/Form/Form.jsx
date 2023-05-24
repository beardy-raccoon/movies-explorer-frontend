import React from 'react';
import './Form.css';
import { Link } from 'react-router-dom';


export default function Form({ action, handleFormSubmit, isValid, children }) {

  const formTitleText = action === 'login' ? 'Рады видеть!' : 'Добро пожаловать!';
  const formButtonText = action === 'login' ? 'Войти' : 'Зарегистрироваться';
  const quoteText = action === 'login' ? 'Ещё не зарегистрированы?' : 'Уже зарегистрированы?';
  const linkText = action === 'login' ? 'Регистрация' : 'Войти';
  const buttonType = action === 'login' ? '' : 'reg';
  const linkPath = action === 'login' ? 'sign-up' : 'sign-in';


  return (
    <>
      <div className={`form form_${action}`}>
        <Link to="/">
          <div className="header__logo"></div>
        </Link>
        <h1 className="form__title">{formTitleText}</h1>
        <form className="form__content" onSubmit={handleFormSubmit}>
          {children}
          <button
            type="submit"
            aria-label={formButtonText}
            className={`button form__submit-button form__submit-button_${buttonType} ${!isValid && 'form__submit-button_disabled'}`}
            disabled={!isValid}>{formButtonText}</button>
        </form>
        <div className="signin-signup__link-wrap">
          <p className="signin-signup__text">{quoteText}</p>
          <Link to={`/${linkPath}`} className="link">
            <p className="signin-signup__link">{linkText}</p>
          </Link>
        </div>
      </div>
    </>
  );
}