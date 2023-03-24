import './NotFound.css';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found__container">
        <div className="not-found__wrapper">
          <h1 className="not-found__title">404</h1>
          <p className="not-found__info">Страница не найдена</p>
        </div>
      </div>
      <Link to={-3} style={{ textDecoration: 'none' }}>
        <p className="non-found__link">Назад</p>
      </Link>
    </main>
  );
}