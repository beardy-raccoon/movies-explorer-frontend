import './Profile.css';
import Header from "../Header/Header";
import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

export default function Profile({ handleSignOut, handleDeleteProfile, onUpdate }) {
  const currentUser = React.useContext(CurrentUserContext);

  const { handleChange, errors, isValid, resetForm } = useFormWithValidation();
  const [userName, setUserName] = React.useState('');
  const [userEmail, setUserEmail] = React.useState('');
  const [isInfoChanged, setIsInfoChanged] = React.useState(false);
  const [isInputDisabled, setIsInputDisabled] = React.useState('true');

  const handleNameChange = (evt) => {
    const newName = evt.target.value;

    if (newName !== currentUser.name) {
      setIsInfoChanged(true)
    } else {
      setIsInfoChanged(false)
    }
    setUserName(newName);
    handleChange(evt);
  }

  const handleEmailChange = (evt) => {
    const newEmail = evt.target.value;

    if (newEmail !== currentUser.name) {
      setIsInfoChanged(true)
    } else {
      setIsInfoChanged(false)
    }
    setUserEmail(newEmail);
    handleChange(evt);
  }

  const handleUpdateUser = (evt) => {
    evt.preventDefault();
    if (isInfoChanged && isValid) {
      onUpdate(userName, userEmail);
      setIsInputDisabled(true);
      setIsInfoChanged(false);
    }
  }

  React.useEffect(() => {
    setIsInputDisabled(true);
    setUserName(currentUser.name || '');
    setUserEmail(currentUser.email || '');
    setIsInfoChanged(false);
  }, [currentUser])

  React.useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <>
      <Header authUser={true} />
      <main className="profile">
        <form className="profile__form" onSubmit={handleUpdateUser}>
          <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
          <div className="profile__input-wrapper">
            <label className="profile__input-group">Имя
              <input
                className={`input profile__input profile__input_name ${errors.email && 'form__input_error'}`}
                id="name"
                name="name"
                type="text"
                placeholder="Имя"
                onChange={handleNameChange}
                value={userName || ''}
                minLength="2"
                disabled={isInputDisabled}
                required />
            </label>
            <span className="input__error-text">{errors.name || ''}</span>
          </div>
          <div className="profile__input-wrapper">
            <label className="profile__input-group">E-mail
              <input
                className={`input profile__input profile__input_email ${errors.email && 'form__input_error'}`}
                id="email"
                name="email"
                type="email"
                placeholder="email"
                onChange={handleEmailChange}
                value={userEmail || ''}
                disabled={isInputDisabled}
                required />
            </label>
            <span className="input__error-text">{errors.email || ''}</span>
          </div>
          {isInputDisabled ?
            <button type="button" aria-label="Редактировать профиль" className="button profile__form-button_edit" onClick={() => setIsInputDisabled(false)}>Редактировать</button>
            :
            <button type="submit" aria-label="Редактировать профиль" className="button profile__form-button_edit" disabled={!isInfoChanged}>Сохранить</button>
          }
          <button type="button" className="button profile__form-button_exit" onClick={handleSignOut}>Выйти из аккаунта</button>
          <button type="button" className="button profile__form-button_exit" onClick={handleDeleteProfile}>Удалить аккаунт</button>
        </form>
      </main>
    </>
  );
}