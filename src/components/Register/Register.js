import './Register.css';
import { Link } from 'react-router-dom';
import React from 'react';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

export default function Register(props) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    props.handleRegister(values.name, values.email, values.password);
  };

  React.useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <main className="signin-signup">
      <div className="form form_register">
        <Link to="/">
          <div className="header__logo"></div>
        </Link>
        <h1 className="form__title">Добро пожаловать!</h1>
        <form className="form__content" onSubmit={handleFormSubmit}>
          <label className="form__label" htmlFor="name">Имя</label>
          <input
            id="name"
            className={`input form__input ${errors.name && 'form__input_error'}`}
            type="text"
            placeholder="Имя"
            name="name"
            minLength="2"
            value={values.name}
            onChange={handleChange}
            required />
          <span className="input__error-text">{errors.name || ''}</span>
          <label className="form__label" htmlFor="email">E-mail</label>
          <input
            id="email"
            className={`input form__input ${errors.email && 'form__input_error'}`}
            type="email"
            placeholder="Email"
            name="email"
            minLength="2"
            value={values.email}
            onChange={handleChange}
            required />
          <span className="input__error-text">{errors.email || ''}</span>
          <label className="form__label" htmlFor="password">Пароль</label>
          <input
            id="password"
            className={`input form__input ${errors.password && 'form__input_error'}`}
            type="password"
            placeholder="Пароль"
            name="password"
            minLength="3"
            value={values.password}
            onChange={handleChange}
            required />
          <span className="input__error-text">{errors.password || ''}</span>
          <button type="submit" aria-label="Зарегистрироваться" className={`button form__submit-button form__submit-button_reg ${!isValid && 'form__submit-button_disabled'}`} disabled={!isValid}>Зарегистрироваться</button>
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