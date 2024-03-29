import './NavTab.css';

export default function NavTab() {
  return (
    <nav className="nav-tab">
      <ul className="nav-tab__list">
        <li className="nav-tab__list-item">
          <a href="#about-project" className="nav-tab__link">О проекте</a>
        </li>
        <li className="nav-tab__list-item">
          <a href="#techs" className="nav-tab__link">Технологии</a>
        </li>
        <li className="nav-tab__list-item">
          <a href="#about-me" className="nav-tab__link">Обо мне</a>
        </li>
        <li className="nav-tab__list-item">
          <a href="/sign-in" className="nav-tab__link">Movies Explorer</a>
        </li>
      </ul>
    </nav>
  );
}