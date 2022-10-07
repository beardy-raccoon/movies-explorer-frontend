import './Portfolio.css';

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__link-list">
        <li className="portfolio__link-list-item">
          <a href="https://beardy-raccoon.github.io/how-to-learn/" target={'_blank'} rel="noreferrer" className="portfolio__link">
            <p className="portfolio__link-text">Статичный сайт</p>
            <div className="portfolio__link-arrow"></div>
          </a>
        </li>
        <li className="portfolio__link-list-item">
          <a href="https://beardy-raccoon.github.io/russian-travel/index.html" target={'_blank'} rel="noreferrer" className="portfolio__link">
            <p className="portfolio__link-text">Адаптивный сайт</p>
            <div className="portfolio__link-arrow"></div>
          </a>
        </li>
        <li className="portfolio__link-list-item">
          <a href="https://raccoon.nomoredomains.sbs/" target={'_blank'} rel="noreferrer" className="portfolio__link">
            <p className="portfolio__link-text">Одностраничное приложение</p>
            <div className="portfolio__link-arrow"></div>
          </a>
        </li>
      </ul>
    </section>
  );
}