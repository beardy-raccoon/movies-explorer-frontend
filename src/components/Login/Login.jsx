import './Login.css';
import { Link } from 'react-router-dom';
import React from 'react';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

export default function Login(props) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    props.handleLogin(values.email, values.password);
  };

  React.useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <main className="signin-signup">
      <div className="form form_login">
        <Link to="/">
          <div className="header__logo"></div>
        </Link>
        <h1 className="form__title">Рады видеть!</h1>
        <form className="form__content" onSubmit={handleFormSubmit}>
          <label className="form__label" htmlFor="email">E-mail</label>
          <input
            className={`input form__input ${errors.email && 'form__input_error'}`}
            type="email"
            placeholder="Email"
            name="email"
            autoComplete="email"
            value={values.email || ""}
            onChange={handleChange}
            required />
          <span className="input__error-text">{errors.email || ''}</span>
          <label className="form__label" htmlFor="password">Пароль</label>
          <input
            className={`input form__input ${errors.password && 'form__input_error'}`}
            type="password"
            placeholder="Пароль"
            name="password"
            autoComplete="current-password"
            value={values.password || ""}
            onChange={handleChange}
            required />
          <span className="input__error-text">{errors.password || ''}</span>
          <button type="submit" aria-label="Войти" className={`button form__submit-button ${!isValid && 'form__submit-button_disabled'}`} disabled={!isValid}>Войти</button>
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