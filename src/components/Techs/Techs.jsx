import './Techs.css';

export default function Techs() {
  return (
    <section className="techs" id="techs">
      <h2 className="techs__title">Технологии</h2>
      <div className="techs__wrap">
        <h2 className="techs__subtitle">Стек технологий</h2>
        <p className="techs__info">На курсах в Практикуме освоил технологии, которые применял на практике в дипломном проекте, пет-проектах и в дальнейшем на стажировке в реальном проекте</p>
        <ul className="techs__list">
          <li className="techs__list-item">HTML</li>
          <li className="techs__list-item">BEM</li>
          <li className="techs__list-item">CSS</li>
          <li className="techs__list-item">SASS/SCSS</li>
          <li className="techs__list-item">JS</li>
          <li className="techs__list-item">React</li>
          <li className="techs__list-item">Redux</li>
          <li className="techs__list-item">React Native</li>
          <li className="techs__list-item">Git</li>
          <li className="techs__list-item">Webpack</li>
          <li className="techs__list-item">Node.js</li>
          <li className="techs__list-item">Express.js</li>
          <li className="techs__list-item">MongoDB</li>
        </ul>
      </div>
    </section >
  );
}