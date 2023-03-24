import './AboutMe.css';
import myPhoto from '../../images/my-photo.png';

export default function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__title">Немного обо мне</h2>
      <div className="about-me__wrap">
        <div className="about-me__img-container">
          <img src={myPhoto} className="about-me__img" alt="фото студента"></img>
        </div>
        <div className="about-me__info-wrap">
          <h3 className="about-me__subtitle">Владислав</h3>
          <h4 className="about-me__description">Фронтенд-разработчик</h4>
          <p className="about-me__info">Я родился в Москве, а вырос и учился в Саратове, закончил финансово-кредитный факультет СГСЭУ. У меня есть жена и дочь. Я люблю слушать музыку,
            а ещё увлекаюсь сноубордингом, вейкбордингом, велосипедами и мотоциклами. С ноября 2021 года поступил на курс по веб-разработке в Яндекс Практикуме,
            было очень интересно и у меня неплохо выходило, так со временем я полностью погрузился в обучение и ушёл с постоянной работы.
          </p>
          <p className="about-me__info">На данный момент общий опыт во frontend разработке более года, хорошее знание HTML(BEM), CSS(SASS/SCSS), JS, React/Redux(Saga) и React Native(около 3 месяцев).
            Имею опыт разработки 2-х fullstack SPA на React с нуля до деплоя на сервер. По Vue есть базовое понимание, но готов переучиться на него.
            Есть базовые знания бэкенд части(Node.js, Express.js, MongoDB, RESTful API), базовое понимание основ TypeScript. Уверенно использую инфраструктурные инструменты - Git, Webpack, ESlint.
            Внимателен к деталям, предпочитаю досконально изучить задачу/проблему и пути ее решения. Стремлюсь развивать свои профессиональные навыки и приносить пользу компании/проекту.
          </p>
        </div>
      </div>
      <a href="https://github.com/beardy-raccoon" target={'_blank'} rel="noreferrer" className="about-me__link">See my projects on Github</a>
    </section>
  );
}