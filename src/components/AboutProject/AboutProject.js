import './AboutProject.css';

export default function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__wrapper">
        <div className="about-project__column">
          <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__info">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about-project__column">
          <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__info">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="about-project__timeline">
        <div className="about-project__timeline-wrap">
          <p className="about-project__timeline-column">1 неделя</p>
          <p className="about-project__timeline-column">4 недели</p>
        </div>
        <div className="about-project__timeline-wrap">
          <p className="about-project__timeline-stage">Back-end</p>
          <p className="about-project__timeline-stage">Front-end</p>
        </div>
      </div>
    </section>
  );
}