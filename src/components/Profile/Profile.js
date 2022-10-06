import './Profile.css';

import Header from "../Header/Header";

export default function Profile() {
  return (
    <>
      <Header authUser={true} />
      <main className="profile">
        <form className="profile__form">
          <h1 className="profile__title">Привет, Виталий!</h1>
          <div className="profile__input-wrapper">
            <label className="profile__input-name">Имя </label>
            <input className="profile__input" id="name" name="name" type="text" placeholder='Имя' value={'Виталий'} disabled required />
          </div>
          <div className="profile__input-wrapper">
            <label className="profile__input-name">E-mail</label>
            <input className="profile__input" id="email" name="email" type="email" placeholder='email' value={'pochta@yandex.ru'} disabled required />
          </div>
          <button type="button" className="button profile__form-button_edit">Редактировать</button>
          <button type="button" className="button profile__form-button_exit">Выйти из аккаунта</button>
        </form>
      </main>
    </>
  );
}