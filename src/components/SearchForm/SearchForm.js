import React from 'react';
import './SearchForm.css';

export default function SearchForm() {

  const [isShort, setIsShort] = React.useState(true);

  const handleSetIsShort = () => setIsShort(!isShort);

  return (
    <div className="search-form">
      <form className="form form_search-form" noValidate>
        <input id="film" className="input search-form__input" placeholder="Фильм"></input>
        <button className="button search-form__button" type="submit"></button>
        <label className="search-form__checkbox-container">
          <input className="search-form__checkbox" type="checkbox" checked={isShort} onChange={handleSetIsShort} />
          <span className="search-form__icon" />
          <span className="search-form__text">Короткометражки</span>
        </label>
      </form>
    </div>
  );
}