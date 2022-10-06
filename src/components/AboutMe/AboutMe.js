import './AboutMe.css';
import myPhoto from '../../images/student-min.png';

export default function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__title">Студент </h2>
      <div className="about-me__wrap">
        <div className="about-me__img-container">
          <img src={myPhoto} className="about-me__img" alt="фото студента"></img>
        </div>
        <div className="about-me__info-wrap">
          <h3 className="about-me__subtitle">Владислав</h3>
          <h4 className="about-me__description">Фронтенд-разработчик, 36 лет</h4>
          <p className="about-me__info">Я родился в Москве, а вырос и учился в Саратове, закончил финансово-кредитный факультет СГСЭУ в 2009 году. У меня есть жена и дочь. Я люблю слушать музыку,
            а ещё увлекаюсь сноубордингом, вейкбордингом, велосипедами и мотоциклами. С ноября 2021 года поступил на курс по веб-разработке в Яндекс Практикуме,
            было очень интересно и у меня неплохо выходило, так со временем я полностью погрузился в обучение и ушёл с постоянной работы.
          </p>
        </div>
      </div>
      <a href="https://github.com/beardy-raccoon" target={'_blank'} rel="noreferrer" className="about-me__link">Github</a>
    </section>
  );
}