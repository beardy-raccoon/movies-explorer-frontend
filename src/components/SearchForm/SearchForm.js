import React from 'react';
import './SearchForm.css';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useLocation } from 'react-router-dom';

export default function SearchForm({handleSearch, handleSetShort, isShort}) {
  const location = useLocation();
  const currentUser =React.useContext(CurrentUserContext);
  const { values, handleChange, isValid, errors } = useFormWithValidation();

  function handleSubmit(evt) {
    evt.preventDefault();
    handleSearch(values.film);
  };

  React.useEffect(() => {
    console.log('path', location);
    if (location.pathname === '/movies' && localStorage.getItem(`${currentUser._id} - movieSearch`)) {
      const searchValue = localStorage.getItem(`${currentUser._id} - movieSearch`);
      values.film = searchValue;
    }
  }, [currentUser]);

  return (
    <div className="search-form">
      <form className="form form_search-form" onSubmit={handleSubmit}>
        <input
          id="film"
          name="film"
          type="text"
          className="input search-form__input"
          placeholder="Фильм"
          utoComplete="off"
          value={values.film || ''}
          onChange={handleChange}
          required />
        <span className="input__error-text">{errors.film}</span>
        <button className={`button search-form__button ${!isValid && 'form__submit-button_disabled'}`} type="submit" disabled={!isValid}></button>
        <label className="search-form__checkbox-container">
          <input className="search-form__checkbox" type="checkbox" checked={isShort} onChange={handleSetShort} />
          <span className="search-form__icon" />
          <span className="search-form__text">Короткометражки</span>
        </label>
      </form>
    </div>
  );
}