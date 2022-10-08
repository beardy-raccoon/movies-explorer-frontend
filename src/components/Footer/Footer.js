import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__wrapper">
        <nav className="footer__nav">
          <ul className="footer__link-list">
            <li className="footer__link-list-item">
              <a href="https://practicum.yandex.ru/" target={'_blank'} rel="noreferrer" className="footer__link">Яндекс.Практикум</a>
            </li>
            <li className="footer__link-list-item">
              <a href="https://github.com/yandex-praktikum?tab=repositories" target={'_blank'} rel="noreferrer" className="footer__link">Github</a>
            </li>
          </ul>
        </nav>
        <p className="footer__copyright">&copy; 2022</p>
      </div>
    </footer>
  );
}