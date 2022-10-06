import './MoviesCard.css';


export default function MoviesCard({movie}) {
  const isLiked = movie.like === true;
  const isSaved = movie.saved === true;
  return (
    <li className="movies-card">
      <img className="movie-card_img" src={movie.img} alt="превью фильма"/>
      <div className="movies-card__label">
        <p className="movies-card__title">{movie.title}</p>
        { !isSaved &&
        <button className={`button movie-card__button ${isLiked? 'movie-card__button_liked ' : 'movie-card__button_nolike'}`}></button>
        }
        { isSaved &&
        <button className="button movie-card__button movie-card__button_delete"></button>
        }
      </div>
      <p className="movies-card__time">{movie.time}</p>
    </li>
  );
}