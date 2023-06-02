import React, { useState } from "react";
import './Terminal.scss';

export default function Terminal({ isTerminalOpen, setIsTerminalOpen }) {
  const [isTerminalFull, setIsTerminalFull] = useState(false);

  const handleClickTerminalButton = (evt) => {
    const terminal = document.querySelector('.terminal');
    evt.target.className === 'close-button' && setIsTerminalOpen(false);
    evt.target.className === 'full-button' && setIsTerminalFull(prev => !prev);
    evt.target.className === 'min-button' && terminal.classList.toggle('terminal_position_min')
  }
  return (
    isTerminalOpen &&
    <div className={isTerminalFull ? 'terminal terminal_position_full' : 'terminal'}>
      <div className="head">
        <div className="buttons">
          <span className="close-button" onClick={handleClickTerminalButton}></span>
          <span className="min-button" onClick={handleClickTerminalButton}></span>
          <span className="full-button" onClick={handleClickTerminalButton}></span>
        </div>
        <div className="title">
          {`< Movies-Explorer-Frontend />`}
        </div>
        <div className="empty">&nbsp;</div>
      </div>
      <div className="code">User@User-MacBook-Pro Movies-Explorer-Frontend % open README.md</div>
      <div className="code">Для просмотра основного функционала приложения нажмите 'Войти' или 'Регистрация' вверху справа</div>
      <div className="code">Или перейдите со ссылке 'Movies Explorer' на навигационной панели ниже</div>
      <div className="code">Для входа можно использовать тестовый аккаунт - 2@2.com 12345</div>
      <div className="code">Также можно войти или зарегистрироваться через google аккаунт</div>
      <div className="code">
        katemeshcherinova@Kates-MacBook-Pro movies-explorer-frontend ~ %
        <span className="blink"> </span>
      </div>
    </div>
  )
}
